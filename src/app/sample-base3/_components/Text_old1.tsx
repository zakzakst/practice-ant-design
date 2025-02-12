// import classNames from "classnames";

// export const TextTagKeys = [
//   "p",
//   "span",
//   "h1",
//   "h2",
//   "h3",
//   "h4",
//   "h5",
//   "h6",
// ] as const;

// const TextStyles = {
//   normal: "text-base dark:text-white",
//   note: "text-base dark:text-white",
// } as const;

// type TextTagKey = (typeof TextTagKeys)[number];
// type TextTag = Pick<JSX.IntrinsicElements, TextTagKey>;

// // TODO: TextTagKeyでTを指定できるか試す
// type OwnProps<T extends keyof TextTag> = {
//   tag?: T;
//   textStyle?: keyof typeof TextStyles;
//   children: React.ReactNode;
//   className?: string;
// };

// type Props<T extends keyof TextTag> = OwnProps<T> &
//   Omit<TextTag[T], keyof OwnProps<T>>;

// const DesignHeading = <T extends keyof TextTag>({
//   tag,
//   textStyle,
//   children,
//   className,
//   ...props
// }: Props<T>) => {
//   const _tag = tag ? tag : "p";
//   const _textStyle = textStyle ? TextStyles[textStyle] : TextStyles["normal"];
//   // JSX 内で {tag} を直接使うと、JSX.IntrinsicElementsの型推論が正しく機能せず、エラーが発生するためas const でキャストする
//   const Component = _tag as keyof Pick<JSX.IntrinsicElements, TextTagKey>;
//   return (
//     <Component className={classNames(className, _textStyle)} {...props}>
//       {children}
//     </Component>
//   );
// };

// export default DesignHeading;
