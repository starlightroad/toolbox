import { useMemo } from "react";
import type { Units } from "../lib/definitions";
import { pluralize } from "../lib/utils";
import useUnits from "../hooks/use-units";
import { TIME } from "../lib/constants";

export default function ResultsCard() {
  const [units] = useUnits();

  const resultTextValue = useMemo(() => generateResultText(units), [units]);
  const resultUnitValues = useMemo(
    () => calculateTimeByMilliseconds(units),
    [units],
  );

  return (
    <div className="mt-4 w-full rounded-xl bg-black/80">
      <div className="border-b border-white/12 p-6 text-white">
        <h2 className="">Result</h2>
        <p className="mt-3 text-sm">{resultTextValue}</p>
      </div>
      <div className="space-y-3 p-6 text-sm text-white">
        {resultUnitValues.map((value) => {
          const key = `ruv-${value}`;

          return <p key={key}>{value}</p>;
        })}
      </div>
    </div>
  );
}

const generateResultText = (units: Units) => {
  let { milliseconds: ms } = units;
  const { SECONDS, HOURS } = TIME;

  // Calculate Days
  const days = Math.floor(ms / SECONDS.PER_DAY);
  ms -= days * SECONDS.PER_DAY;

  // Calculate Hours
  const hours = Math.floor(ms / SECONDS.PER_HOUR) % HOURS.PER_DAY;
  ms -= hours * SECONDS.PER_HOUR;

  // Calculate Minutes
  const minutes = Math.floor(ms / SECONDS.PER_MINUTE) % SECONDS.PER_MINUTE;
  ms -= minutes * SECONDS.PER_MINUTE;

  if (days) {
    if (hours && minutes) {
      return `${days} ${pluralize("day", days)}, ${hours} ${pluralize("hour", hours)}, and ${minutes} ${pluralize("minute", minutes)}`;
    } else if (hours) {
      return `${days} ${pluralize("day", days)} and ${hours} ${pluralize("hour", hours)}`;
    } else if (minutes) {
      return `${days} ${pluralize("day", days)} and ${minutes} ${pluralize("minute", minutes)}`;
    } else {
      return `${days} ${pluralize("day", days)}`;
    }
  } else if (hours) {
    if (minutes) {
      return `${hours} ${pluralize("hour", hours)} and ${minutes} ${pluralize("minute", minutes)}`;
    } else {
      return `${hours} ${pluralize("hour", hours)}`;
    }
  } else {
    return `${minutes} ${pluralize("minute", minutes)}`;
  }
};

const calculateTimeByMilliseconds = (units: Units) => {
  const { minutes, hours, days } = units;
  const unitValues = [];

  if (days) {
    unitValues.push(`${days} ${pluralize("day", days)}`);
  }

  if (hours) {
    unitValues.push(`${hours} ${pluralize("hour", hours)}`);
  }

  if (minutes) {
    unitValues.push(`${minutes} ${pluralize("minute", minutes)}`);
  }

  return unitValues;
};
