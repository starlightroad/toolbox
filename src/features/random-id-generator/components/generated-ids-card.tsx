import useUUID from "../hooks/use-uuid";

export default function GeneratedIdsCard() {
  const { uuids } = useUUID();

  return (
    <div className="mt-4 max-h-55 w-full overflow-hidden rounded-xl bg-black/80 p-2 md:col-span-2 md:mt-0">
      <div className="h-full overflow-auto p-4 text-white">
        <pre className="flex flex-col gap-0.5">
          {uuids.map((value, idx) => {
            const key = `g-uuid-${idx + 1}`;

            return <code key={key}>{value}</code>;
          })}
        </pre>
      </div>
    </div>
  );
}
