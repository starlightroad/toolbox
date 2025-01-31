export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="my-4 flex h-10 items-center rounded-lg border border-red-200 bg-red-100 px-4">
      <p className="text-sm font-medium text-red-500">{message}</p>
    </div>
  );
}
