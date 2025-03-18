const copyToClipboard = async (text: string) => {
  if (!navigator.clipboard) {
    alert("このブラウザではクリップボードへのコピーがサポートされていません");
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    alert("クリップボードにコピーしました");
  } catch (err) {
    console.error(err);
    alert("クリップボードへのコピーに失敗しました");
  }
};

export default copyToClipboard;
