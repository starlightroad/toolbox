import { useContext } from "react";
import { createArray, generateRandomUUID } from "../lib/utils";
import { UUIDContext, UUIDDispatchContext } from "../providers/uuid-provider";

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
