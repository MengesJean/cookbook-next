import { Button } from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import { getRecipe } from "@/lib/actions/recipe.actions";
import Image from "next/image";
import Link from "next/link";
interface RecipePageProps {
  params: {
    id: string;
  };
}

const RecipePage = async ({ params }: RecipePageProps) => {
  const { id } = await params;
  const recipe = await getRecipe(id);
  return (
    <div>
      <Typography variant="h1" tag="h1" className="mb-4">
        {recipe.title}
      </Typography>
      <Link href={`/dashboard/recipes/${id}/edit`}>
        <Button>Edit</Button>
      </Link>
      <Typography variant="text" tag="p" className="mb-4">
        Created at : {recipe.createdAt.toLocaleDateString()}
      </Typography>
      <Typography variant="text" tag="p" className="mb-4">
        Updated at : {recipe.updatedAt.toLocaleDateString()}
      </Typography>
      {recipe.image && (
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={150}
          height={150}
          className="mb-4"
        />
      )}
      <div className="mb-4">
        <Typography variant="h2" tag="h2" className="mb-4">
          Ingredients
        </Typography>
        <ul>
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient.ingredient.id}>
              {ingredient.ingredient.name} : {ingredient.quantity}{" "}
              {ingredient.unit}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <Typography variant="h2" tag="h2" className="mb-4">
          Instructions
        </Typography>
        <ul>
          {recipe.instructions.map((instruction) => (
            <li key={instruction.order}>
              {instruction.title} : {instruction.instruction}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipePage;
