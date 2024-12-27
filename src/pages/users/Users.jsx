import React, { useEffect, useState } from "react";

const Users = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch("http://localhost:3000/users");
        const datas = await response.json();
        console.log(datas);
        setData(datas);
      } catch (err) {
        console.log(err);
      } finally {
        console.log("Data fetched");
      }
    })();
  }, []);
  console.log(data);
  return (
    <div className="user">
      <div className="user_data">
        {data?.map((user) => (
          <div key={user.id} className="user_item">
            <img src={user.image} alt="" />
            <h1>{user.name} </h1>
            <p>{user.address} </p>
            <p>{user.age} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
