import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HumburgerMenu } from "@/assets/icons";
import Image from "next/image";
import { Logo } from "@/assets/images";
const Navigation = () => {
  const router = useRouter();
  const [isShowMenu, setIsShowMenu] = useState(false);
  return (
    <nav className="border border-bottom border-gray-200 border-1">
      <div className="flex flex-wrap items-center mx-auto p-4 gap-4">
        <button
          onClick={() => setIsShowMenu(!isShowMenu)}
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <HumburgerMenu />
        </button>
        <Link className="text-dark font-bold text-xl" href="/">
          <Image src={Logo} width={120} height={30} alt="logo" />
        </Link>
        <Link
          className={`
                 md:text-blue-700 md:p-0 hidden md:block
                  py-2 pl-3 pr-4 text-black ${router.asPath === "/todos" ? "text-blue-700" : ""}`}
          href="/todos"
        >
          To do
        </Link>
        {isShowMenu && (
          <div
            onClick={() => setIsShowMenu(false)}
            className="translation fixed z-9 bg-black bg-opacity-50 top-0 left-0 bottom-0 w-screen h-sreen"
          ></div>
        )}
        <div className={`${isShowMenu ? "" : "hidden"} h-screen fixed top-0 left-0 bottom-0 w-[300px] z-10 bg-[white] `} id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link
                className={`
                 bg-gray-200 rounded md:bg-transparent md:text-blue-700 md:p-0
                 block py-2 pl-3 pr-4 text-black rounded ${router.asPath === "/todos" ? "md:text-blue-700" : ""}`}
                href="/todos"
              >
                To do
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
