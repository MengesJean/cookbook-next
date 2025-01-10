"use client ";

import { Recipe } from "@/lib/types/Recipe";
import RecipeCard from "./RecipeCard";

interface RecipesTableProps {
  recipes: Recipe[];
}

const RecipesTable = ({ recipes }: RecipesTableProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipesTable;
