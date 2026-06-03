"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE_LUXE } from "@/lib/motion";
import { cn } from "@/lib/utils";

const OCCASIONS = [
  "Wedding",
  "Asian Wedding",
  "Civil Ceremony",
  "Celebration / Party",
  "Corporate Event",
  "Other",
];

const fieldBase =
  "w-full border-b border-line bg-transparent py-3 text-ink placeholder:text-mist/70 focus:border-ink focus:outline-none transition-colors";

function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor: string }) {
  return (
    <label htmlFor={htmlFor} className="eyebrow mb-1 block text-mist">
      {children}
    </label>
  );
}

export default function EnquiryForm() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend in this build, simulate a graceful submission.
    // Wire to a route handler / email service to go live (see README).
    setBusy(true);
    window.setTimeout(() => {
      setBusy(false);
      setSent(true);
    }, 700);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_LUXE }}
            className="flex min-h-[400px] flex-col justify-center"
          >
            <span className="eyebrow text-champagne">Thank you</span>
            <h3 className="mt-5 display-md">Your enquiry is on its way.</h3>
            <p className="mt-5 max-w-md text-mist">
              Our events team will be in touch shortly. For anything urgent, call
              us on <a className="text-ink underline" href="tel:02031960159">020 3196 0159</a>.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2"
          >
            <div className="sm:col-span-1">
              <Label htmlFor="name">Your name</Label>
              <input id="name" name="name" required className={fieldBase} placeholder="Full name" />
            </div>
            <div className="sm:col-span-1">
              <Label htmlFor="email">Email</Label>
              <input id="email" name="email" type="email" required className={fieldBase} placeholder="you@email.com" />
            </div>
            <div className="sm:col-span-1">
              <Label htmlFor="phone">Phone</Label>
              <input id="phone" name="phone" type="tel" className={fieldBase} placeholder="Optional" />
            </div>
            <div className="sm:col-span-1">
              <Label htmlFor="occasion">Occasion</Label>
              <select id="occasion" name="occasion" required className={cn(fieldBase, "appearance-none")} defaultValue="">
                <option value="" disabled>
                  Select…
                </option>
                {OCCASIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-1">
              <Label htmlFor="date">Preferred date</Label>
              <input id="date" name="date" type="date" className={fieldBase} />
            </div>
            <div className="sm:col-span-1">
              <Label htmlFor="guests">Approx. guests</Label>
              <input id="guests" name="guests" type="number" min={1} className={fieldBase} placeholder="e.g. 220" />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="message">Tell us about your occasion</Label>
              <textarea id="message" name="message" rows={4} className={cn(fieldBase, "resize-none")} placeholder="A few words about your day…" />
            </div>

            <div className="sm:col-span-2 flex items-start gap-3">
              <input id="consent" name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-botanical" />
              <label htmlFor="consent" className="text-sm text-mist">
                I agree to be contacted about my enquiry and accept the terms &amp;
                privacy policy.
              </label>
            </div>

            <div className="sm:col-span-2 mt-2">
              <button
                type="submit"
                disabled={busy}
                data-cursor="Send"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-8 py-4 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-bone transition-colors duration-500 hover:bg-botanical disabled:opacity-60"
              >
                {busy ? "Sending…" : "Send enquiry"}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
