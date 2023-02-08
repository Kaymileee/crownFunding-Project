import { debounce } from "lodash";
import { useState } from "react";

export default function useOnchage(time = 0) {
  const [value, setValue] = useState("");
  const handleChangeValue = debounce((e) => {
    setValue(e.target.value);
  }, time);
  return [value, handleChangeValue];
}
