import React, { useEffect, useState } from "react";
import Bar, { Layout } from "../components/Bar";
import axios from "axios";
import { Link } from "react-router-dom";

const directs = [
  "경기광주행",
  "캠퍼스간",
  "이문, 망우, 남양주 노선",
  "이문, 돌곶이 노선",
  "노원, 구리 노선",
  "이문, 구리 노선",
  "광화문노선",
  "신길 노선",
  "삼성 수서 노선",
  "강남역 노선",
  "잠실, 천호, 하남 노선",
  "일산 노선",
  "부평 노선",
  "범계 노선",
  "안산 노선",
  "수원 노선",
  "수지 노선",
  "신갈 노선",
];

const Home = () => {
  const [data, setData] = useState();
  const [id, setId] = useState(0);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}map`)
      .then((res) => {
        console.log(res);
        setData(res.data.maps);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Layout>
      <Bar />
      <div className="my-10">
        {directs.map((direct, i) => (
          <Link to={`/detail/${i + 1}/notice`}>
            <div className="flex items-center px-10 py-5 border-b space-x-5 cursor-pointer">
              <img src="img/marker.png" className="h-10" />
              <div className="flex flex-col justify-center space-y-2">
                <span className="font-bold text-lg text-textColor">
                  {direct}
                </span>
                <div className="text-textAssisColor">
                  <span>정류장 : </span>
                  <span className="space-x-5">
                    {data?.map((d) =>
                      direct === d.direct ? <span>{d.title}</span> : null
                    )}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
