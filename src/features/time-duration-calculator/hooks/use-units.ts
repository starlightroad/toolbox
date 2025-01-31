import { Dispatch, SetStateAction, useContext } from "react";
import type { Units } from "../lib/definitions";
import {
  UnitsContext,
  UnitsDispatchContext,
} from "../providers/units-provider";

export default function useUnits(): [Units, Dispatch<SetStateAction<Units>>] {
  const units = useContext(UnitsContext);
  const dispatch = useContext(UnitsDispatchContext);

  return [units, dispatch];
}
