import {
  Select as UiSelect,
  SelectContent,
  SelectItem as UiSelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectItem = {
  id: string;
  label: string;
};

type Props = {
  placeholder?: string;
  items: SelectItem[];
  value: string;
  onChange: (value: string) => void;
};

const Select = ({ placeholder, items, value, onChange }: Props) => {
  return (
    <UiSelect value={value} onValueChange={(value) => onChange(value)}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <UiSelectItem key={item.id} value={item.id}>
            {item.label}
          </UiSelectItem>
        ))}
      </SelectContent>
    </UiSelect>
  );
};

export default Select;
