"use client";
import { cx } from "class-variance-authority";
import React, { SetStateAction, useState } from "react";

/**
 ** Header Component renders the Discussion Forum and Market Stories headline tags
 *
 * @param forum if True renders the "Discussion Forum" section on mobile view
 * @param marketStories if True render the "Market Stories" section on mobile view
 * @returns the container that container two h1 tags with styles necessary
 */

function Header({
  page,
  togglePage,
}: {
  page: { forum: boolean; marketStories: boolean };
  togglePage: React.Dispatch<
    React.SetStateAction<{
      forum: boolean;
      marketStories: boolean;
    }>
  >;
}) {
  return (
    <header className="border-x- z-10 h-20 max-w-6xl border-black lg:mt-8  lg:border-0 lg:px-4 xl:mx-auto ">
      <div className="grid  grid-cols-2 gap-8 bg-blue-800 text-white  lg:grid-cols-12   lg:bg-white">
        <h1
          className={cx(
            "truncate py-2 text-center  md:text-[1.5rem] lg:col-span-8 lg:w-fit lg:rounded-md lg:bg-red-100 lg:px-4 lg:font-bold lg:text-red-600",
            {
              " border-b-4 border-red-500 bg-blue-950  lg:border-0": page.forum,
            },
          )}
          onClick={() => togglePage({ forum: true, marketStories: false })}
        >
          Discussion Forum
        </h1>
        <h1
          className={cx(
            "truncate py-2 text-center md:text-[1.5rem] lg:col-span-4 lg:w-fit lg:rounded-md lg:bg-red-100 lg:px-4 lg:font-bold lg:text-red-600",
            {
              " border-b-4 border-red-500 bg-blue-950 lg:border-0":
                page.marketStories,
            },
          )}
          onClick={() => togglePage({ forum: false, marketStories: true })}
        >
          Market Stories
        </h1>
      </div>
    </header>
  );
}

export default Header;
