/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchGallery } from "../redux/slices/gallery";
import { fetchBreeds } from "../redux/slices/breeds";

import SelectInput from "../components/shared/inputs/SelectInput";
import styles from "./gallery.module.css";
import Button from "../components/shared/buttons/Button";

interface GalleryFormState {
  limitOption: number;
  orderOption: string;
  mimeOption: string;
  breedOption: string;
}

const GalleryForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { breeds } = useSelector((state: RootState) => state.breeds);

  const [formState, setFormState] = React.useState<GalleryFormState>({
    limitOption: 10,
    orderOption: "RAND",
    mimeOption: "",
    breedOption: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      fetchGallery({
        id: formState.breedOption,
        limit: formState.limitOption,
        order: formState.orderOption,
        mime_types: formState.mimeOption,
      })
    );
  };

  React.useEffect(() => {
    dispatch(
      fetchGallery({
        id: formState.breedOption,
        limit: formState.limitOption,
        order: formState.orderOption,
        mime_types: formState.mimeOption,
      })
    );
  }, []);

  React.useEffect(() => {
    dispatch(fetchBreeds("all"));
  }, []);

  const orders = [
    {
      value: "RAND",
      label: "Random",
    },
    {
      value: "DESC",
      label: "Desc",
    },
    {
      value: "ASC",
      label: "Asc",
    },
  ];

  const mimes = [
    {
      value: "",
      label: "All",
    },
    {
      value: "jpg,png",
      label: "Static",
    },
    {
      value: "gif",
      label: "Animated",
    },
  ];

  const limits = [
    {
      value: 5,
      label: "Limit: 5",
    },
    {
      value: 10,
      label: "Limit: 10",
    },
    {
      value: 15,
      label: "Limit: 15",
    },
    {
      value: 20,
      label: "Limit: 20",
    },
  ];

  const newBreeds = [
    {
      value: "",
      label: "None",
    },
    ...breeds?.map((cat: any) => {
      return {
        value: cat.id,
        label: cat.name,
      };
    }),
  ];

  return (
    <form className={styles.form}>
      <div className={styles.form_group}>
        <div className={styles.form_input}>
          <label>Order</label>
          <SelectInput
            options={orders}
            value={formState.orderOption}
            onChange={(value) =>
              setFormState((prevState) => ({
                ...prevState,
                orderOption: value,
              }))
            }
          />
        </div>
        <div className={styles.form_input}>
          <label>TYPE</label>
          <SelectInput
            options={mimes}
            value={formState.mimeOption}
            onChange={(value) =>
              setFormState((prevState) => ({ ...prevState, mimeOption: value }))
            }
          />
        </div>
      </div>

      <div className={styles.form_group}>
        <div className={styles.form_input}>
          <label>Breed</label>
          <SelectInput
            options={newBreeds}
            value={formState.breedOption}
            onChange={(value) =>
              setFormState((prevState) => ({
                ...prevState,
                breedOption: value,
              }))
            }
          />
        </div>
        <div className={styles.form_input}>
          <label>Limit</label>
          <SelectInput
            options={limits}
            value={formState.limitOption}
            onChange={(value) =>
              setFormState((prevState) => ({
                ...prevState,
                limitOption: value,
              }))
            }
          />
        </div>

        <Button
          type="secondary"
          onClick={(e: React.MouseEvent) => handleSubmit(e)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.48189 2.49989L6.93396 0.953004L7.88633 0L11.0577 3.16928L7.88634 6.33873L6.93395 5.38576L8.47232 3.84832C4.51244 3.99813 1.3473 7.25498 1.3473 11.2478C1.3473 15.3361 4.66547 18.6527 8.75744 18.6527C12.8494 18.6527 16.1676 15.3361 16.1676 11.2478V10.5742H17.5149V11.2478C17.5149 16.081 13.5927 20 8.75744 20C3.92221 20 0 16.081 0 11.2478C0 6.50682 3.77407 2.64542 8.48189 2.49989Z"
              fill="#FF868E"
            />
          </svg>
        </Button>
      </div>
    </form>
  );
};

export default GalleryForm;
