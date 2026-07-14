"use client";

import { useState, type FormEvent } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { privateDiningOccasions } from "@/lib/data/private-dining";

const fieldClasses =
  "w-full border-b border-warm-grey/25 bg-transparent py-3 font-sans text-sm text-cream placeholder:text-slate focus:border-brass focus:outline-none";
const labelClasses = "mb-2 block font-sans text-[0.68rem] uppercase tracking-[0.2em] text-warm-grey";

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nextErrors: Record<string, string> = {};

    const required: Array<[string, string]> = [
      ["name", "Please enter your name."],
      ["email", "Please enter your email address."],
      ["telephone", "Please enter a contact number."],
      ["guests", "Please let us know how many guests."],
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
    // Demonstration only: no enquiry is actually sent. To connect a real
    // service, replace this block with a call to your provider (e.g. a
    // fetch() to an internal API route, or a form backend such as a
    // transactional email service) using the FormData captured above.
    // ---------------------------------------------------------------------
    setSubmitted(true);
  };

  return (
    <section id="enquire" className="scroll-mt-24 bg-near-black py-28 lg:py-36">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="grid grid-cols-12 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-5">
            <RevealText>
              <SectionLabel>Enquire</SectionLabel>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="mt-8 font-serif text-3xl leading-[1.1] text-cream sm:text-4xl">
                Plan your evening.
              </h2>
            </RevealText>
            <RevealText delay={0.18}>
              <p className="prose-measure mt-6 font-sans text-base leading-relaxed text-warm-grey">
                Tell us a little about the occasion and we will be in touch to shape the details.
              </p>
            </RevealText>
          </div>

          <div className="col-span-12 mt-12 lg:col-span-6 lg:col-start-7 lg:mt-0">
            {submitted ? (
              <RevealText>
                <div role="status" className="border-t border-brass/15 pt-10">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    aria-hidden="true"
                    className="mb-6"
                  >
                    <circle cx="20" cy="20" r="18.5" stroke="#B28A58" strokeWidth="1" />
                    <path d="M12 20l5.5 5.5L28 14" stroke="#B28A58" strokeWidth="1.25" />
                  </svg>
                  <h3 className="font-serif text-2xl text-cream">
                    Your enquiry has been received.
                  </h3>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-warm-grey">
                    This demonstration does not send a real enquiry. A member of the Ember House
                    team would ordinarily respond within one working day to begin planning your
                    evening.
                  </p>
                </div>
              </RevealText>
            ) : (
              <RevealText delay={0.1}>
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <label htmlFor="pd-name" className={labelClasses}>
                      Name
                    </label>
                    <input id="pd-name" name="name" type="text" autoComplete="name" className={fieldClasses} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "pd-name-error" : undefined} />
                    {errors.name && <p id="pd-name-error" className="mt-2 font-sans text-xs text-burgundy">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                    <div>
                      <label htmlFor="pd-email" className={labelClasses}>
                        Email
                      </label>
                      <input id="pd-email" name="email" type="email" autoComplete="email" className={fieldClasses} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "pd-email-error" : undefined} />
                      {errors.email && <p id="pd-email-error" className="mt-2 font-sans text-xs text-burgundy">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="pd-telephone" className={labelClasses}>
                        Telephone
                      </label>
                      <input id="pd-telephone" name="telephone" type="tel" autoComplete="tel" className={fieldClasses} aria-invalid={Boolean(errors.telephone)} aria-describedby={errors.telephone ? "pd-telephone-error" : undefined} />
                      {errors.telephone && <p id="pd-telephone-error" className="mt-2 font-sans text-xs text-burgundy">{errors.telephone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                    <div>
                      <label htmlFor="pd-date" className={labelClasses}>
                        Preferred Date
                      </label>
                      <input id="pd-date" name="date" type="date" className={fieldClasses} />
                    </div>
                    <div>
                      <label htmlFor="pd-guests" className={labelClasses}>
                        Number of Guests
                      </label>
                      <input id="pd-guests" name="guests" type="number" min={1} max={18} className={fieldClasses} aria-invalid={Boolean(errors.guests)} aria-describedby={errors.guests ? "pd-guests-error" : undefined} />
                      {errors.guests && <p id="pd-guests-error" className="mt-2 font-sans text-xs text-burgundy">{errors.guests}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="pd-occasion" className={labelClasses}>
                      Occasion <span className="text-warm-grey normal-case">(optional)</span>
                    </label>
                    <select id="pd-occasion" name="occasion" defaultValue="" className={fieldClasses}>
                      <option value="">Select</option>
                      {privateDiningOccasions.map((occasion) => (
                        <option key={occasion} value={occasion}>
                          {occasion}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="pd-message" className={labelClasses}>
                      Message <span className="text-warm-grey normal-case">(optional)</span>
                    </label>
                    <textarea id="pd-message" name="message" rows={4} className={`${fieldClasses} resize-none`} />
                  </div>

                  <button
                    type="submit"
                    className="border border-brass bg-brass px-7 py-4 font-sans text-xs font-semibold tracking-[0.14em] text-near-black uppercase transition-colors duration-300 hover:bg-transparent hover:text-brass"
                  >
                    Send Enquiry
                  </button>
                </form>
              </RevealText>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
