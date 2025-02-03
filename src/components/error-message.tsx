export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="my-4 flex items-center rounded-lg border border-red-200 bg-red-100 px-4 py-2">
      <p className="text-sm font-medium text-red-500">{message}</p>
    </div>
  );
}
