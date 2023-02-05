import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    editProductAsync,
    fetchProducts,
    showModal,
} from "../../store/productSlice";

export default function Modal() {
    const [prodEdit, setProdEdit] = useState({});

    const { oneProduct } = useSelector((store) => store.products);
    const { modal } = useSelector((store) => store.products);
    const dispatch = useDispatch();

    useEffect(() => {
        setProdEdit(oneProduct);
    }, [oneProduct]);

    const handleChange = (e) => {
        let obj = {
            ...prodEdit,
            [e.target.name]: e.target.value,
        };
        console.log(prodEdit, 1);
        setProdEdit(obj);
        console.log(prodEdit, 2);

        console.log(obj, 3);
    };

    const handleClick = async () => {
        dispatch(showModal(!modal));
        await dispatch(editProductAsync(prodEdit));
        await dispatch(fetchProducts());
    };

    return (
        <div className="modal">
            <div className="edit-product">
                <h1 className="edit-title">CHANGE PRODUCT</h1>

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
                    size="small"
                    value={prodEdit.title}
                    onChange={(e) => handleChange(e)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                name
                            </InputAdornment>
                        ),
                    }}
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
                    onChange={(e) => handleChange(e)}
                    value={prodEdit.price}
                    size="small"
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                price
                            </InputAdornment>
                        ),
                    }}
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
                    onChange={(e) => handleChange(e)}
                    value={prodEdit.image}
                    size="small"
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                image
                            </InputAdornment>
                        ),
                    }}
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
                    onChange={(e) => handleChange(e)}
                    value={prodEdit.type}
                    size="small"
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                type
                            </InputAdornment>
                        ),
                    }}
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
                    onChange={(e) => handleChange(e)}
                    value={prodEdit.descr}
                    size="small"
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                description
                            </InputAdornment>
                        ),
                    }}
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
                    onClick={() => handleClick(prodEdit)}
                >
                    Save Edit
                </Button>
            </div>
        </div>
    );
}
