import Link from "next/link";
import { Button } from "@/components/ui/button";

type HeaderLink = {
  id: string;
  href: string;
  label: string;
};

const HeaderLinks: HeaderLink[] = [
  {
    id: "link1",
    href: "/",
    label: "LINK1",
  },
  {
    id: "link2",
    href: "/",
    label: "LINK2",
  },
  {
    id: "link3",
    href: "/",
    label: "LINK3",
  },
];

const LayoutHeader = () => {
  return (
    <header className="bg-primary/80 backdrop-blur-md dark:bg-primary/50">
      <div className="mx-auto container flex items-center px-4 py-2">
        <div className="text-primary-foreground font-bold text-lg">
          <Link href="/">LOGO</Link>
        </div>
        <div className="grow">
          <nav>
            <ul className="flex gap-1 justify-end">
              {HeaderLinks.map((link) => (
                <li key={link.id}>
                  <Button variant="link" asChild>
                    <Link className="text-primary-foreground" href={link.href}>
                      {link.label}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="ml-4">
          <Button variant="secondary" asChild>
            <Link href="/">CTA</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default LayoutHeader;
