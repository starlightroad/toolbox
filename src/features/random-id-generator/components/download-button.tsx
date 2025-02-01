import useUUID from "../hooks/use-uuid";
import { createURLDownloadLink } from "../lib/utils";

export default function DownloadButton() {
  const { uuids } = useUUID();

  const onDownloadUUIDs = () => {
    const data = [`Generated UUIDs: ${uuids.length}\n`, ...uuids].join("\n");
    const url = createURLDownloadLink(data);

    const temporaryLink = document.createElement("a");
    temporaryLink.download = `generated-uuids-${new Date().toISOString()}.txt`;
    temporaryLink.href = url;
    temporaryLink.click();
  };

  return (
    <button
      type="button"
      onClick={onDownloadUUIDs}
      className="block h-10 w-full rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-900 focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:outline-none sm:col-span-2 md:col-span-1"
    >
      Download
    </button>
  );
}
