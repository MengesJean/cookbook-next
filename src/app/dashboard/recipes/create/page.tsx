import RecipeForm from "@/components/recipes/RecipeForm";
import Typography from "@/components/ui/Typography";

const CreateRecipePage = async () => {
  return (
    <div>
      <Typography variant="h1" tag="h1" className="mb-4">
        Create
      </Typography>
      <RecipeForm />
    </div>
  );
};

export default CreateRecipePage;
