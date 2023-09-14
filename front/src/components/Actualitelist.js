import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActualites } from "../redux/actions/actualites";
import { Navbar } from "./Navbar";
import ActualiteCard from "./ActualiteCard";

const Actualitelist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActualites());
    /* eslint-disable-next-line */
  }, []);
  const actualits = useSelector((state) => state.actualites.actualites);

  return (
    <div>
      <Navbar />
      {actualits && actualits.map((el) => <ActualiteCard {...el} />)}
    </div>
  );
};

export default Actualitelist;
