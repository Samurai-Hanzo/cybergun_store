import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductAsync, fetchProducts } from "../../store/productSlice";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function AddProduct() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");
    const [descr, setDescr] = useState("");

    const { status, error } = useSelector((store) => store.products);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    const handleClick = () => {
        dispatch(
            addProductAsync({
                type,
                image,
                descr,
                title,
                price,
            })
        );
        dispatch(fetchProducts());

        setTitle("");
        setType("");
        setDescr("");
        setImage("");
        setPrice("");
    };

    {
        status === "loading" && <h2>loading...</h2>;
    }
    {
        error && (
            <h2>
                {" "}
                чел у тя ошибка из за {"=>"}
                {error}
            </h2>
        );
    }
    return (
        <div className="add-product">
            <h1 className="auth-titile">ADD PRODUCT</h1>
            <TextField
                sx={{
                    margin: "15px",
                    maxWidth: "510px",
                    width: "100%",
                    height: "35px",
                    borderRadius: "2px",
                    borderColor: "black",
                }}
                id="outlined-basic"
                label="Name"
                size="small"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
                sx={{
                    margin: "15px",
                    maxWidth: "510px",
                    width: "100%",
                    height: "35px",
                    borderRadius: "2px",
                    borderColor: "black",
                }}
                id="outlined-basic"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                label="Price"
                size="small"
                variant="outlined"
            />
            <TextField
                sx={{
                    margin: "15px",
                    maxWidth: "510px",
                    width: "100%",
                    height: "35px",
                    borderRadius: "2px",
                    borderColor: "black",
                }}
                id="outlined-basic"
                onChange={(e) => setImage(e.target.value)}
                value={image}
                label="Image"
                size="small"
                variant="outlined"
            />
            <TextField
                sx={{
                    margin: "15px",
                    maxWidth: "510px",
                    width: "100%",
                    height: "35px",
                    borderRadius: "2px",
                    borderColor: "black",
                }}
                id="outlined-basic"
                onChange={(e) => setType(e.target.value)}
                value={type}
                label="Type"
                size="small"
                variant="outlined"
            />
            <TextField
                sx={{
                    margin: "15px",
                    maxWidth: "510px",
                    width: "100%",
                    height: "35px",
                    borderRadius: "2px",
                    borderColor: "black",
                }}
                id="outlined-basic"
                onChange={(e) => setDescr(e.target.value)}
                value={descr}
                label="Description"
                size="small"
                variant="outlined"
            />
            <Button
                sx={{
                    "&:hover": {
                        backgroundColor: "rgb(158, 158, 158)",
                    },
                    margin: "15px",
                    backgroundColor: "black",
                    maxWidth: "340px",
                    width: "100%",
                    justifyContent: "center",
                    height: "45px",
                    borderRadius: "2px",
                    fontSize: "16px",
                    marginTop: "40px",
                }}
                variant="contained"
                onClick={handleClick}
            >
                Add Product
            </Button>
        </div>
    );
}
