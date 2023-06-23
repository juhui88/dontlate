import React, { useState } from "react";
import Bar, { Layout } from "../components/Bar";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import "../index.css";

const Item = tw.div`
    space-y-3
`;

const ItemTop = tw.div`
flex items-center justify-between
`;

const WithHeart = tw.div`
flex items-center space-x-1
`;
const ItemTitle = tw.span`
font-bold text-lg
`;
const SeeMore = tw.span`
hover:font-bold cursor-pointer
`;
const PlayWrap = tw.div`
flex items-center justify-between border-b border-mainColor p-3
`;
const PlayWrapLeft = tw.div`
flex items-center space-x-4
`;
const ItemBottom = tw.div`
border border-mainColor rounded-xl  h-56 bg-white
`;
const TextBold = tw.span`
font-bold text-sm md:text-lg
`;
const TextSm = tw.span`
text-textAssisColor text-xs md:text-sm
`;
const MyPage = () => {
  const [imgNum, setImgNum] = useState(1);
  return (
    <Layout>
      <Bar />
      <div className="p-10 text-textColor space-y-20">
        <div className="flex items-center space-x-7">
          <img
            className="object-cover w-20 md:w-24 shadow-lg rounded-full"
            src={`img/profileImgs/${imgNum}.png`}
          />
          <div className="flex flex-col  space-y-2">
            <span className="font-bold text-lg">닉네임</span>
            <span className="flex items-center text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              <Link to="/profile">
                <span className="hover:font-bold cursor-pointer">
                  내 정보 관리
                </span>
              </Link>
            </span>
          </div>
        </div>
        <div className="space-y-20">
          <Item>
            <ItemTop>
              <WithHeart>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7 text-mainColor"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
                <ItemTitle>찜한놀이터</ItemTitle>
              </WithHeart>
              <SeeMore>더보기</SeeMore>
            </ItemTop>
            <ItemBottom>
              {[0, 1].map((i) => (
                <PlayWrap key={i}>
                  <PlayWrapLeft>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-7 h-7  text-mainColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <div className="flex flex-col">
                      <TextBold>서울시 송파구 송파 2동 놀이터</TextBold>
                      <TextSm>서울시 송파구 송파2동 잠실대로 11길 1</TextSm>
                    </div>
                  </PlayWrapLeft>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7 text-mainColor hover:cursor-pointer"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                </PlayWrap>
              ))}
            </ItemBottom>
          </Item>
          <Item>
            <ItemTop>
              <WithHeart>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7 text-mainColor"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
                <ItemTitle>내가 쓴 리뷰</ItemTitle>
              </WithHeart>
              <SeeMore>더보기</SeeMore>
            </ItemTop>
            <ItemBottom>
              {[0, 1].map((i) => (
                <PlayWrap key={i}>
                  <PlayWrapLeft>
                    <div className="space-y-2 flex flex-col max-h-20 overflow-hidden whitespace-normal text-ellipsis ">
                      <div className="md:space-x-2">
                        <TextBold>서울시 송파구 송파 2동 놀이터</TextBold>
                        <span>⭐⭐⭐⭐⭐</span>
                      </div>

                      <TextSm>
                        생각보다 정말 재밌었고 생각보다 정말 재밌었고 생각보다
                        정말 재밌었고 생각보다 정말 재밌었고 생각보다 정말
                        재밌었고 생각보다 정말 재밌었고
                      </TextSm>
                    </div>
                  </PlayWrapLeft>
                </PlayWrap>
              ))}
            </ItemBottom>
          </Item>
        </div>
      </div>
    </Layout>
  );
};

export default MyPage;
