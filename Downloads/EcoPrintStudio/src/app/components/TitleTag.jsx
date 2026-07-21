export default function TitleTag({ children }) {
  return (
    <div className="inline-flex items-center">
      <span className="font-mono text-[12px] font-semibold tracking-[0.1em] uppercase text-[#1a6ef5]">
        {children}
      </span>
    </div>
  );
}

