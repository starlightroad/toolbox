import { useMemo } from "react";
import useUnits from "../hooks/use-units";

export default function ResultsCard() {
  const { units, createUnitValue, createUnitValues } = useUnits();

  const resultTextValue = useMemo(() => createUnitValue(units), [units]);
  const resultUnitValues = useMemo(() => createUnitValues(units), [units]);

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
