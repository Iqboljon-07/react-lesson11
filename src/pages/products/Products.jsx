import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Products = () => {
  const [data, setData] = useState(null);
  const [fruit, setFruit] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        let response = await fetch("http://localhost:3000/products");
        let datas = await response.json();
        setData(datas);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("Fetch data completed");
      }
    })();
  }, []);
  const handleDelete = async (id) => {
    try {
      let response = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setData((prev) => prev.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    if (!img.trim() || !fruit.trim() || !price.trim()) {
      alert("Jadvalni to'ldiring");
      return null;
    }
    try {
      if (edit) {
        let response = await fetch(
          `http://localhost:3000/products/${edit.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: edit.id, img, fruit, price }),
          }
        );

        if (response.ok) {
          let datas = await response.json();
          // let dav = { id: edit.id, fruit: fruit, price: price, img: img };bu ham togri keladi
          setData((prev) =>
            prev.map((item) => (item.id == edit.id ? datas : item))
          );
          setEdit(null);
        }
      } else {
        let response = await fetch("http://localhost:3000/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ img, fruit, price }),
        });

        if (response.ok) {
          let newArr = await response.json();

          setData([...data, newArr]);
        }
      }
    } catch {
      throw new Error("Error");
    }

    setFruit("");
    setPrice("");
    setImg("");
  };

  const handleEdit = (product) => {
    setEdit(product);
    setImg(product.img);
    setFruit(product.fruit);
    setPrice(product.price);
  };
  console.log(data);
  return (
    <div className="product">
      <div className="product_item1">
        <form onSubmit={handleSubmit} action="">
          <input
            value={img}
            onChange={(e) => setImg(e.target.value)}
            type="text"
            placeholder="img_url"
          />
          <input
            value={fruit}
            onChange={(e) => setFruit(e.target.value)}
            type="text"
            placeholder="fruit"
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            placeholder="price"
          />
          <button type="submit">{edit ? "Update" : "Create"} </button>
        </form>
      </div>

      <div className="product_item2">
        <div className="product_item3">
          {data?.map((product) => (
            <div key={product.id} className="product_item4">
              <img
                style={{ width: "100px", height: "100px" }}
                src={product.img}
                alt=""
              />
              <h3>{product.fruit}</h3>
              <p>{product.price}$</p>
              <div className="btns">
                <button
                  style={{ color: "red" }}
                  onClick={() => handleDelete(product.id)}
                >
                  <MdDelete />
                </button>
                <button onClick={() => handleEdit(product)}>
                  <FaEdit />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

// try {
//   const response = await fetch(`http://localhost:3000/products/${id}`, {
//     method: "DELETE",
//   });
//   if (response.ok) {
//     setData(data.filter((product) => product.id!== id));
//   }
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("Delete completed");
// }

// // try {
// //   let response = await fetch(`http://localhost:3000/products/${id}`, {
// //     method: "DELETE",
// //   });
// //   if (response.ok) {
// //     let updatedData = data.filter((product) => product.id!== id);
// //     setData(updatedData);
// //   }
// // } catch (error) {
// //   console.log(error);
// // } finally {
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
// let datas = await response.json();
/////////////////////////

// if (edit) {
//   let editTodo = { id: edit.id, img, name, price };
//   setData((prev) =>
//     prev.map((item) => (item.id == edit.id ? editTodo : item))
//   );
//   setEdit(null);
// }
