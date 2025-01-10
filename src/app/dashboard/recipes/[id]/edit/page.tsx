import RecipeForm from "@/components/recipes/RecipeForm";
import Typography from "@/components/ui/Typography";
import { getRecipe } from "@/lib/actions/recipe.actions";

interface EditRecipePageProps {
  params: {
    id: string;
  };
}

const EditRecipePage = async ({ params }: EditRecipePageProps) => {
  const { id } = await params;
  const recipe = await getRecipe(id);
  return (
    <div>
      <Typography variant="h1" tag="h1" className="mb-4">
        Edit recipe {id}
      </Typography>
      <RecipeForm recipe={recipe} />
    </div>
  );
};

export default EditRecipePage;
