import {
  createContext,
  type Dispatch,
  type SetStateAction,
  useState,
} from "react";
import { fetchAllUnits } from "../data/unit";

export const initialUnits = fetchAllUnits();

export const UnitsContext = createContext(initialUnits);

export const UnitsDispatchContext = createContext<
  Dispatch<SetStateAction<typeof initialUnits>>
>(() => {});

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
