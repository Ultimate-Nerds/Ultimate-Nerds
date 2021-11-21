import "./investment.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { categories } from "../../data";
// import { getCategoryDetails } from "../../redux/actions/categoryActions";
// import { addToCart } from "../../redux/actions/cartActions";
import { useLocation } from "react-router";
import { addProduct } from "../../redux/cartRedux";
import { Link } from "react-router-dom";
// import { publicRequest } from "../../requestMethod";
// import axios from "axios";

const Investment = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const [category, setCategory] = useState({});
  // const categoryDetails = useSelector((state) => state.getCategoryDetails);
  // const { loading, error, category } = categoryDetails;
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  // useEffect(() => {
  //   const getCategory = async () => {
  //     try {
  //       const res = await publicRequest.get("/categories/find/" + id);
  //       setCategory(res.data);
  //     } catch {}
  //   };
  //   getCategory();
  // }, [id]);

  // const addToCartHandler = () => {
  //   dispatch(addToCart(category._id, qty));
  //   history.push(`/cart`);
  // };

  const handleClick = () => {
    dispatch(
      addProduct({ categories, qty })
    )
  }
  return (
    <div>
      <div class="outerbox">
        <div class="container header">
          <div class="head">
            <h3>{categories[id-1].title}</h3>
          </div>
          <div class="frow">
            <div class="currentprice">
              <b>Current Price</b>
              <p>{categories[id-1].price}/-</p>
            </div>
            <div class="totalfundings">
              <b>Total Fundings</b>
              <p>789 Cr/-</p>
            </div>
            <div class="noofinvestors">
              <b>No. of Investors</b>
              <p>89456</p>
            </div>
            <div class="returntime">
              <b>Return Time</b>
              <p>1 yr</p>
            </div>
          </div>
        </div>
        <div class="container detialsofcat">
          <h5>Details</h5>
          <div class="box">
            <div class="paragraphs">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              exercitationem libero earum cum porro, reiciendis laudantium
              commodi recusandae ad animi tenetur illum nulla aperiam sapiente
              id illo impedit incidunt aliquid cumque. Nesciunt quod expedita
              delectus a illo voluptatibus. Doloribus unde ipsam voluptates
              dicta fugiat! Ratione a eos aperiam, qui totam consequuntur odio
              quos dolorum magnam accusantium. Corporis perspiciatis molestias
              totam illum cumque fugiat perferendis odit porro natus accusamus
              dolore, sapiente error pariatur in iste asperiores maiores vero
              mollitia ipsum cupiditate ipsa sint. Sapiente, sed unde
              consectetur omnis laboriosam et illum labore. Architecto
              reprehenderit velit veniam modi eveniet, enim tempore a.
            </div>
            <div class="buybuttons">
              {/* <select
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                class="qty"
                name="qty"
                id="qty"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select> */}
              <button class="buybtn"><Link className="link" to="/cart">Go to Cart</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;
