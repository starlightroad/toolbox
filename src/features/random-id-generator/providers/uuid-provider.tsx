import { useState } from "react";
import {
  initialState,
  UUIDContext,
  UUIDDispatchContext,
} from "../hooks/use-uuid";

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
