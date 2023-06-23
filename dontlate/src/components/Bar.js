import React from "react";
import { useForm } from "react-hook-form";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import tw from "tailwind-styled-components";
import logo from "../늦지마요미니로고.png";
import { cls } from "../lib/utils";

export const Layout = tw.div`
w-full
md:w-[768px]
mx-auto
border-l
border-r
min-h-screen
`;
const Span = tw.span`
cursor-pointer
`;

const Bar = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const onValid = ({ search }) => {
    navigate(`/search?keyword=${search}`);
  };
  return (
    <div
      className={cls(
        "bg-bgColor shadow-2xl",
        location.pathname === "/mypage" || location.pathname === "/profile"
          ? ""
          : "pb-4 "
      )}
    >
      <div
        className={cls(
          " p-2 ",
          location.pathname === "/mypage" || location.pathname === "/profile"
            ? "flex justify-between"
            : ""
        )}
      >
        {location.pathname === "/mypage" || location.pathname === "/profile" ? (
          <Link to="/home" className="">
            <img src="img/늦지마요미니로고.png" className="w-10" />
          </Link>
        ) : null}
        <div className="space-x-3 text-mainColor font-bold text-end text-sm  px-2 py-1">
          <Span>로그아웃</Span>
          <Link to="/mypage">
            <Span>마이페이지</Span>
          </Link>
        </div>
      </div>
      {location.pathname === "/mypage" ||
      location.pathname === "/profile" ? null : (
        <div className="w-full">
          <form
            onSubmit={handleSubmit(onValid)}
            className="flex relative items-center"
          >
            <Link to="/home" className="absolute left-3">
              <img
                src={
                  location.pathname.includes("detail")
                    ? logo
                    : "img/늦지마요미니로고.png"
                }
                className="w-10"
              />
            </Link>

            <input
              {...register("search")}
              placeholder="정류장 명 또는 노션명"
              className="w-full py-2 pl-14 placeholder:text-sm focus:outline-mainColor font-bold"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Bar;
