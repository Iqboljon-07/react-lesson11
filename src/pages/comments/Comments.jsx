import React, { useEffect, useState } from "react";

const Comments = () => {
  const [data, SetData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/comments")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        SetData(response);
      });
  }, []);

  // useEffect(() => {
  //   // async function test() {                                                 //bu usullardan foydalansa bo'ladi
  //   //   let response = await fetch("http://localhost:3000/comments");
  //   //   let datas = await response.json();

  //   //   SetData(datas);
  //   // }
  //   // test();
  //   // let test = async function () {
  //   //   let response = await fetch("http://localhost:3000/comments");
  //   //   let datas = await response.json();

  //   //   SetData(datas);
  //   // };
  //   // test();
  //   // let test = async () => {
  //   //   let response = await fetch("http://localhost:3000/comments");
  //   //   let datas = await response.json();
  //   //   SetData(datas);
  //   // };
  //   // test();
  // }, []);

  // console.log(data);

  return (
    <div className="cooment">
      <table>
        <thead>
          <tr>
            <td>Komentariya bildirgan kishilar</td>
            {data?.map((item) => (
              <td key={item.id}>{item.name} </td>
            ))}
          </tr>

          <tr>
            <td>Fruit</td>
            {data?.map((item) => (
              <td key={item.id}>{item.fruit} </td>
            ))}
          </tr>
          <tr>
            <td>Komentariya</td>
            {data?.map((item) => (
              <td key={item.id}>{item.comment} </td>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Comments;
