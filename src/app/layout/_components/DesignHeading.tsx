// 参考：https://preline.co/docs/typography.html#headings
import classNames from "classnames";

type HeadingKey = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type OwnProps<T extends keyof Pick<JSX.IntrinsicElements, HeadingKey>> = {
  tag: T;
  size?: HeadingKey;
  children: React.ReactNode;
  className?: string;
};

type Props<T extends keyof Pick<JSX.IntrinsicElements, HeadingKey>> = OwnProps<T> &
  Omit<Pick<JSX.IntrinsicElements, HeadingKey>[T], keyof OwnProps<T>>;

type HeadingStyle = Record<HeadingKey, string>;

const headingStyles: HeadingStyle = {
  h1: "text-4xl dark:text-white",
  h2: "text-3xl dark:text-white",
  h3: "text-2xl dark:text-white",
  h4: "text-xl dark:text-white",
  h5: "text-lg dark:text-white",
  h6: "text-base dark:text-white",
};

const DesignHeading = <T extends keyof Pick<JSX.IntrinsicElements, HeadingKey>>({
  tag,
  size,
  children,
  className,
  ...props
}: Props<T>) => {
  const headingStyle = size ? headingStyles[size] : headingStyles[tag];
  // JSX 内で {tag} を直接使うと、JSX.IntrinsicElementsの型推論が正しく機能せず、エラーが発生するためas const でキャストする
  const Component = tag as keyof Pick<JSX.IntrinsicElements, HeadingKey>;
  return (
    <Component className={classNames(className, headingStyle)} {...props}>
      {children}
    </Component>
  );
};

export default DesignHeading;
