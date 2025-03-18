import ReactDOM from "react-dom";

type Props = {
  children: React.ReactNode;
};

export const Modal = ({ children }: Props) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">{children}</div>
    </div>,
    // 参考：https://github.com/radix-ui/primitives/blob/main/packages/react/portal/src/portal.tsx
    globalThis?.document?.body
  );
};
