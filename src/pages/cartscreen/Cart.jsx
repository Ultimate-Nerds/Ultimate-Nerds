import "./CartScreen.css";
import { useSelector } from "react-redux";
import { categories } from "../../data";
import { useState } from "react";

const Cart = () => {
  const [qtyfrist, setQtyfirst] = useState()
  const [qtysecond, setQtysecond] = useState()
  const [qtythird, setQtythird] = useState()
  const handleClick = () => {
    window.alert("Request has been send about Investment!");
  };

  return (
    <div className="container">
      <div className="box1">
        <h3>Orders</h3>
        <div className="orders">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Sr No.</th>
                <th scope="col">Category</th>
                <th scope="col">Current Price</th>
                <th scope="col">Qty</th>
                <th scope="col">Total Price</th>

              </tr>
            </thead>
            <tbody>
              {/* {categories.map((c)=>( */}
                <tr>
                <th scope="row">{categories[0].id}</th>
                <td>{categories[0].title}</td>
                <td>{categories[0].price}/-</td>
                <td><select name="qty" id="qty" onChange={(e)=>setQtyfirst(e.target.value)}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  </select></td>
                <td>{qtyfrist*categories[0].price}/-</td>
              </tr>
                <tr>
                <th scope="row">{categories[1].id}</th>
                <td>{categories[1].title}</td>
                <td>{categories[1].price}/-</td>
                <td><select name="qty" id="qty" onChange={(e)=>setQtysecond(e.target.value)}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  </select></td>
                <td>{qtysecond*categories[1].price}/-</td>
              </tr>
                <tr>
                <th scope="row">{categories[2].id}</th>
                <td>{categories[2].title}</td>
                <td>{categories[2].price}/-</td>
                <td><select name="qty" id="qty" onChange={(e)=>setQtythird(e.target.value)}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  </select></td>
                <td>{qtythird*categories[2].price}/-</td>
              </tr>
                <tr>
                <td></td>
                <td></td>
                <td><b>Total Value</b></td>
                <td>{qtyfrist*categories[0].price+qtysecond*categories[1].price+qtythird*categories[2].price}/-</td>
                <td><button class="investbutton" onClick={handleClick}>Invest</button></td>
              </tr>
              {/* ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
