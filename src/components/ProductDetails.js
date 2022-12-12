import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

// css
import "./../css files/ProductDetails.css";

const ProductDetails = (props) => {
  const params = useParams();
  const id = params.id;
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const { title, price, description, category, image } = data;

  return (
    <div className="d-flex justify-content-between align-items-center main-div p-3 border border-secondary">
      <img src={image} className="col-4" />
      <div className="border border-secondary p-4">
        <h3 className="mb-4">{title}</h3>
        <p>{description}</p>
        <p className="fw-bold">
          <span className="text-warning">category: </span>
          {category}
        </p>
        <div className="d-flex justify-content-between">
          <span className="btn btn-success">{price} $</span>
          <Link className="btn btn-primary me-3" to="/products">
            Back to shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
