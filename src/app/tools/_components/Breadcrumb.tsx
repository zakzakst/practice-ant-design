import {
  Breadcrumb as UiBreadcrumb,
  BreadcrumbItem as UiBreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type BreadcrumbItem = {
  id: string;
  label: string;
  href: string;
};

type Props = {
  items: BreadcrumbItem[];
  className?: string;
};

const Breadcrumb = ({ items, className }: Props) => {
  return (
    <UiBreadcrumb className={className}>
      <BreadcrumbList>
        {items.map((item) => {
          const isLast = items.indexOf(item) === items.length - 1;
          if (isLast) {
            return (
              <UiBreadcrumbItem key={item.id}>
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              </UiBreadcrumbItem>
            );
          } else {
            return (
              <>
                <UiBreadcrumbItem key={item.id}>
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                </UiBreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            );
          }
        })}
      </BreadcrumbList>
    </UiBreadcrumb>
  );
};

export default Breadcrumb;
