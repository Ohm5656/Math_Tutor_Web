export default function GlobalLoading() {
  return (
    <div className="app-shell section-space">
      <div className="reveal-on-scroll is-visible overflow-hidden rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-panel backdrop-blur-xl sm:p-8">
        <div className="h-3 w-32 rounded-full bg-slate-200/80" />
        <div className="mt-6 h-10 w-full max-w-xl rounded-2xl bg-slate-200/80" />
        <div className="mt-4 h-4 w-full max-w-2xl rounded-full bg-slate-100" />
        <div className="mt-3 h-4 w-full max-w-xl rounded-full bg-slate-100" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="rounded-[28px] border border-slate-100 bg-slate-50/90 p-5 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.16)]"
            >
              <div className="h-28 rounded-[22px] bg-slate-200/80" />
              <div className="mt-5 h-6 w-3/4 rounded-full bg-slate-200/80" />
              <div className="mt-3 h-4 w-full rounded-full bg-slate-100" />
              <div className="mt-2 h-4 w-5/6 rounded-full bg-slate-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
