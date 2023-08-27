"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import styles from "./gallery.module.css";
import { createUpload } from "../redux/slices/upload";

interface IUploadForm {
  modalActive: boolean;
}

const UploadForm: React.FC<IUploadForm> = ({ modalActive }) => {
  const { upload, loading, error } = useSelector(
    (state: RootState) => state.upload
  );
  const dispatch = useDispatch<AppDispatch>();

  const [fileName, setFileName] = React.useState("No file selected");
  const [file, setFile] = React.useState(null);
  const [image, setImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!modalActive) {
      setImage(null);
      setFileName("No file selected");
    }
  }, [modalActive]);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      if (
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/jpg"
      ) {
        setFile(file);
        setFileName(`Image File Name: ${file.name}`);
        setImage(URL.createObjectURL(file));
      } else {
        setFileName("Invalid file type. Please upload a .jpg or .png image.");
        setImage(null);
      }
    }
  };

  const handleUpload = () => {
    dispatch(
      createUpload({
        formData: file,
        sub_id: process.env.NEXT_PUBLIC_USER_ID,
      })
    );
  };

  const FormContent = () => {
    return image ? (
      <Image src={image} alt={fileName} width={560} height={280} />
    ) : (
      <div className={styles.upload_form_content}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M140 40C128.954 40 120 48.9543 120 59.9999C120 71.0456 128.954 79.9999 140 79.9999C151.046 79.9999 160 71.0456 160 59.9999C160 48.9543 151.046 40 140 40Z"
            fill="#F8F8F7"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 20C0 8.9543 8.9543 0 20 0H180C191.046 0 200 8.9543 200 20V180C200 181.38 199.86 182.729 199.594 184.031C199.199 185.958 198.528 187.784 197.623 189.465C194.247 195.737 187.621 200 180 200H20C8.95431 200 0 191.046 0 180V20ZM64.6564 41.8952L60 37.2387L13.3333 83.9054V20C13.3333 16.3181 16.3181 13.3333 20 13.3333H180C183.682 13.3333 186.667 16.3181 186.667 20V133.333H156.095L64.7145 41.9526C64.6953 41.9333 64.6759 41.9142 64.6564 41.8952Z"
            fill="#F8F8F7"
          />
        </svg>
        <p className={styles.upload_form_content_text}>
          Drag here<span> your file or </span>Click here<span> to upload</span>
        </p>
      </div>
    );
  };

  const InfoUpload = () => {
    if (error) {
      return (
        <div className={styles.info_box}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM9.05719 10L5.5286 6.4714L6.4714 5.5286L10 9.05719L13.5286 5.5286L14.4714 6.4714L10.9428 10L14.4714 13.5286L13.5286 14.4714L10 10.9428L6.4714 14.4714L5.5286 13.5286L9.05719 10Z"
              fill="#FF868E"
            />
          </svg>
          <p className={styles.info_text}>{error}</p>
        </div>
      );
    }

    if (upload) {
      return (
        <div className={styles.info_box}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM15.1872 7.08313L9.42904 14.2809L4.90654 10.5121L5.76012 9.48785L9.23763 12.3858L14.1461 6.2502L15.1872 7.08313Z"
              fill="#97EAB9"
            />
          </svg>
          <p className={styles.info_text}>Thanks for the Upload - Cat found!</p>
        </div>
      );
    }

    return (
      <p onClick={handleUpload} className={styles.upload_form_btn}>
        UPLOAD PHOTO
      </p>
    );
  };
  const formClass =
    error && image
      ? `${styles.upload_form} ${styles.upload_form_error}`
      : styles.upload_form;

  return (
    <div className={formClass}>
      <h2>Upload a .jpg or .png Cat Image</h2>
      <h4>
        Any uploads must comply with the{" "}
        <Link href="https://thecatapi.com/privacy">upload guidelines </Link>or
        face deletion.
      </h4>

      <form onClick={() => document.getElementById("file")?.click()}>
        <input
          id="file"
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={handleFileChange}
          hidden
        />
        <FormContent />
      </form>

      <h4>{fileName}</h4>

      {image && <InfoUpload />}
    </div>
  );
};

export default UploadForm;
