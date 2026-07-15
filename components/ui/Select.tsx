"use client";

import * as RadixSelect from "@radix-ui/react-select";
import { cn } from "@/lib/utils";

export type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  id?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder: string;
  options: SelectOption[];
  disabled?: boolean;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
  className?: string;
};

const triggerClasses =
  "flex w-full items-center justify-between gap-2 border-b border-warm-grey/25 bg-transparent py-3 font-sans text-sm text-cream outline-none transition-colors duration-300 data-[placeholder]:text-slate hover:border-brass/50 focus:border-brass data-[state=open]:border-brass disabled:cursor-not-allowed disabled:opacity-40";

/**
 * An accessible, fully-styled dropdown built on Radix UI's unstyled Select
 * primitive. Native <select>/<option> popups can't be reliably styled
 * across browsers (the option list ignores CSS in several engines), so
 * this renders its own dark, on-brand panel via a portal — keeping
 * keyboard navigation, screen-reader semantics and native form
 * participation (via Radix's hidden bubble <select>, wired through `name`)
 * exactly as a native select would provide.
 */
export function Select({
  id,
  name,
  value,
  defaultValue,
  onValueChange,
  placeholder,
  options,
  disabled,
  className,
  ...aria
}: SelectProps) {
  return (
    <RadixSelect.Root
      name={name}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      disabled={disabled}
    >
      <RadixSelect.Trigger
        id={id}
        className={cn(triggerClasses, className)}
        aria-invalid={aria["aria-invalid"]}
        aria-describedby={aria["aria-describedby"]}
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon asChild>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            aria-hidden="true"
            className="shrink-0 text-brass"
          >
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          position="popper"
          sideOffset={8}
          className="z-[100] w-[var(--radix-select-trigger-width)] border border-brass/20 bg-soft-black shadow-lift"
        >
          <RadixSelect.ScrollUpButton className="flex items-center justify-center py-1 text-brass">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
              <path d="M1 5L5 1L9 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </RadixSelect.ScrollUpButton>

          <RadixSelect.Viewport className="max-h-72 p-1">
            {options.map((option) => (
              <RadixSelect.Item
                key={option.value}
                value={option.value}
                className="relative flex cursor-pointer items-center justify-between gap-3 px-4 py-2.5 font-sans text-sm text-cream outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-40 data-[highlighted]:bg-brass/15 data-[highlighted]:text-brass"
              >
                <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
                <RadixSelect.ItemIndicator>
                  <svg width="11" height="8" viewBox="0 0 11 8" fill="none" aria-hidden="true">
                    <path d="M1 4L4 7L10 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </RadixSelect.ItemIndicator>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>

          <RadixSelect.ScrollDownButton className="flex items-center justify-center py-1 text-brass">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}
