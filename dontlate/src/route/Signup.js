import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { cls } from "../lib/utils";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { Layout } from "../components/Bar";

const Input = tw.input`
bg-bgColor
w-full
rounded-md
p-3
shadow-lg
focus:outline-mainColor
placeholder:text-[#D2C0C0]
`;

const InputWrap = tw.div`
space-y-2
`;
const ErrorSpan = tw.span`
pl-5 text-mainColor
`;
const Signup = () => {
  const [profileImgNum, setProfileImgNum] = useState(0);
  const [next, setNext] = useState(false);
  const [isPerfect, setIsPerfect] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm();

  const onClickImg = (i) => {
    setProfileImgNum(i);
  };
  const onClickNext = () => {
    if (profileImgNum !== 0) {
      setNext((prev) => !prev);
    }
  };

  const onValid = (data) => {
    if (data.password !== data.password1) {
      setError("password1", { message: "비밀번호가 일치하지 않습니다" });
    }
    console.log(data);
  };
  useEffect(() => {
    if (
      watch("id") !== "" &&
      watch("password") !== "" &&
      watch("password1") !== "" &&
      watch("name") !== "" &&
      watch("tags") !== "" &&
      watch("phoneNumber") !== "" &&
      watch("nickName") !== ""
    ) {
      setIsPerfect(true);
    } else {
      setIsPerfect(false);
    }
  }, [watch()]);
  return (
    <Layout>
      <div className="pt-5 text-textColor px-10">
        <img src="img/가치노라메인로고.png" className="mx-auto" />
        <div className="mt-10 mb-7">
          <div className="flex flex-col space-y-4">
            <span className="text-3xl font-bold ">회원가입</span>
            <span>회원이 되어 더 편리한 기능을 이용해보세요!</span>
          </div>
        </div>
        <div className="md:px-5">
          {next ? (
            <div>
              <form onSubmit={handleSubmit(onValid)} className="space-y-3">
                <InputWrap>
                  <span>* 아이디</span>
                  {errors?.id ? (
                    <ErrorSpan>{errors.id?.message}</ErrorSpan>
                  ) : null}
                  <Input
                    placeholder="아이디 입력(@example.com)"
                    {...register("id", {
                      required: "아이디를 입력해주세요",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "이메일 형식으로 입력해주세요!",
                      },
                    })}
                  />
                </InputWrap>
                <InputWrap>
                  <span>* 비밀번호</span>
                  {errors?.password ? (
                    <ErrorSpan>{errors.password?.message}</ErrorSpan>
                  ) : null}
                  <Input
                    placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 8~18자)"
                    {...register("password", {
                      required: "비밀번호를 입력해주세요",
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
                  />
                </InputWrap>
                <InputWrap>
                  <span>비밀번호 확인</span>
                  {errors?.password1 ? (
                    <ErrorSpan>{errors.password1?.message}</ErrorSpan>
                  ) : null}
                  <Input
                    placeholder="비밀번호 재입력"
                    {...register("password1", {
                      required: true,
                    })}
                  />
                </InputWrap>
                <InputWrap>
                  <span>* 이름</span>
                  <Input
                    placeholder="이름을 입력해주세요"
                    {...register("name", {
                      required: "이름을 입력해주세요!",
                    })}
                  />
                </InputWrap>
                <InputWrap>
                  <span>* 전화번호</span>
                  {errors?.phoneNumber ? (
                    <ErrorSpan>{errors.phoneNumber?.message}</ErrorSpan>
                  ) : null}
                  <Input
                    placeholder="휴대폰 번호 입력('-'제외 11자리 입력해주세요)"
                    {...register("phoneNumber", {
                      required: "휴대폰 번호를 입력해주세요!",
                      minLength: {
                        value: 11,
                        message: "휴대폰번호 11자를 입력해주세요",
                      },
                      maxLength: {
                        value: 11,
                        message: "휴대폰번호 11자를 입력해주세요",
                      },
                    })}
                  />
                </InputWrap>
                <InputWrap>
                  <span>* 닉네임</span>
                  <Input
                    placeholder="사용하실 닉네임을 입력해주세요"
                    {...register("nickName", {
                      required: "닉네임을 입력해주세요!",
                    })}
                  />
                </InputWrap>
                <div className="pt-5">
                  <Button content="회원가입" isPerfect={isPerfect} />
                </div>
              </form>
            </div>
          ) : (
            <div>
              <span>* 프로필 이미지</span>
              <div className="grid grid-cols-2 gap-10 md:grid-cols-3 md:gap-20 justify-items-center py-10 ">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    className=""
                    onClick={() => {
                      onClickImg(i);
                    }}
                  >
                    <img
                      src={`img/profileImgs/${i}.png`}
                      className={cls(
                        "cursor-pointer border-2 rounded-full transition-all",
                        profileImgNum === i ? " border-mainColor " : ""
                      )}
                    />
                  </div>
                ))}
              </div>
              <div onClick={onClickNext}>
                <Button
                  content="다음"
                  isPerfect={profileImgNum === 0 ? false : true}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
