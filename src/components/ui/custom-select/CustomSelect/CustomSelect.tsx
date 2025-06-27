import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Select } from "radix-ui";
import React from "react";

import cn from "clsx";
import styles from "./CustomSelect.module.scss";
import type { ISelectOption } from "../custom-select.types";

interface IProps {
  className?: string;
  defaultValue?: ISelectOption;
  value: ISelectOption;
  setValue: (value: ISelectOption) => void;
  options?: ISelectOption[];
}

export default function CustomSelect({
  className,
  defaultValue,
  options = [],
  value,
  setValue,
}: IProps) {
  const handleValueChange = (selectedValue: string) => {
    // Находим полный объект option по значению
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );
    if (selectedOption) {
      setValue(selectedOption); // Теперь передаем полный объект
    }
  };

  return (
    <Select.Root
      value={value.value}
      onValueChange={(handledValue: string) => handleValueChange(handledValue)}
    >
      <Select.Trigger className={cn(styles.SelectTrigger, className)}>
        <Select.Value defaultValue={defaultValue?.value} placeholder="Период" />
        <Select.Icon className={styles.SelectIcon}>
          <ChevronDownIcon size={14} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position="popper"
          side="bottom"
          sideOffset={2}
          className={styles.SelectContent}
        >
          <Select.Viewport className={styles.SelectViewport}>
            {options.map((option) => (
              <Select.Item
                key={`${option.value}_${option.label}`}
                className={styles.SelectItem}
                value={option.value}
              >
                <Select.ItemText className={styles.ItemText}>
                  {option.label}
                </Select.ItemText>
                <Select.ItemIndicator className={styles.SelectItemIndicator}>
                  <CheckIcon size={14} />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
