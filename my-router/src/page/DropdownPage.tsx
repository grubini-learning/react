import { useState } from "react";
import { Dropdown, Option } from "../component";

const colors: Option[] = [
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
];

export const DropdownPage = () => {
  const [selection, setSelection] = useState<Option | null>(null);

  const handleSelect = (option: Option) => {
    setSelection(option);
  };

  return (
    <div>
      <Dropdown options={colors} value={selection} onChange={handleSelect} />
    </div>
  );
};
