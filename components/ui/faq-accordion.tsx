"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className="reveal-on-scroll reveal-right overflow-hidden rounded-[28px] border border-white/70 bg-white/80 shadow-panel backdrop-blur"
            data-stagger={index}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="text-base font-semibold text-ink-900">{item.question}</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 text-xl leading-none text-ink-900">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <div className="border-t border-slate-100 px-6 py-5 text-sm leading-8 text-slate-500 sm:px-7">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
