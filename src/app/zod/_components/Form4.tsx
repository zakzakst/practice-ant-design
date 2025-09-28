"use client";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bold, Italic, Underline } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const formValuesSchema = z.object({
  // completed: z.union([z.boolean(), z.literal("indeterminate")]),
  completed: z.boolean().optional(),
  fruit: z.string().optional(),
  style: z.string().optional(),
});

type FormValues = z.infer<typeof formValuesSchema>;

const defaultFormValues: FormValues = {
  completed: undefined,
};

export const Form = () => {
  const { control, watch } = useForm<FormValues>({
    resolver: zodResolver(formValuesSchema),
    defaultValues: defaultFormValues,
  });

  const formValues = watch();

  return (
    <div>
      <div>{JSON.stringify(formValues)}</div>
      <Controller
        name="completed"
        control={control}
        render={({ field }) => (
          <Checkbox
            checked={field.value === undefined ? "indeterminate" : field.value}
            onCheckedChange={(value) => field.onChange(value)}
          />
        )}
      />
      <Controller
        name="fruit"
        control={control}
        render={({ field }) => (
          <Select
            value={field.value}
            onValueChange={(value) => {
              field.onChange(value);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
      <Controller
        name="style"
        control={control}
        render={({ field }) => (
          <ToggleGroup
            variant="outline"
            type="single"
            value={field.value}
            onValueChange={(value) => {
              field.onChange(value);
            }}
          >
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="strikethrough"
              aria-label="Toggle strikethrough"
            >
              <Underline className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        )}
      />
    </div>
  );
};
