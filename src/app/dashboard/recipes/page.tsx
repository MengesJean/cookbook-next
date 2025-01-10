import RecipesFilter from "@/components/recipes/RecipesFilter";
import RecipesTable from "@/components/recipes/RecipesTable";
import Typography from "@/components/ui/Typography";
import { getRecipes } from "@/lib/actions/recipe.actions";

const RecipesPage = async () => {
  const recipes = await getRecipes();
  return (
    <div>
      <Typography variant="h1" tag="h1" className="mb-4">
        Recipes
      </Typography>
      <RecipesFilter className="mb-4" />
      <RecipesTable recipes={recipes} />
    </div>
  );
};

export default RecipesPage;
