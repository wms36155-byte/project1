export default function Button({
  children,
  onClick,
  variant = "primary",
}: any) {
  const base = "px-4 py-2 rounded-lg transition";

  const styles =
    variant === "primary"
      ? "bg-indigo-600 text-white hover:bg-indigo-700"
      : "border hover:bg-gray-100";

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}