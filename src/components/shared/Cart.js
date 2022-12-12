import React from "react";
import { useSelector, useDispatch } from "react-redux";

// function
import { shorten } from "./../../helpers/functions";

// icons
import trashIcon from "./../../assets/icons/trash.svg";

// css
import "./../../css files/Card.css";

// actions
import { removeItem, increase, decrease } from "./../../redux/cart/cartAction";

const Cart = (props) => {
  const { image, title, price, quantity } = props.data;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.carsState);

  return (
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-between align-items-center px-5 border border-success border-opacity-50 mb-2 row py-2 text-center me-2">
      <img className="col-12 col-md-3" src={image} style={{ width: "120px" }} />
      <div className="col-12 col-md-3">
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <div className="col-12 col-md-3 mb-2 mb-md-0">
        <span className="btn btn-warning">{quantity}</span>
      </div>
      <div className="col-12 col-md-3">
        {quantity > 1 ? (
          <button
            className="btn btn-info"
            style={{ padding: "6px 14px" }}
            onClick={() => dispatch(decrease(props.data))}
          >
            -
          </button>
        ) : (
          <button
            className="btn btn-info btnTrash"
            onClick={() => dispatch(removeItem(props.data))}
          >
            <img
              src={trashIcon}
              className="imgTrash"
              style={{ width: "25px" }}
            />
          </button>
        )}
        <button
          className="btn btn-info"
          style={{ marginLeft: "2px" }}
          onClick={() => dispatch(increase(props.data))}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Cart;
