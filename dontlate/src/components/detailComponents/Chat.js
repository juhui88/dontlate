import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

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

const Chat = () => {
  const { register, handleSubmit, reset } = useForm();

  const onValid = (data) => {};
  return (
    <div className="px-2 md:px-40 mt-2  ">
      <span className="flex justify-center font-bold  text-textColor">
        2023.06.23
      </span>
      <div className="flex flex-col">
        <div className=" py-5 space-y-7">
          <div className="relative">
            <div className="flex items-end space-x-2">
              <div className="bg-gray-100 text-textColor font-bold text-sm p-4 rounded-lg w-4/5">
                방금 전화해봤는데 오늘 비때문에 제시간에 셔틀이 못 온다네요~~
                참고하세요~!
              </div>
              <span className="text-textColor text-xs">시간</span>
            </div>

            <TriangleLeft />
          </div>
          <div className="relative">
            <div className="flex items-end space-x-2 justify-end">
              <span className="text-textColor text-xs">시간</span>
              <div className="bg-gray-100 text-textColor font-bold text-sm p-4 rounded-lg w-4/5">
                넹~ 감사합니다
              </div>
            </div>
            <TriangleRight />
          </div>
        </div>

        <form
          className="relative bg-red-300 flex justify-center items-center"
          onClick={handleSubmit(onValid)}
        >
          <input
            className="h-10 border-mainColor border-2 rounded-md w-full sm:w-5/6 md:w-[420px] absolute bottom-0"
            {...register("chat")}
          />
          <button className="absolute right-0">
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
