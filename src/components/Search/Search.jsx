import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Search() {
  const [guns, setGuns] = useState([]);
  const [value, setValue] = useState("");

  const getGuns = () => {
    axios.get("http://localhost:8000/products").then((res) => {
      setGuns(res.data);
    });
  };

  useEffect(() => {
    getGuns();
  }, []);

  // const filteredGuns = guns.filter((gun) => {
  //   return gun.name.toLowerCase().includes(value.toLowerCase());
  // });

  return (
    <div className="form">
      <form action="">
        <input type="text" onChange={(event) => setValue(event.target.value)} />
      </form>
    </div>
  );
}
