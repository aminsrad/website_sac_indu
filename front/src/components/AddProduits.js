import React, { useState } from "react";
import { addProducts } from "../redux/actions/products";
import { useDispatch } from "react-redux";
import AdminNav from "./AdminNav";

const AddProduits = () => {
  const [image, setimage] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const dispatch = useDispatch();
  const added_product = { image, title, description };
  const add = (e) => {
    dispatch(addProducts(added_product));
    console.log({ image }, { title }, { description });
    e.preventDefault();
  };

  return (
    <div>
      <AdminNav />
      <h1>Gestion des produits</h1>
      <form action="" style={{ borderStyle: "solid" }}>
        <label htmlFor=""> image</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setimage(e.target.value)}
        />
        <br />

        <label htmlFor=""> Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <br />

        <label htmlFor=""> description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
        <br />
        <button type="submit" onClick={add}>
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddProduits;
