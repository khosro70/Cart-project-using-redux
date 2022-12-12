import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


// component
import Cart from "./../components/shared/Cart";

// action
import { clear, checkout } from "./../redux/cart/cartAction";

const ShopCart = () => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  return (
    <div className="row" style={{ minHeight: "100vh" }}>
      <div className="col-sm-12 col-lg-9">
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      {state.itemsCounter > 0 && (
        <div
          className="col-sm-12 col-lg-3 py-2 border border-success border-opacity-50 d-flex flex-column justify-content-center"
          style={{
            maxHeight: "235px",
            paddingLeft: "30px",
            paddingRight: "30px",
          }}
        >
          <p>
            <span>Total items: {state.itemsCounter}</span>
          </p>
          <p>
            <span>Total Payments: {state.total} $</span>
          </p>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-success mb-lg-1 mb-xl-0"
              onClick={() => dispatch(checkout())}
            >
              check out
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => dispatch(clear())}
            >
              Clear
            </button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div className="col-sm-12 col-lg-3 text-center">
          <h3 className="mb-4">Checked out successfully !</h3>
          <Link className="btn btn-success" to="/products">
            Buy More
          </Link>
        </div>
      )}
      {!state.checkout && state.itemsCounter === 0 && (
        <div style={{ height: "100vh" }} className="col-sm-12 col-lg-3">
          <h3 className="mb-4">Want to buy?</h3>
          <Link to="/products">
            <span className="btn btn-primary">Go back to shop</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
