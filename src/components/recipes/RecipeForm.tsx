"use client";

import { createRecipe, updateRecipe } from "@/lib/actions/recipe.actions";
import { RecipeSchema, recipeSchema } from "@/lib/schemas/recipe.schemas";
import { IngredientUnit, Recipe } from "@/lib/types/Recipe";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/Button";
import FormField from "../ui/FormField";
import Input from "../ui/Input";
import Repeater from "../ui/Repeater";
import Select from "../ui/Select";

interface RecipeFormProps {
  recipe?: Recipe;
}

const RecipeForm = ({ recipe }: RecipeFormProps) => {
  const form = useForm<RecipeSchema>({
    resolver: zodResolver(recipeSchema),
    defaultValues: recipe || {
      id: undefined,
      title: "",
      description: "",
      image: "",
      ingredients: [],
      instructions: [],
      bookId: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  useEffect(() => {
    console.log(form.getValues("ingredients"));
  }, [form]);

  const onSubmit = async (data: RecipeSchema) => {
    console.log(data);
    if (recipe?.id) {
      await updateRecipe(data);
    } else {
      await createRecipe(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {recipe?.id && (
        <FormField
          register={register("id")}
          render={({ field }) => <Input {...field} type="text" />}
        />
      )}
      <div className="grid md:grid-cols-2 gap-2">
        <FormField
          register={register("title")}
          label="Title"
          placeholder="Title"
          error={errors.title?.message}
          render={({ field }) => <Input {...field} className="w-full" />}
        />
        <FormField
          register={register("image")}
          label="Image"
          placeholder="Image"
          error={errors.image?.message}
          render={({ field }) => <Input {...field} className="w-full" />}
        />
      </div>
      <div className="grid gap-2">
        <FormField
          register={register("description")}
          label="Description"
          placeholder="Description"
          error={errors.description?.message}
          render={({ field }) => <Input {...field} className="w-full" />}
        />
      </div>
      <div>
        <Repeater
          name="ingredients"
          label="Ingredients"
          form={form}
          defaultValue={{
            order: (form.getValues("ingredients")?.length || 0) + 1,
            ingredient: { name: "" },
            quantity: "",
            unit: IngredientUnit.GRAM,
          }}
          render={(field, index) => (
            <div className="grid grid-cols-4 gap-2">
              <FormField
                register={register(`ingredients.${index}.ingredient.name`)}
                placeholder="Ingredient name"
                label="Ingredient name"
                error={errors.ingredients?.[index]?.ingredient?.name?.message}
                render={({ field }) => <Input {...field} className="w-full" />}
              />
              <FormField
                register={register(`ingredients.${index}.quantity`)}
                placeholder="Quantity"
                label="Quantity"
                error={errors.ingredients?.[index]?.quantity?.message}
                render={({ field }) => <Input {...field} className="w-full" />}
              />
              <FormField
                register={register(`ingredients.${index}.unit`)}
                placeholder="Unit"
                label="Unit"
                error={errors.ingredients?.[index]?.unit?.message}
                render={({ field }) => (
                  <Select
                    {...field}
                    values={Object.values(IngredientUnit)}
                    className="w-full border rounded-md p-2"
                  />
                )}
              />
              <div className="flex items-center justify-center">
                <p>{field.order}</p>
              </div>
              <input
                type="hidden"
                {...register(`ingredients.${index}.order`)}
                value={index}
              />
            </div>
          )}
        />
      </div>
      <div>
        <Repeater
          name="instructions"
          label="Instructions"
          form={form}
          defaultValue={{
            order: (form.getValues("instructions")?.length || 0) + 1,
            title: "",
            instruction: "",
          }}
          render={(field, index) => (
            <div className="grid grid-cols-4 gap-2">
              <FormField
                register={register(`instructions.${index}.title`)}
                placeholder="Title"
                label="Title"
                error={errors.instructions?.[index]?.title?.message}
                render={({ field }) => <Input {...field} className="w-full" />}
              />
              <FormField
                register={register(`instructions.${index}.instruction`)}
                placeholder="Description"
                label="Description"
                error={errors.instructions?.[index]?.instruction?.message}
                render={({ field }) => <Input {...field} className="w-full" />}
              />
              <div className="flex items-center justify-center">
                <p>{field.order}</p>
              </div>
              <input
                type="hidden"
                {...register(`ingredients.${index}.order`)}
                value={index}
              />
            </div>
          )}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default RecipeForm;
