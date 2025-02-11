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
};

const Select = ({ placeholder, items }: Props) => {
  return (
    <UiSelect>
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
