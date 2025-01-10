import { Button } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Typography from "@/components/ui/Typography";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center min-h-[50vh]">
        <div className="flex items-center justify-center mb-6">
          <div className="rounded-full bg-gray-200 p-1 inline-flex items-center gap-2 pe-4">
            <Typography
              variant="caption"
              bold={true}
              tag="p"
              className="bg-primary text-white rounded-full px-2 py-1"
            >
              New!
            </Typography>
            <Typography variant="caption" tag="p" className="text-gray-900">
              Your new cookbook is here!
            </Typography>
          </div>
        </div>
        <Typography variant="h1" tag="h1" className="text-center mb-4">
          Your personnal cookbook
        </Typography>
        <Typography variant="subtitle" tag="h2" className="text-center mb-8">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </Typography>
        <div className="flex justify-center items-center space-x-4">
          <Button>Get started</Button>
          <Button variant="outline">Learn more</Button>
        </div>
      </div>
    </Container>
  );
}
