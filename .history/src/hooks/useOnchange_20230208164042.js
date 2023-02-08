import { useState } from "react";

export default function useOnchage() {
  const [value, setValue] = useState("");
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    handleChangeValue,
  };
}
