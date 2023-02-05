import Modal from "../modal/Modal";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchProducts,
    getOneProductAsync,
    removeProduct,
    showModal,
} from "../../store/productSlice";

export default function ProductItem({ product }) {
    //   const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const { modal } = useSelector((store) => store.products);

    const handleClick = () => {
        dispatch(getOneProductAsync(product.id));
        dispatch(showModal(!modal));
        dispatch(fetchProducts());
    };

    return (
        <div className="product-list-section">
            {/* {showModal ? <Modal setShowModal={setShowModal} /> : null} */}
            <div className="product-card">
                <img className="card-image" src={product.image} alt="#" />
                <div className="effect">
                    <i
                        className="fa-solid fa-pen icons"
                        onClick={
                            () => handleClick(product.id)
                            //   () => setShowModal(true)
                        }
                    ></i>
                    <i
                        className="fa-solid fa-trash icons"
                        onClick={() => dispatch(removeProduct(product.id))} //! если че исправить
                    ></i>
                </div>
                <div className="info">
                    <span className="card-name">{product.title}</span>
                    <span className="card-descr">{product.descr}</span>
                    <span className="card-price">{product.price}</span>
                    <span className="card-type">{product.type}</span>
                </div>
            </div>
        </div>
    );
}
