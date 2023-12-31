"use client";
import React from "react";
import SearchInput from "../shared/inputs/SearchInput";
import ButtonLink from "../shared/buttons/ButtonLink";
import { useRouter } from "next/navigation";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

import { fetchBreedById } from "@/app/redux/slices/breedById";

import styles from "./navigation.module.css";

interface IPageNavigation {}

const PageNavigation: React.FC<IPageNavigation> = ({}) => {
  const router = useRouter();
  const [search, setSearch] = React.useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = () => {
    dispatch(fetchBreedById(search));
    router.push("/search");
  };

  return (
    <div className={styles.nav}>
      <SearchInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onClick={handleSearch}
        placeholder="Search for breeds by id"
      />

      <div className={styles.nav}>
        <ButtonLink href="/likes">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z"
              fill="#FF868E"
            />
          </svg>
        </ButtonLink>
        <ButtonLink href="/favourites">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.07107 4C4.71811 4 2 6.71811 2 10.0711C2 11.6812 2.63963 13.2254 3.77817 14.364L15 25.5858L26.2218 14.364C27.3604 13.2254 28 11.6812 28 10.0711C28 6.71811 25.2819 4 21.9289 4C20.3188 4 18.7746 4.63963 17.636 5.77817L15.7071 7.70711C15.3166 8.09763 14.6834 8.09763 14.2929 7.70711L12.364 5.77818C11.2254 4.63963 9.68121 4 8.07107 4ZM0 10.0711C0 5.61354 3.61354 2 8.07107 2C10.2116 2 12.2646 2.85034 13.7782 4.36396L15 5.58579L16.2218 4.36396C17.7354 2.85034 19.7884 2 21.9289 2C26.3865 2 30 5.61354 30 10.0711C30 12.2116 29.1497 14.2646 27.636 15.7782L15.7071 27.7071C15.3166 28.0976 14.6834 28.0976 14.2929 27.7071L2.36396 15.7782C0.850339 14.2646 0 12.2116 0 10.0711Z"
              fill="#FF868E"
            />
          </svg>
        </ButtonLink>
        <ButtonLink href="/dislikes">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <g clipPath="url(#clip0_1_1561)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667 21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z"
                fill="#FF868E"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_1561">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </ButtonLink>
      </div>
    </div>
  );
};

export default PageNavigation;
