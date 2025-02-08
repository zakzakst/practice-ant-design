import classNames from "classnames";

type OwnProps = {
  children: React.ReactNode;
  className?: string;
};

type Props = OwnProps & Omit<JSX.IntrinsicElements["div"], keyof OwnProps>;

const DesignBox = ({ children, className, ...props }: Props) => {
  return (
    <div
      className={classNames(
        className,
        "p-8 border border-gray-200 rounded-lg shadow-lg"
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default DesignBox;
