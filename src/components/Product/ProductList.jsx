import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Modal from "../modal/Modal";

import { fetchProducts } from "../../store/productSlice";

import { useDispatch, useSelector } from "react-redux";
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Pagination,
    Radio,
    RadioGroup,
} from "@mui/material";
import { useProduct } from "../../contexts/ProductContextProvider";

export default function ProductList() {
    const { modal } = useSelector((store) => store.products);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const count = Math.ceil(products.length / 9);
    const [page, setPage] = useState(1);
    const { fetchByParams } = useProduct();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    function currentData() {
        const begin = (page - 1) * 9;
        const end = begin + 9;
        return products.slice(begin, end);
    }

    return (
        <div>
            <div
                style={{
                    maxWidth: "800px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "0 auto",
                }}
            >
                <div>
                    <FormControl
                        style={{
                            padding: "10px 60px",
                            border: "1px solid grey",
                            borderRadius: "5px",
                        }}
                    >
                        <FormLabel
                            id="demo-radio-buttons-group-label"
                            style={{ color: "black" }}
                        >
                            Type
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="all"
                            onChange={(e) =>
                                fetchByParams("type", e.target.value)
                            }
                            name="radio-buttons-group"
                        >
                            <FormControlLabel
                                value="all"
                                control={<Radio />}
                                label="All"
                            />
                            <FormControlLabel
                                value="riffle"
                                control={<Radio />}
                                label="Riffle"
                            />
                            <FormControlLabel
                                value="gun"
                                control={<Radio />}
                                label="Gun"
                            />
                            <FormControlLabel
                                value="machineGun"
                                control={<Radio />}
                                label="Machine gun"
                            />
                            <FormControlLabel
                                value="heavy"
                                control={<Radio />}
                                label="Heavy"
                            />
                            <FormControlLabel
                                value="railgun"
                                control={<Radio />}
                                label="Railgun"
                            />
                            <FormControlLabel
                                value="sniperRiffle"
                                control={<Radio />}
                                label="Sniper"
                            />
                            <FormControlLabel
                                value="sniperRiffle"
                                control={<Radio />}
                                label="Knife"
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
            <div className="product-list">
                {products.length > 0 &&
                    currentData().map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                {modal ? <Modal /> : ""}
            </div>
            <div className="pagination">
                <Pagination
                    sx={{ margin: "0 auto" }}
                    count={count}
                    variant="outlined"
                    shape="rounded"
                    page={page}
                    onChange={(e, p) => setPage(p)}
                />
            </div>
        </div>
    );
}
