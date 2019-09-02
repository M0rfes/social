import React, { FC } from "react";
import { FaUpload } from "react-icons/fa";

type Prop = {
  imagePreview: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const FileUpload: FC<Prop> = ({ imagePreview }) => {
  return (
    <label htmlFor="upload">
      <input
        id="upload"
        type="file"
        onChange={imagePreview}
        className="hidden"
      />
      <span className="inline-block">
        <FaUpload />
      </span>
      <span className="ml-2">Upload</span>
    </label>
  );
};

export default FileUpload;
