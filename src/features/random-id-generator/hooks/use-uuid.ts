import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";
import { DEFAULT_UUID_COUNT } from "../lib/constants";
import { createArray, generateRandomUUID } from "../lib/utils";

export const initialState = {
  uuids: createArray(DEFAULT_UUID_COUNT).map(() => generateRandomUUID()),
  uuidCount: DEFAULT_UUID_COUNT,
};

export const UUIDContext = createContext(initialState);

export const UUIDDispatchContext = createContext<
  Dispatch<SetStateAction<typeof initialState>>
>(() => {});

export default function useUUID() {
  const { uuids, uuidCount } = useContext(UUIDContext);
  const setUUIDs = useContext(UUIDDispatchContext);

  const generateRandomUUIDs = (count: number) => {
    return createArray(count).map(() => generateRandomUUID());
  };

  const updateUUIDCount = (count: number) => {
    setUUIDs((prevState) => ({ ...prevState, uuidCount: count }));
  };

  const updateUUIDs = (data: typeof uuids) => {
    setUUIDs((prevState) => ({ ...prevState, uuids: data }));
  };

  return {
    uuids,
    uuidCount,
    updateUUIDs,
    updateUUIDCount,
    generateRandomUUIDs,
  };
}
