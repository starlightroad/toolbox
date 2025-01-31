import { useContext } from "react";
import type { Units } from "../lib/definitions";
import {
  UnitsContext,
  UnitsDispatchContext,
} from "../providers/units-provider";
import { TIME } from "../lib/constants";
import { pluralize } from "../lib/utils";

export default function useUnits() {
  const units = useContext(UnitsContext);
  const setUnits = useContext(UnitsDispatchContext);

  const calculateUnits = (ms: number) => {
    const milliseconds = ms;
    const { SECONDS } = TIME;

    // Calculate Days
    const days = ms / SECONDS.PER_DAY;

    // Calculate Hours
    const hours = ms / SECONDS.PER_HOUR;

    // Calculate Minutes
    const minutes = ms / SECONDS.PER_MINUTE;

    return {
      milliseconds,
      minutes: minutes.toString().includes(".") ? +minutes.toFixed(2) : minutes,
      hours: hours.toString().includes(".") ? +hours.toFixed(2) : hours,
      days: days.toString().includes(".") ? +days.toFixed(2) : days,
    };
  };

  const createUnitValues = (units: Units) => {
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

  const createUnitValue = (units: Units) => {
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

  return {
    units,
    setUnits,
    calculateUnits,
    createUnitValues,
    createUnitValue,
  };
}
