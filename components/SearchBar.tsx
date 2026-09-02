export default function SearchBar({
  value,
  onChange,
  placeholder = "Search drugs...",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <svg
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        type="text"
        inputMode="search"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="none"
        spellCheck={false}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        // text-base (16px) keeps iOS Safari from auto-zooming on focus
        className="w-full h-11 pl-10 pr-4 rounded-card border border-line bg-surface text-base sm:text-[15px] text-ink placeholder:text-muted focus-ring transition-colors focus:border-olive"
      />
    </div>
  );
}
