import React, { useState } from "react";
import Bar, { Layout } from "../components/Bar";
import { useLocation } from "react-router-dom";
import { cls } from "../lib/utils";

const Search = () => {
  const location = useLocation();
  const [resultNum, setResultNum] = useState(2);
  const userInput = new URLSearchParams(location.search).get("keyword");
  return (
    <Layout>
      <Bar />
      <div className="mt-5">
        <div className="space-y-5">
          <span className="px-3 md:px-10 text-lg text-textColor font-bold">
            "{userInput}" 에 대한 검색결과 {resultNum}건
          </span>
          <div className="">
            {Array(resultNum)
              .fill(0)
              .map((r, i) => (
                <div
                  key={i}
                  className={cls(
                    "px-3 md:px-10 py-5 flex items-center border-b border-bgColor justify-between",
                    i === 0 ? "border-t" : ""
                  )}
                >
                  <div className="flex items-center space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 md:w-10 md:h-10 text-mainColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <div className="flex flex-col">
                      <span className="font-bold text-md md:text-lg">
                        서울시 송파구 송파 2동 놀이터
                      </span>
                      <span className="text-textAssisColor text-sm">
                        서울시 송파구 송파2동 잠실대로 11길 1
                      </span>
                    </div>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    className="w-6 h-6 md:w-10 md:h-10 text-mainColor hover:fill-mainColor cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
