"use client";

export default function FavoriteButton({
  active,
  onToggle,
  drugName,
  size = "md",
}: {
  active: boolean;
  onToggle: () => void;
  drugName: string;
  size?: "sm" | "md";
}) {
  const box = size === "sm" ? "h-10 w-10" : "h-11 w-11";
  const icon = size === "sm" ? 18 : 20;

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onToggle();
      }}
      aria-pressed={active}
      aria-label={`${active ? "Remove" : "Add"} ${drugName} ${
        active ? "from" : "to"
      } favorites`}
      className={`shrink-0 flex ${box} items-center justify-center rounded-lg focus-ring`}
    >
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 24 24"
        fill={active ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={active ? "text-olive" : "text-line hover:text-olive/50"}
      >
        <polygon points="12 2.5 15.09 8.76 22 9.76 17 14.64 18.18 21.52 12 18.27 5.82 21.52 7 14.64 2 9.76 8.91 8.76 12 2.5" />
      </svg>
    </button>
  );
}
