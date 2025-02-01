import { BlocksIcon } from "lucide-react";
import type { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import useUUID from "../hooks/use-uuid";
import {
  DEFAULT_UUID_COUNT,
  MAX_UUID_COUNT,
  MIN_UUID_COUNT,
} from "../lib/constants";
import DownloadButton from "./download-button";

export default function GenerateIdForm({
  setError,
}: {
  setError: Dispatch<SetStateAction<boolean>>;
}) {
  const { uuidCount, updateUUIDs, generateRandomUUIDs, updateUUIDCount } =
    useUUID();

  const onGenerateUUIDs = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form data
    const formData = new FormData(e.currentTarget);
    const enteredValue = formData.get("generate-id-form");

    if (!enteredValue) {
      setError(true);
      return;
    }

    if (+enteredValue < MIN_UUID_COUNT || +enteredValue > MAX_UUID_COUNT) {
      setError(true);
      return;
    }

    setError(false);

    // Generate UUIDs
    updateUUIDs(generateRandomUUIDs(uuidCount));
  };

  const onUpdateUUIDCount = (e: ChangeEvent<HTMLInputElement>) => {
    updateUUIDCount(Number(e.target.value));
  };

  return (
    <form onSubmit={onGenerateUUIDs}>
      <fieldset>
        <label
          htmlFor="generate-id-form"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Amount to Generate
        </label>
        <div className="relative">
          <input
            type="number"
            id="generate-id-form"
            name="generate-id-form"
            min={MIN_UUID_COUNT}
            max={MAX_UUID_COUNT}
            defaultValue={DEFAULT_UUID_COUNT}
            placeholder={DEFAULT_UUID_COUNT.toString()}
            autoComplete="off"
            onChange={onUpdateUUIDCount}
            className="block h-10 w-full rounded-lg border border-gray-300 bg-gray-50 pr-4 pl-13 text-sm leading-none text-gray-900 focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:outline-none"
          />
          <div className="pointer-events-none absolute inset-y-0 end-0 top-0 left-0 flex items-center ps-4">
            <BlocksIcon size={20} className="text-gray-600" />
          </div>
        </div>
        <p className="mt-3 mb-6 text-sm text-gray-500">
          Enter a number between {MIN_UUID_COUNT} and {MAX_UUID_COUNT}.
        </p>
        <div className="space-y-4">
          <button
            type="submit"
            className="block h-10 w-full rounded-lg border border-amber-300 bg-amber-300 text-sm font-medium focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:outline-none sm:col-span-2 md:col-span-1"
          >
            Generate
          </button>
          <DownloadButton />
        </div>
      </fieldset>
    </form>
  );
}
