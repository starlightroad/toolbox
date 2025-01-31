export default function ResetButton() {
  return (
    <button
      type="reset"
      form="time-form"
      className="block h-10 w-full rounded-lg border border-red-500 bg-inherit text-sm text-red-500 focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      Start Over
    </button>
  );
}
