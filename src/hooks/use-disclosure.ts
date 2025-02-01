import { useState } from "react";

export default function useDisclosure() {
  const [open, dispatch] = useState(false);

  const toggleOpen = () => {
    dispatch((prevState) => !prevState);
  };

  const setOpen = (state: boolean) => {
    dispatch(state);
  };

  return {
    open,
    toggleOpen,
    setOpen,
  };
}
