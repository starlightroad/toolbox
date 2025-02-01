import { Calendar1Icon } from "lucide-react";
import type { Dispatch, FormEvent, SetStateAction } from "react";
import { INPUT_TIME_REGEX, TIME } from "../lib/constants";
import useUnits from "../hooks/use-units";
import { initialUnits } from "../providers/units-provider";
import { createDate, getDateInDateStringFormat } from "../lib/utils";

export default function TimeForm({
  onError,
}: {
  onError: Dispatch<SetStateAction<boolean>>;
}) {
  const { setUnits, calculateUnits } = useUnits();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const startTime = formData.get("start-time");
    const endTime = formData.get("end-time");

    const isStartTimeValid = startTime?.toString().match(INPUT_TIME_REGEX);
    const isEndTimeValid = endTime?.toString().match(INPUT_TIME_REGEX);

    if (isStartTimeValid && isEndTimeValid) {
      let newStartTime = new Date(startTime!.toString());
      let newEndTime = new Date(endTime!.toString());

      if (newStartTime.toString() === "Invalid Date") {
        // Generate today's date and add user-defined time
        newStartTime = createDate(
          `${getDateInDateStringFormat()} ${startTime}`,
        );
      }

      if (newEndTime.toString() === "Invalid Date") {
        // Generate today's date and add user-defined time
        newEndTime = createDate(`${getDateInDateStringFormat()} ${endTime}`);
      }

      onError(false);

      const { MILLISECONDS } = TIME;
      const ms =
        Math.abs(newEndTime.valueOf() - newStartTime.valueOf()) /
        MILLISECONDS.PER_SECOND;

      setUnits(calculateUnits(ms));
    } else {
      onError(true);
      setUnits(initialUnits);
    }
  };

  const handleReset = () => setUnits(initialUnits);

  const formFields = [
    {
      label: "start-time",
      text: "Start Time",
    },
    {
      label: "end-time",
      text: "End Time",
    },
  ];

  return (
    <form id="time-form" onSubmit={handleSubmit} onReset={handleReset}>
      <fieldset className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {formFields.map((formField) => {
          const id = `ff-${formField.label}`;

          return (
            <div key={id}>
              <label
                htmlFor={formField.label}
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                {formField.text}
              </label>
              <div className="relative">
                <input
                  type="text"
                  id={formField.label}
                  name={formField.label}
                  placeholder="01/01/2025 09:00 AM"
                  autoComplete="off"
                  className="block h-10 w-full rounded-lg border border-gray-300 bg-gray-50 pr-4 pl-13 text-sm leading-none text-gray-900 focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:outline-none"
                />
                <div className="pointer-events-none absolute inset-y-0 end-0 top-0 left-0 flex items-center ps-4">
                  <Calendar1Icon size={20} className="text-gray-600" />
                </div>
              </div>
            </div>
          );
        })}
        <button
          type="submit"
          className="mt-auto block h-10 rounded-lg border border-amber-300 bg-amber-300 text-sm focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:outline-none sm:col-span-2 md:col-span-1"
        >
          Calculate
        </button>
      </fieldset>
    </form>
  );
}
