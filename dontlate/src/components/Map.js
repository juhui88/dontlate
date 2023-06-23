import React, { useEffect, useState } from "react";
const { kakao } = window;

const Map = ({ stations }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 5,
    };
    var map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <div className="w-full h-full relative">
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default Map;
