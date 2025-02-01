import {
  createContext,
  type Dispatch,
  type SetStateAction,
  useState,
} from "react";
import { createArray, generateRandomUUID } from "../lib/utils";
import { DEFAULT_UUID_COUNT } from "../lib/constants";

export const initialState = {
  uuids: createArray(DEFAULT_UUID_COUNT).map(() => generateRandomUUID()),
  uuidCount: DEFAULT_UUID_COUNT,
};

export const UUIDContext = createContext(initialState);

export const UUIDDispatchContext = createContext<
  Dispatch<SetStateAction<typeof initialState>>
>(() => {});

export function UUIDProvider({ children }: { children: React.ReactNode }) {
  const [uuids, dispatch] = useState(initialState);

  return (
    <UUIDContext.Provider value={uuids}>
      <UUIDDispatchContext.Provider value={dispatch}>
        {children}
      </UUIDDispatchContext.Provider>
    </UUIDContext.Provider>
  );
}
