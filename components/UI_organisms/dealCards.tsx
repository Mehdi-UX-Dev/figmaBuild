"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../UI_molecules/button";
import { CiCircleInfo } from "react-icons/ci";
import ReactStars from "react-stars";
import { IconType } from "react-icons";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

interface CardProps {
  pictureSource: string;
  title: string;
  titleText: string;
  bodyTitle: string;
  bodyText: string;
  rating: number;
  review: string;
  star: number;
  superDeal?: {
    title: string;
    Icon: IconType;
  };
  id: number;
  discount?: number;
}

function Card({
  id,
  pictureSource,
  title,
  titleText,
  bodyTitle,
  bodyText,
  rating,
  review,
  star,
  superDeal,
  discount,
}: CardProps) {
  const [showMore, toggleShowMore] = useState(false);
  return (
    <div className="relative mt-5 flex flex-col bg-white py-4 shadow-md md:flex-row md:pl-4 ">
      {superDeal && (
        <div className=" absolute -left-4 top-0 flex h-7 items-center space-x-2 rounded-full bg-tertiary px-2 text-white">
          {React.createElement(superDeal.Icon)}
          <p>{superDeal.title}</p>
        </div>
      )}

      <div className="absolute right-4 top-0 flex  h-10 w-10 items-center justify-center rounded-full border bg-white text-gray-400 md:-left-4 md:top-10  ">
        {id}
      </div>
      <Image
        src={pictureSource}
        height={150}
        width={150}
        alt="photo"
        className="mx-auto object-contain md:mx-0"
      />
      <div className="ml-4 pt-4 md:my-0 md:max-w-[55ch]">
        <p>
          <span className="font-bold">{title}</span>
          {titleText}
        </p>

        <p>
          <span className="block font-bold">{bodyTitle}</span>
          {bodyText}
        </p>

        {showMore ? (
          <p className="flex items-center space-x-2 text-primary">
            <span>Show Less</span>{" "}
            <BiChevronUp
              className="cursor-pointer"
              onClick={() => toggleShowMore(false)}
            />{" "}
          </p>
        ) : (
          <p className="flex cursor-pointer items-center space-x-2 text-primary ">
            <span className="hover:underline">show more</span>{" "}
            <BiChevronDown className="" onClick={() => toggleShowMore(true)} />{" "}
          </p>
        )}

        {showMore && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo velit
            nostrum voluptas assumenda debitis? Exercitationem recusandae eaque
            dolorem vel maxime obcaecati rem quas facere repudiandae repellat
            nihil provident, laboriosam porro?
          </p>
        )}
      </div>

      <div className="max-w-[95%] grow space-y-4   md:max-w-none ">
        <div className="mb-4 rounded-b-xl bg-[#F3F9FF] pt-2 text-center md:mx-auto md:w-[150px]">
          <CiCircleInfo className="ml-auto mr-10 text-gray-400 " />
          <h1 className="text-[2rem]">{rating}</h1>

          {discount && (
            <p className="mx-auto max-w-fit rounded bg-gray-400 px-2 text-white">
              {discount}% Off
            </p>
          )}
          <p>{review}</p>
          <ReactStars
            className="flex justify-center "
            edit={false}
            value={star}
            size={24}
          />
        </div>
        <Button label="View" width={"full"} />
      </div>
    </div>
  );
}

export default Card;
