import React, { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Likes = () => {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async function () {
      let response = await fetch("http://localhost:3000/likes");
      let datas = await response.json();
      setdata(datas);
    })();
  }, []);
  console.log(data);
  return (
    <div className="like">
      <div className="like_btns">
        <FaHome onClick={() => navigate("/")} />
        <IoArrowBackCircleSharp onClick={() => navigate(-1)} />
      </div>
      <h1>
        Like <FcLike />
      </h1>
      <div className="like_item">
        {data.map((item, inx) => (
          <div key={inx} className="like_item2">
            <img src={item.img} alt="" />
            <h1>{item.fruit} </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Likes;
