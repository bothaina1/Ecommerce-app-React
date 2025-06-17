import React, { useEffect } from "react";
import { useState } from "react";
import StarRatings from "react-star-ratings";
import { useParams } from "react-router";
import { getProductById } from "../apis/products";
import { useDispatch } from "react-redux";
import {addQuantityToCart} from "../store/slices/cart";


 const ProductDetails = () => {
  const [product, setProduct] = useState();
  const [stock, setStock] = useState();
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  
  const dispatch = useDispatch();

  useEffect(() => {
    getProductById(params.id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [params.id]);

  useEffect(() => {
    console.log("Product Details", product);
    setStock(product?.stock);
  }, [product]);

  if (!product) {
    return <h1 className="container my-5">Loading...</h1>;
  }

  const handleQuantity =(type) =>{
    if (type === "increase" && quantity < stock) {
      setQuantity(quantity + 1)
    }
    else if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1)
    
    }
  }

  return (
    <div className="container my-5">
      <div className="row g-4">
        {/* Image Section */}
        <div className="col-md-6">
          <img
            src={product.thumbnail}
            className="img-fluid rounded"
            alt="image"
            style={{ width: "500px", height: "500px", cursor: "pointer" }}
          />
          {/* Thumbnail images */}
          <div className="d-flex mx-5 mt-3 gap-2">
            {product.images.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt="image"
                className="img-thumbnail"
                style={{ width: "80px", height: "80px", cursor: "pointer" }}
              />
            ))}
          </div>
        </div>



         {/* Product Info */}
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.description}</p>
          
            <StarRatings 
              rating={product.rating} // Current rating
              starRatedColor="green"
              starHoverColor="orange"
              numberOfStars={5}
              name="user-rating"
              starDimension="20px"
              starSpacing="1px"
            />
            {/* <small className="mx-2">({product.minimumOrderQuantity})</small> */}
          
          <hr></hr>
          <h4>${product.price} or <small>${(product.price/6).toFixed(2)}/month</small></h4>
          <p className="text-muted">
            Suggested payments with 6 months special financing
          </p>
          <hr></hr>
          <span className={`badge mb-2 ${stock>0 ? "bg-success" : "bg-danger"}`}>{stock>0 ? "In stock" : "Out of stock"}</span>

          {/* Info Buttons */}
          <div className="mb-3">
            <p>More Information</p>
            <span className=" badge bg-secondary">{product.category}</span>
            <span className="mx-2 badge bg-secondary">{product.brand}</span>
          </div>

         <hr></hr>


           {/* Quantity + Stock Info */}
          <div className="d-flex align-items-center mb-3">
            <button className="btn btn-outline-dark" onClick={() => handleQuantity('decrease')}>−</button>
            <span className="px-3">{quantity}</span>
            <button className="btn btn-outline-dark" onClick={() => handleQuantity('increase')}>＋</button>
            <span className="ms-3 text-warning">
              Only <strong>{stock} items</strong> Left! Don’t miss it
            </span>
          </div>

          {/* Action Buttons */}
          <div className="d-flex gap-2">
            
            <button className="btn btn-success px-4">Buy Now</button>
            <button className="btn btn-outline-dark px-4" onClick={()=>dispatch(addQuantityToCart({...product,quantity:quantity}))}>Add to Cart</button>
          </div>
        </div>





      </div>
    </div>
  );
};

export default ProductDetails;