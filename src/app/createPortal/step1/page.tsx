"use client";
import { useState } from "react";
import { Modal } from "../components/Modal";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>モーダルを開く</button>
      {isOpen && (
        <Modal>
          <h2>モーダルの中身</h2>
          <button onClick={() => setIsOpen(false)}>閉じる</button>
        </Modal>
      )}
    </div>
  );
};

export default Page;
