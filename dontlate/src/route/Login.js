import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Backgorund = styled.div`
  background-image: url("img/mainImg.png");
  background-size: cover;
`;
const Input = tw.input`
  w-96
  h-14
  placeholder:text-gray-300
  pl-3
  border-[1px] 
  border-borderColor
  focus:outline-mainColor
`;
const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const onValid = (data) => {
    console.log(data);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}auth/login`, {
        email: data.email,
        password: data.pw,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("id", res.data.id);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex h-screen w-screen">
      <div className="hidden sm:hidden md:flex flex-col px-10 items-center justify-center">
        <img src="img/늦지마요메인로고.png" className="h-14" />
        <span className="text-lg text-mainColor font-bold">
          조급한 등교생활 이제 그만!
        </span>
      </div>
      <Backgorund className="flex-grow relative h-screen px-10">
        <div className="h-full w-full flex flex-col justify-center items-center ">
          <form className="flex flex-col" onSubmit={handleSubmit(onValid)}>
            <span className="text-mainColor text-2xl font-bold mb-3">
              로그인해서 같이 놀기
            </span>
            <Input
              placeholder="아이디"
              className="rounded-t-md"
              {...register("email")}
            />
            <Input
              placeholder="비밀번호"
              className="rounded-b-md mb-3"
              {...register("pw")}
            />
            <Button content="로그인" isPerfect={true} />
            <div className="text-sm p-3">
              <span className="text-textColor">신규 사용자이신가요?</span>
              <Link to="/signup">
                <span className="text-mainColor hover:font-bold hover:cursor-pointer">
                  계정 만들기
                </span>
              </Link>
            </div>
          </form>
        </div>
      </Backgorund>
    </div>
  );
};

export default Login;
