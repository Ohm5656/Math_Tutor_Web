"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3 sm:space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;

        return (
          <div
            key={item.question}
            className="reveal-on-scroll reveal-right overflow-hidden rounded-[24px] border border-white/70 bg-white/80 shadow-panel backdrop-blur sm:rounded-[28px]"
            data-stagger={index}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-7 sm:py-5"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="text-pretty text-[15px] font-semibold leading-7 text-ink-900 sm:text-base">{item.question}</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-50 text-xl leading-none text-ink-900 sm:h-10 sm:w-10">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <div
                id={panelId}
                className="text-pretty border-t border-slate-100 px-4 py-4 text-sm leading-7 text-slate-500 sm:px-7 sm:py-5 sm:leading-8"
              >
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
