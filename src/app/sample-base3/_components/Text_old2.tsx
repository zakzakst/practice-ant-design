// import classNames from "classnames";

// export const TagNames = {
//   p: "p",
//   // span: "span",
// } as const;

// type TagNameKey = keyof typeof TagNames;

// const TextStyles = {
//   normal: "text-base dark:text-white",
//   note: "text-base dark:text-white",
// } as const;

// type TextStylesKey = keyof typeof TextStyles;

// type OwnProps<T> = {
//   tagName?: T;
//   textStyle?: TextStylesKey;
//   children: React.ReactNode;
//   className?: string;
// };

// type Props<T extends TagNameKey> = OwnProps<T> &
//   JSX.IntrinsicElements[(typeof TagNames)[T]];

// const DesignHeading = <T extends TagNameKey>({
//   tagName,
//   textStyle,
//   children,
//   className,
//   ...props
// }: Props<T>) => {
//   const _tagName = tagName ? tagName : TagNames["p"];
//   const _textStyle = textStyle ? TextStyles[textStyle] : TextStyles["normal"];
//   // JSX 内で_tagNameを直接使うと、JSX.IntrinsicElementsの型推論が正しく機能せず、エラーが発生するためas const でキャストする
//   const Component = _tagName as JSX.IntrinsicElements["p"];
//   return (
//     <Component className={classNames(className, _textStyle)} {...props}>
//       {children}
//     </Component>
//   );
// };

// export default DesignHeading;
