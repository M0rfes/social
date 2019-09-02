const UseImagePreview = (
  setSrc: React.Dispatch<React.SetStateAction<string>>,
) => (e: React.ChangeEvent<HTMLInputElement>) => {
  const reader = new FileReader();
  reader.onload = e => setSrc((e.target as any).result);
  reader.readAsDataURL(e.target.files![0]);
};

export default UseImagePreview;
