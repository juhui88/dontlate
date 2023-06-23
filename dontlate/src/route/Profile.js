import React, { useEffect, useState } from "react";
import Bar, { Layout } from "../components/Bar";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import tw from "tailwind-styled-components";

const Span = tw.span`
text-lg font-bold text-textColor"
`;

const Input = tw.input`
shadow-inner
`;
const Profile = () => {
  const { register, handleSubmit, watch } = useForm();
  const [isPerfect, setIsPerfect] = useState(false);
  const id = "sand8594@naver.com";

  const onValid = (data) => {
    console.log(data);
  };

  const handleInputChange = (e) => {
    console.log(e);
    setIsPerfect(true);
  };
  return (
    <Layout>
      <Bar />
      <div className="px-16 py-10 space-y-7">
        <div className="mx-44 flex flex-col items-center space-y-4">
          <img className="w-24" src={`img/profileImgs/${1}.png`} />
          <Button
            isPerfect={true}
            content={"프로필 사진 편집"}
            padding={"p-1"}
          />
        </div>
        <form
          onSubmit={handleSubmit(onValid)}
          className="border-[1px] border-mainColor rounded-md p-10 px-32 grid grid-cols-2 gap-8"
        >
          <Span>아이디</Span>
          <Span>{id}</Span>
          <Span>비밀번호</Span>
          <Input
            {...register("pw", {
              value: "123456789",
              minLength: {
                value: 8,
                message: "8자 이상 입력해주세요",
              },
              maxLength: {
                value: 18,
                message: "18자 이내로 입력해주세요",
              },
              pattern: {
                value: "/^[A-Za-z0-9._%+-]$/",
                message: "문자, 숫자, 특수문자를 포함해주세요!",
              },
            })}
            onChange={handleInputChange}
          />
          <Span>닉네임</Span>
          <Input
            {...register("nickName", {
              value: "djfkls",
            })}
            onChange={handleInputChange}
          />
          <Span>전화번호</Span>
          <Input
            {...register("phoneNum", {
              value: "ㅇㄹㄴㅇㄹ",
              minLength: {
                value: 11,
                message: "휴대폰번호 11자를 입력해주세요",
              },
              maxLength: {
                value: 11,
                message: "휴대폰번호 11자를 입력해주세요",
              },
            })}
            onChange={handleInputChange}
          />
        </form>
        <Button isPerfect={isPerfect} content={"정보 수정하기"} />
      </div>
    </Layout>
  );
};

export default Profile;
