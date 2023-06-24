import React, { useEffect, useRef, useState } from "react";
import Button from "../Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRecoilState } from "recoil";
import { changeState } from "../atom";

const 임시데이터 = {
  id: 0,
  title: "많은 강우량으로 한신 아파트 셔틀 운행 불가 안내",
  date: "2023.06.23",
  content:
    "금일 많은 강우량으로 인해 제 시간에 셔틀 운행이 불가함으로, 같은 셔틀을 이용하는 학우님들과 되도록 같이 택시를 이용해주시면 감사하겠습니다. 이후 금액에 대한 공지는 영수증과 함께 qweasd@naver.com으로 메일 보내시면 공제해드리겠습니다.",
};

const Review = ({ postId }) => {
  const [userImg, setUserImg] = useState(1);
  const [isPost, setIsPost] = useState(false);
  const btnRef = useRef();
  const userId = localStorage.getItem("id");
  const [userData, setUserData] = useState();
  const [change, setChange] = useRecoilState(changeState);
  const [posts, setPosts] = useState();

  const { register, handleSubmit, reset } = useForm();

  const onValid = (data) => {
    console.log(data);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}post/${postId}`, {
        title: data.noticeTitle,
        content: data.noticeContent,
      })
      .then((res) => {
        console.log("notice", res);
        setChange((prev) => !prev);
      })
      .then((err) => console.log(err));
    reset();

    setIsPost(false);
  };
  const handleKeyDown = (e) => {
    if (!e.shiftKey && e.key === "Enter") {
      e.preventDefault();
      btnRef.current.click();
    } else if (e.shiftKey && e.key === "Enter") {
      e.preventDefault();
      const textarea = e.target;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const value = textarea.value;
      textarea.value = value.substring(0, start) + "\n" + value.substring(end);
      textarea.selectionStart = textarea.selectionEnd = start + 1;
    }
  };
  const onClick = () => {
    setIsPost((prev) => !prev);
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}users/detail/${userId}`)
      .then((res) => {
        console.log(res);
        setUserData(res.data.user);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${process.env.REACT_APP_BASE_URL}post/${postId}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data.post.reverse());
      })
      .catch((err) => console.log(err));
  }, [change, setChange, postId, userId]);
  return (
    <div className="mx-40 my-2">
      {isPost ? (
        <div className="my-5 space-y-5">
          <div className="flex items-center space-x-3">
            <img
              src={`/img/profileImgs/${userData?.profile_img_num}.png`}
              className="w-12 shadow-lg rounded-full"
            />
            <span className="font-bold">{userData?.name}</span>
          </div>
          <div>
            <form onSubmit={handleSubmit(onValid)} className="space-y-4">
              <div className="">
                <input
                  {...register("noticeTitle")}
                  className="w-full border-2 border-b-0 border-mainColor rounded-t-md h-10 outline-none p-2"
                />
                <textarea
                  onKeyDown={handleKeyDown}
                  {...register("noticeContent")}
                  className="border-2 border-t-[1px] border-mainColor rounded-b-md h-40 w-full outline-none p-2"
                />
              </div>

              <button ref={btnRef} className="w-full">
                <Button content={"리뷰올리기"} isPerfect={true} />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <span className="text-mainColor font-bold">⚐ 공지사항</span>
          <span className="text-textAssisColor text-sm">
            총 {posts?.length}건의 공지사항이 있습니다
          </span>

          <div className="px-3 ">
            {posts?.map((i) => (
              <div className="py-8 px-2 space-y-3  border-b border-textAssisColor">
                <div className="font-bold">{i.notice}</div>
                <div className="text-textColor text-sm ">{i.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div
        onClick={onClick}
        className="fixed bottom-3 right-10 px-4 py-2 shadow-xl border-2 border-mainColor text-mainColor bg-white cursor-pointer hover:bg-mainColor hover:text-white rounded-3xl text-xl font-bold"
      >
        추가하기
      </div>
    </div>
  );
};

export default Review;
