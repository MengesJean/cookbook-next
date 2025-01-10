import { Button } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Typography from "@/components/ui/Typography";
import Link from "next/link";

const notFound = () => {
  return (
    <Container>
      <Typography variant="h1" tag="h1" className="mb-4">
        Not found
      </Typography>
      <Typography variant="text" className="mb-8">
        The page you are looking for does not exist.
      </Typography>
      <Link href="/dashboard/books">
        <Button>Go to dashboard</Button>
      </Link>
    </Container>
  );
};

export default notFound;
