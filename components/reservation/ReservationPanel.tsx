"use client";

import { useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useReservation } from "./ReservationContext";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { EASE_EDITORIAL } from "@/lib/animation";
import { reservationTimes, partySizes } from "@/lib/data/openingHours";
import { restaurant } from "@/lib/data/restaurant";

const fieldClasses =
  "w-full border-b border-warm-grey/25 bg-transparent py-3 font-sans text-sm text-cream placeholder:text-slate focus:border-brass focus:outline-none";
const labelClasses = "mb-2 block font-sans text-[0.68rem] uppercase tracking-[0.2em] text-warm-grey";

const LARGE_PARTY = "large";

export function ReservationPanel() {
  const { isOpen, closePanel } = useReservation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [partySize, setPartySize] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useFocusTrap({ isOpen, onClose: closePanel, containerRef });

  const handleClose = () => {
    closePanel();
    // Reset after the exit animation has time to finish.
    window.setTimeout(() => {
      setSubmitted(false);
      setPartySize("");
      setErrors({});
    }, 400);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: Record<string, string> = {};

    const required: Array<[string, string]> = [
      ["date", "Please choose a date."],
      ["time", "Please choose a time."],
      ["partySize", "Please choose a party size."],
      ["firstName", "Please enter your first name."],
      ["lastName", "Please enter your last name."],
      ["email", "Please enter your email address."],
      ["telephone", "Please enter a contact number."],
    ];

    required.forEach(([field, message]) => {
      const value = data.get(field);
      if (!value || String(value).trim() === "") {
        nextErrors[field] = message;
      }
    });

    const email = String(data.get("email") ?? "");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // ---------------------------------------------------------------------
    // Demonstration only: no reservation is actually created. To connect a
    // real booking system, replace this block with a call to your provider
    // (e.g. a fetch() to a reservations API or a third-party widget SDK)
    // using the FormData captured above.
    // ---------------------------------------------------------------------
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[70] bg-near-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
            onClick={handleClose}
            aria-hidden="true"
          />
          <motion.div
            key="panel"
            ref={containerRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="reservation-heading"
            className="texture-noise fixed inset-y-0 right-0 z-[80] flex w-full flex-col overflow-y-auto border-l border-brass/15 bg-soft-black sm:max-w-md"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
          >
            <div className="flex items-start justify-between gap-4 border-b border-warm-grey/10 px-6 py-6 sm:px-10 sm:py-8">
              <div>
                <p className="font-sans text-[0.68rem] uppercase tracking-[0.24em] text-brass">
                  {restaurant.shortName}
                </p>
                <h2
                  id="reservation-heading"
                  className="mt-2 font-serif text-2xl text-cream sm:text-3xl"
                >
                  Reserve a Table
                </h2>
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close reservation panel"
                className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center border border-warm-grey/20 text-cream transition-colors duration-300 hover:border-brass hover:text-brass"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.25" />
                </svg>
              </button>
            </div>

            <div className="flex-1 px-6 py-8 sm:px-10 sm:py-10">
              {submitted ? (
                <div role="status" className="flex flex-col items-start">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" className="mb-6">
                    <circle cx="20" cy="20" r="18.5" stroke="#B28A58" strokeWidth="1" />
                    <path d="M12 20l5.5 5.5L28 14" stroke="#B28A58" strokeWidth="1.25" />
                  </svg>
                  <h3 className="font-serif text-2xl text-cream">
                    Your table request has been received.
                  </h3>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-warm-grey">
                    This demonstration does not submit a real reservation. A member of the
                    Ember House team would ordinarily confirm your table by phone or email.
                  </p>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="mt-8 border border-brass/40 px-7 py-3.5 font-sans text-xs font-semibold tracking-[0.14em] text-cream uppercase transition-colors duration-300 hover:border-brass hover:bg-brass/10"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                    <div>
                      <label htmlFor="res-date" className={labelClasses}>
                        Date
                      </label>
                      <input id="res-date" name="date" type="date" className={fieldClasses} aria-invalid={Boolean(errors.date)} aria-describedby={errors.date ? "res-date-error" : undefined} />
                      {errors.date && <p id="res-date-error" className="mt-2 font-sans text-xs text-burgundy">{errors.date}</p>}
                    </div>
                    <div>
                      <label htmlFor="res-time" className={labelClasses}>
                        Time
                      </label>
                      <select id="res-time" name="time" defaultValue="" className={fieldClasses} aria-invalid={Boolean(errors.time)} aria-describedby={errors.time ? "res-time-error" : undefined}>
                        <option value="" disabled>
                          Select
                        </option>
                        {reservationTimes.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                      {errors.time && <p id="res-time-error" className="mt-2 font-sans text-xs text-burgundy">{errors.time}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="res-party" className={labelClasses}>
                      Party Size
                    </label>
                    <select
                      id="res-party"
                      name="partySize"
                      value={partySize}
                      onChange={(event) => setPartySize(event.target.value)}
                      className={fieldClasses}
                      aria-invalid={Boolean(errors.partySize)}
                      aria-describedby={errors.partySize ? "res-party-error" : undefined}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      {partySizes.map((size) => (
                        <option key={size} value={size}>
                          {size} {size === 1 ? "guest" : "guests"}
                        </option>
                      ))}
                      <option value={LARGE_PARTY}>9+ guests</option>
                    </select>
                    {errors.partySize && (
                      <p id="res-party-error" className="mt-2 font-sans text-xs text-burgundy">{errors.partySize}</p>
                    )}
                    {partySize === LARGE_PARTY && (
                      <p className="mt-3 font-sans text-xs leading-relaxed text-warm-grey">
                        For larger parties, please contact the restaurant directly at{" "}
                        <a href={restaurant.phone.href} className="text-brass hover:underline">
                          {restaurant.phone.display}
                        </a>
                        .
                      </p>
                    )}
                  </div>

                  <fieldset
                    disabled={partySize === LARGE_PARTY}
                    className="space-y-6 disabled:opacity-40"
                  >
                    <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                      <div>
                        <label htmlFor="res-first-name" className={labelClasses}>
                          First Name
                        </label>
                        <input id="res-first-name" name="firstName" type="text" autoComplete="given-name" className={fieldClasses} aria-invalid={Boolean(errors.firstName)} aria-describedby={errors.firstName ? "res-first-name-error" : undefined} />
                        {errors.firstName && <p id="res-first-name-error" className="mt-2 font-sans text-xs text-burgundy">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label htmlFor="res-last-name" className={labelClasses}>
                          Last Name
                        </label>
                        <input id="res-last-name" name="lastName" type="text" autoComplete="family-name" className={fieldClasses} aria-invalid={Boolean(errors.lastName)} aria-describedby={errors.lastName ? "res-last-name-error" : undefined} />
                        {errors.lastName && <p id="res-last-name-error" className="mt-2 font-sans text-xs text-burgundy">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="res-email" className={labelClasses}>
                        Email
                      </label>
                      <input id="res-email" name="email" type="email" autoComplete="email" className={fieldClasses} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "res-email-error" : undefined} />
                      {errors.email && <p id="res-email-error" className="mt-2 font-sans text-xs text-burgundy">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="res-telephone" className={labelClasses}>
                        Telephone
                      </label>
                      <input id="res-telephone" name="telephone" type="tel" autoComplete="tel" className={fieldClasses} aria-invalid={Boolean(errors.telephone)} aria-describedby={errors.telephone ? "res-telephone-error" : undefined} />
                      {errors.telephone && <p id="res-telephone-error" className="mt-2 font-sans text-xs text-burgundy">{errors.telephone}</p>}
                    </div>

                    <div>
                      <label htmlFor="res-notes" className={labelClasses}>
                        Notes <span className="normal-case text-warm-grey">(optional)</span>
                      </label>
                      <textarea id="res-notes" name="notes" rows={3} className={`${fieldClasses} resize-none`} />
                    </div>

                    <button
                      type="submit"
                      className="w-full border border-brass bg-brass px-7 py-4 font-sans text-xs font-semibold tracking-[0.14em] text-near-black uppercase transition-colors duration-300 hover:bg-transparent hover:text-brass"
                    >
                      Request Reservation
                    </button>
                  </fieldset>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
