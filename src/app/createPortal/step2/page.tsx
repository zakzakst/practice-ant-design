// NOTE: 上手くできなかった。詰まってしまったのでエラーが出るが一旦ここで終了
import { useModal } from "../context/ModalContext";

const Page = () => {
  console.error("useModal", useModal);
  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal(
      <div>
        <h2>グローバルモーダルの中身</h2>
        <p>ここに任意のコンテンツを入れることができます。</p>
      </div>
    );
  };

  return (
    <div>
      <h1>Next.jsのグローバルモーダル管理例</h1>
      <button onClick={handleOpenModal}>モーダルを開く</button>
      {/* <button onClick={closeModal}>モーダルを閉じる</button> */}
    </div>
  );
};

export default Page;
