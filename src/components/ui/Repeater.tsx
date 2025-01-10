import { Plus, Trash } from "lucide-react";
import {
  ArrayPath,
  FieldArray,
  FieldValues,
  useFieldArray,
  UseFieldArrayReturn,
  UseFormReturn,
} from "react-hook-form";
import { Button } from "./Button";

interface RepeaterProps<T, TForm extends FieldValues> {
  name: ArrayPath<TForm>;
  form: UseFormReturn<TForm>;
  label: string;
  render: (
    field: T,
    index: number,
    array: Pick<
      UseFieldArrayReturn<TForm, ArrayPath<TForm>>,
      "fields" | "append" | "remove"
    >
  ) => React.ReactNode;
  defaultValue?: T;
}

const Repeater = <
  T extends FieldArray<TForm, ArrayPath<TForm>>,
  TForm extends FieldValues
>({
  name,
  form,
  label,
  render,
  defaultValue,
}: RepeaterProps<T, TForm>) => {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name,
  });

  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <div className="space-y-4">
        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center gap-2">
            <div className="flex-1">
              {render(field as T, index, { fields, append, remove })}
            </div>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => remove(index)}
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          onClick={() =>
            append(defaultValue as FieldArray<TForm, ArrayPath<TForm>>)
          }
          className="w-full"
        >
          <Plus className="h-4 w-4" />
          Add Item
        </Button>
      </div>
    </div>
  );
};

export default Repeater;
