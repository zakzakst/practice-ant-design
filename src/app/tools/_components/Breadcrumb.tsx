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

// TODO: mapのkey指定がユニークでない、とのエラーが出るので対応する
const Breadcrumb = ({ items, className }: Props) => {
  return (
    <UiBreadcrumb className={className}>
      <BreadcrumbList>
        {items.map((item) => {
          const isLast = items.indexOf(item) === items.length - 1;
          return (
            <>
              <UiBreadcrumbItem key={item.id}>
                {isLast ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                )}
              </UiBreadcrumbItem>
              {isLast ? null : <BreadcrumbSeparator key={`${item.id}-separator`} />}
            </>
          );
        })}
      </BreadcrumbList>
    </UiBreadcrumb>
  );
};

export default Breadcrumb;
