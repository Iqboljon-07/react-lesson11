import React, { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";

const Likes = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    (async function () {
      let response = await fetch("");
    })();
  }, []);

  return (
    <div className="like">
      <div className="like_item">
        <h1>
          Like <FcLike />{" "}
        </h1>
      </div>
    </div>
  );
};

export default Likes;
