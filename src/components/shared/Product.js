import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// functions
import { shorten, isInCart, quantityCount } from "../../helpers/functions";

// icons
import trashIcon from "./../../assets/icons/trash.svg";

// css
import "./../../css files/Product.css";

// actions
import {
  addItem,
  removeItem,
  increase,
  decrease,
  checkout,
  clear,
} from "./../../redux/cart/cartAction";

const Product = ({ productData }) => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  return (
    <div
      className="col-sm-12 col-md-4 col-lg-3 card"
      style={{ width: "16rem", margin: "20px 21px" }}
    >
      <img
        src={productData.image}
        className="card-img-top"
        style={{ height: "200px", marginTop: "5px" }}
      />
      <div className="card-body">
        <h3 className="card-title">{shorten(productData.title)}</h3>
        <p className="card-text">{productData.price}$</p>
        <div className="d-flex justify-content-between align-items-center">
          <Link to={`/products/${productData.id}`}>Details</Link>
          <div>
            {quantityCount(state, productData.id) === 1 && (
              <button
                className="btn btn-info btnTrash"
                style={{ marginRight: "2px" }}
                onClick={() => dispatch(removeItem(productData))}
              >
                <img
                  className="imgTrash"
                  src={trashIcon}
                  style={{ width: "25px" }}
                />
              </button>
            )}
            {quantityCount(state, productData.id) > 1 && (
              <button
                style={{ padding: "6px 14px", marginRight: "2px" }}
                className="btn btn-info"
                onClick={() => dispatch(decrease(productData))}
              >
                -
              </button>
            )}
            {quantityCount(state, productData.id) > 0 && (
              <span style={{ padding: "6px 14px" }} className="btnCounter">
                {quantityCount(state, productData.id)}
              </span>
            )}

            {isInCart(state, productData.id) ? (
              <button
                style={{ marginLeft: "2px" }}
                className="btn btn-info"
                onClick={() => dispatch(increase(productData))}
              >
                +
              </button>
            ) : (
              <button
                className="btn btn-success"
                onClick={() => dispatch(addItem(productData))}
              >
                add to card
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
