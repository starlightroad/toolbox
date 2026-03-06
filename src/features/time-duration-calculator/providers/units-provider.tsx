import { useState } from "react";
import {
  initialUnits,
  UnitsContext,
  UnitsDispatchContext,
} from "../hooks/use-units";

export function UnitsProvider({ children }: { children: React.ReactNode }) {
  const [units, dispatch] = useState(initialUnits);

  return (
    <UnitsContext.Provider value={units}>
      <UnitsDispatchContext.Provider value={dispatch}>
        {children}
      </UnitsDispatchContext.Provider>
    </UnitsContext.Provider>
  );
}
