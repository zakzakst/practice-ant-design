export const downloadMdFile = (mdFile: string, fileName: string) => {
  const blob = new Blob([mdFile], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${fileName}.md`;
  a.click();
  URL.revokeObjectURL(url);
};

// eslint-disable-next-line
export const downloadJsonFile = (json: any, fileName: string) => {
  const blob = new Blob([JSON.stringify(json)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${fileName}.json`;
  a.click();
  URL.revokeObjectURL(url);
};
