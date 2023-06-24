import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { changeState } from "../atom";

const TriangleLeft = styled.div`
  width: 0;
  height: 0;
  border-bottom: 10px solid transparent;
  border-top: 10px solid transparent;
  border-left: 40px solid rgb(243, 244, 246);
  border-right: 40px solid transparent;
  position: absolute;
  left: -70px;
  transform: rotate(180deg);
  bottom: 20px;
`;

const TriangleRight = styled.div`
  width: 0;
  height: 0;
  border-bottom: 10px solid transparent;
  border-top: 10px solid transparent;
  border-left: 40px solid rgb(243, 244, 246);
  border-right: 40px solid transparent;
  position: absolute;
  bottom: 20px;
  right: -70px;
`;

const Chat = ({ postId }) => {
  const { register, handleSubmit, reset } = useForm();
  const [change, setChange] = useRecoilState(changeState);
  const [chat, setChat] = useState();
  const chatRef = useRef();

  const onValid = (data) => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}post/${postId}`, {
        content: data.chatContent,
      })
      .then((res) => {
        console.log("chat", res);
        setChange((prev) => !prev);
      })
      .then((err) => console.log(err));
    reset();
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}post/${postId}`)
      .then((res) => {
        console.log("채팅res", res);
        setChat(res.data.post);
      })

      .catch((err) => console.log(err));
  }, [change, setChange, postId]);

  useEffect(() => {
    chatRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chat]);
  return (
    <div className="px-2 md:mx-40 mt-2  min-h-[300px] relative">
      <span className="flex justify-center font-bold  text-textColor">
        2023.06.24
      </span>
      <div className="flex flex-col h-full">
        <div className=" py-5 space-y-7 mb-10" ref={chatRef}>
          <div className="relative">
            <div className="flex items-end space-x-2">
              <div className="bg-gray-100 text-textColor font-bold text-sm p-4 rounded-lg w-4/5">
                방금 전화해봤는데 오늘 비때문에 제시간에 셔틀이 못 온다네요~~
                참고하세요~!
              </div>
              <span className="text-textColor text-xs">08:08</span>
            </div>

            <TriangleLeft />
          </div>
          {chat?.map((c) => (
            <div className="relative">
              <div className="flex items-end space-x-2 justify-end">
                <span className="text-textColor text-xs">
                  {c.createdAt.slice(11, 13).split("").reverse().join("")}:
                  {c.createdAt.slice(14, 16)}
                </span>
                <div className="bg-gray-100 text-textColor font-bold text-sm p-4 rounded-lg w-4/5">
                  {c.description}
                </div>
              </div>
              <TriangleRight />
            </div>
          ))}
        </div>

        <form
          className=" bg-red-300 flex justify-center items-center"
          onClick={handleSubmit(onValid)}
        >
          <input
            className="h-10 border-mainColor border-2 rounded-md w-full sm:w-5/6 md:w-[420px] absolute bottom-0 outline-none p-2"
            {...register("chatContent", { required: true })}
          />
          <button className="absolute right-5 bottom-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 text-mainColor"
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
