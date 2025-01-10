import { Recipe } from "@/lib/types/Recipe";
import Image from "next/image";
import Link from "next/link";
import Typography from "../ui/Typography";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Link href={`/dashboard/recipes/${recipe.id}`}>
      <div className="flex flex-col gap-2 border rounded overflow-hidden">
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={150}
          height={150}
          className="w-full h-auto object-cover"
        />
        <div className="px-4 py-2">
          <Typography variant="subtitle">{recipe.title}</Typography>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
