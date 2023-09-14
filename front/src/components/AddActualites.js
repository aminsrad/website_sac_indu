import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addActualites } from "../redux/actions/actualites";
import AdminNav from "./AdminNav";

const AddActualites = () => {
  const [image, setimage] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const dispatch = useDispatch();
  const added_actualite = { image, title, description };
  const add = (e) => {
    e.preventDefault();
    dispatch(addActualites(added_actualite));
  };
  return (
    <div>
      <AdminNav />
      <h1>Gestion des actualites</h1>
      <form action="/" method="post" enctype="multipart/form-data">
        <label htmlFor=""> image</label>
        <input
          type="file"
          name="image"
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

export default AddActualites;
