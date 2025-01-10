import Container from "@/components/ui/Container";
import Link from "next/link";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Books",
    href: "/dashboard/books",
  },
  {
    label: "Recipes",
    href: "/dashboard/recipes",
  },
];

const Navigation = () => {
  return (
    <div className="flex justify-between items-center">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
