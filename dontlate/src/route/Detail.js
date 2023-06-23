import React from "react";
import Bar, { Layout } from "../components/Bar";
import img from "../playgroundImg/playground1.jpg";
import tw from "tailwind-styled-components";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Notice from "../components/detailComponents/Notice";
import Chat from "../components/detailComponents/Chat";
import { cls } from "../lib/utils";

const Item = tw.div`
p-3
border-l
w-full
text-center
hover:text-mainColor 
cursor-pointer font-bold text-textAssisColor 
`;
const Detail = () => {
  const location = useLocation();
  const match = location.pathname.split("/")[3];
  return (
    <Layout>
      <Bar />
      <div className="text-textColor shadow-lg">
        <div>
          <img src={img} className="w-full h-80  object-cover " />
        </div>

        <div className="px-5 md:px-44 bg-bgColor w-full pt-2 pb-5">
          <div className="flex justify-between">
            <span className="text-xl font-bold ">서현-학교행</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              className="w-5 h-5 md:w-10 md:h-10 text-mainColor hover:fill-mainColor cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <div className="text-textAssisColo flex space-x-2 text-textAssisColor">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span>서울시 송파구 송파2동 잠실대로 11길 1</span>
          </div>
        </div>
        <div className="px-44 bg-white rounded-t-lg flex justify-between ">
          <Link to="notice" className="w-full h-full ">
            <Item className={cls(match === "notice" ? "text-mainColor" : "")}>
              공지
            </Item>
          </Link>
          <Link to="chat" className="w-full h-full">
            <Item
              className={cls(
                "border-r",
                match === "chat" ? "text-mainColor" : ""
              )}
            >
              채팅
            </Item>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/notice" element={<Notice />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Layout>
  );
};

export default Detail;
