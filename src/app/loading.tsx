export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center" role="status" aria-live="polite">
      <span className="sr-only">Loading</span>
      <span className="w-10 h-10 rounded-full border-2 border-white/10 border-t-accent animate-spin" />
    </div>
  );
}
