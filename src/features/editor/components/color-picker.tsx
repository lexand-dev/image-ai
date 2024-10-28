import { ChromePicker, CirclePicker } from "react-color";

import { colors } from "@/features/editor/types";
import { rgbaObjectToString } from "@/features/editor/utils";

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
}

export const ColorPicker = ({ value, onChange }: ColorPickerProps) => {
  return (
    <div className="w-full space-y-4">
      <ChromePicker
        disableAlpha={false}
        color={value}
        onChange={(color) => {
          const formmatedValue = rgbaObjectToString(color.rgb);
          onChange(formmatedValue);
        }}
        className="border rounded-lg"
      />
      <CirclePicker
        color={value}
        colors={colors}
        onChangeComplete={(color) => {
          const formmatedValue = rgbaObjectToString(color.rgb);
          onChange(formmatedValue);
        }}
      />
    </div>
  );
};
