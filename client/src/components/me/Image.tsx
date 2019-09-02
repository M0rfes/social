import React, { FC } from "react";
import FileUpload from "./FileUpload";
type Prop = {
  src: string;
  imagePreview: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Image: FC<Prop> = ({ src, imagePreview }) => {
  return (
    <div className="m-auto w-full flex justify-center content-center">
      <img src={src} className="w-32 h-32 rounded-full object-cover" />
      <div className="ml-4 mt-10 px-4 py-2 bg-blue-500 h-12 text-white rounded-lg flex flex-col justify-center content-center">
        <FileUpload imagePreview={imagePreview} />
      </div>
    </div>
  );
};

export default Image;
