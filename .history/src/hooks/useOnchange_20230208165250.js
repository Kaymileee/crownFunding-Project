import { useState } from "react";

export default function useOnchage() {
  const [value, setValue] = useState("vietnam" || "peru");
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  return [value, handleChangeValue];
}
