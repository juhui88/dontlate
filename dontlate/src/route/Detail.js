import React, { useEffect, useRef, useState } from "react";
import Bar, { Layout } from "../components/Bar";
import img from "../playgroundImg/playground1.jpg";
import tw from "tailwind-styled-components";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Notice from "../components/detailComponents/Notice";
import Chat from "../components/detailComponents/Chat";
import { cls } from "../lib/utils";
import axios from "axios";
import Map from "../components/Map";
import { useRecoilState } from "recoil";
import { changeState } from "../components/atom";
const { kakao } = window;

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
  const match = location.pathname.split("/");
  const [stations, setStations] = useState();
  const [positions, setPositions] = useState();
  const [change, setChange] = useRecoilState(changeState);
  const mapRef = useRef();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}map/direct/${match[2]}`)
      .then((res) => {
        console.log(res);
        setStations(res.data.direct_id);
        var options = {
          center: new kakao.maps.LatLng(
            res.data.direct_id[0].lat,
            res.data.direct_id[0].long
          ),
          level: 7,
        };
        var map = new kakao.maps.Map(mapRef.current, options);

        var imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

        for (var i = 0; i < res.data.direct_id.length; i++) {
          var imageSize = new kakao.maps.Size(24, 35);
          var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
          var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: new kakao.maps.LatLng(
              res.data.direct_id[i].lat,
              res.data.direct_id[i].long
            ), // 마커를 표시할 위치
            title: res.data.direct_id[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage, // 마커 이미지
          });
          marker.setMap(map);
        }
      })
      .catch((err) => console.log(err));
  }, [change, setChange]);

  return (
    <Layout>
      <Bar />
      <div className="text-textColor shadow-lg">
        <div className=" h-80">
          <div className="w-full h-full relative">
            <div ref={mapRef} style={{ width: "100%", height: "100%" }}></div>
          </div>
        </div>
        <div className="px-5 md:px-44 bg-bgColor w-full pt-2 pb-5">
          <div className="flex justify-between">
            <span className="text-xl font-bold ">
              {stations ? stations[0].direct : null}
            </span>
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
            <div>
              {stations?.map((station) => (
                <div className="flex justify-between space-x-5">
                  <span>{station.title}</span>
                  <span>{station.stop_time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="px-44 bg-white rounded-t-lg flex justify-between ">
          <Link to="notice" className="w-full h-full ">
            <Item
              className={cls(match[3] === "notice" ? "text-mainColor" : "")}
            >
              공지
            </Item>
          </Link>
          <Link to="chat" className="w-full h-full">
            <Item
              className={cls(
                "border-r",
                match[3] === "chat" ? "text-mainColor" : ""
              )}
            >
              채팅
            </Item>
          </Link>
        </div>
      </div>
      <Routes>
        <Route
          path="/notice"
          element={<Notice postId={stations ? stations[0].id : null} />}
        />
        <Route
          path="/chat"
          element={<Chat postId={stations ? stations[1].id : null} />}
        />
      </Routes>
    </Layout>
  );
};

export default Detail;
