import classNames from "classnames";
import Link from "next/link";

type SidebarLink = {
  id: string;
  href: string;
  label: string;
};

const SidebarLinks: SidebarLink[] = [
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

const LayoutSidebar = () => {
  return (
    <aside>
      <ul className="w-48 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
        {SidebarLinks.map((link, i) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className={classNames("block w-full px-4 py-2", {
                "border-b": i !== SidebarLinks.length - 1,
                "rounded-t-lg": i === 0,
                "rounded-b-lg": i === SidebarLinks.length - 1,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default LayoutSidebar;
