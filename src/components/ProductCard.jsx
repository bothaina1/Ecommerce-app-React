import { Link } from "react-router-dom";
import StarRatings from 'react-star-ratings';
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cart";
import { useNavigate } from "react-router-dom";

export const ProductCard = (props) => {
  const { data } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const viewDetails = () => {
    navigate(`/product-details/${data.id}`);
  };

  return (
    <div className="card h-100">
      <img src={data.images[0]} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="d-flex justify-content-between">
        <Link className="link-dark" to={`/product-details/${data.id}`}>
          <h5 className="card-title">{data.title}</h5>
        </Link>
        <h4>{data.price}$ </h4>
        </div>

        <StarRatings 
          rating={data.rating} // Current rating
          starRatedColor="gold"
          starHoverColor="orange"
          numberOfStars={5}
          name="user-rating"
          starDimension="25px"
          starSpacing="1px"
        />
        <p className="card-text">{data.description}</p>
      </div>

      <div className="mb-3 d-flex justify-content-center">
        <button className="btn btn-outline-dark mx-4 px-3 rounded-5"onClick={viewDetails}>
          View Details
        </button>
        <button className="btn btn-outline-dark px-3  rounded-5"onClick={()=>dispatch(addToCart(data))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
