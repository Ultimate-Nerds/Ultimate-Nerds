import React from "react";
import logo from "./logo.png";
import "./homepage.css";
import { categories } from "../../data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Homepage({}) {
  // const quantity = useSelector((state) => state.cart.qty);
  return (
    <div className="page">
      <div className="row homepage">
        <div className="col-sm-3 sidebar">
          <center>
            <div className="logo">
              {/* <img className="logofront" src={logo} alt="" /> */}
              <img src={logo} alt="" />
              <p>
                <b>Agrostocks</b>
              </p>
            </div>
          </center>
          <hr />
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              select
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <option class="dropdown-item">Fruits</option>
              <option class="dropdown-item">Vegetables</option>
              <option class="dropdown-item">Crops</option>
            </div>
          </div>

          <div class="search">
            <input type="text" class="search my-2" placeholder="search..." />
          </div>
          <br />

          <div class="container categories">
            {categories.map((c) => (
              <div class="row">
                <div class="category">{c.title}</div>
                <div class="buttons">
                  {/* <input type="button" class="buy" value="B"/> */}
                  <Link className="buttonbuy" to={`/categories/${c.id}`}>
                    <button className="buy">B</button>
                  </Link>
                  <Link className="buttonbuy" to={`/categories/${c.id}`}>
                    <button className="info">i</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div class="col-sm-9 maincontent">
          <div class="container">
            <div class="row details">
              <div class="col thumbnail fruits">
                <h2>Fruits</h2>
                <div class="data">
                  <p class="mt-4">
                    No. of Investors <br />
                    465656
                  </p>
                  <p class="mt-4">
                    Total Fundings
                    <br />
                    465656/-
                  </p>
                  <p class="mt-4">
                    Return Time
                    <br />1 Yr
                  </p>
                </div>
                <div class="detail">
                  <h5 class="lael">Details</h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                  numquam optio vel voluptatum neque architecto temporibus
                  asperiores veritatis quam similique quo ex doloremque dolores
                  ipsam aliquam velit repellat. Adipisci nostrum magni repellat
                  recusandae omnis officiis ratione dicta iure quo! Similique
                  debitis commodi nemo rem omnis saepe, accusamus animi sequi
                  voluptatibus sed eligendi in. Aspernatur ea eaque explicabo
                  magnam quasi voluptate est modi id numquam in minima, ad saepe
                  non. Numquam vel obcaecati molestias nesciunt minus
                  perferendis. Cupiditate error rerum, fugiat laboriosam ratione
                  beatae ab, ut explicabo voluptate quam similique reprehenderit
                  temporibus corrupti atque repellat pariatur delectus totam
                  deserunt obcaecati aperiam iusto quaerat animi. Mollitia
                  architecto itaque numquam exercitationem temporibus atque
                  sapiente, at sequi? Quo impedit et temporibus rerum fugit
                  voluptatibus aliquid maxime delectus aspernatur sint. Eveniet
                  ipsa dolore odit vel nobis nesciunt quas tenetur rem maxime
                  autem quis laborum, iure molestiae, necessitatibus ratione
                  suscipit. Sit beatae vel nisi odio obcaecati excepturi
                  perferendis minus, tenetur iusto ex dolores nam. Veritatis
                  ipsum laboriosam officia voluptate repellendus neque
                  reprehenderit, ratione nam maxime, fuga deleniti possimus,
                  quam dicta voluptatibus tenetur molestiae maiores incidunt
                  eius. Delectus omnis quidem natus deleniti quam! Asperiores
                  dolorum atque vel voluptates doloremque, nam quia pariatur
                  dolores iusto? Ullam, nostrum recusandae cupiditate aspernatur
                  dicta error odit nulla voluptate non eaque ex explicabo
                  pariatur sit aliquid doloribus officia beatae, suscipit
                  reiciendis quibusdam placeat. Natus temporibus fugit,
                  obcaecati nemo accusamus voluptates, sint pariatur vel dolorum
                  quia facere maxime consequuntur! Molestiae nihil repellendus
                  voluptas animi recusandae blanditiis quibusdam, quo illo quis
                  dicta aperiam reprehenderit inventore expedita fuga ullam
                  magnam quaerat! Corrupti facilis assumenda soluta laudantium
                  ex! Adipisci officiis, consequatur velit modi a accusantium
                  illum laudantium amet provident corporis totam. Cupiditate
                  animi iste nam illum excepturi reprehenderit repellendus
                  tempora, autem esse earum, dolorum quos sunt natus
                  perspiciatis ratione beatae voluptates nemo expedita optio
                  magnam accusantium quod? Nisi iste natus ipsum accusantium nam
                  ut modi porro. Ullam voluptatem beatae exercitationem,
                  officiis excepturi sit pariatur provident expedita earum porro
                  et explicabo, distinctio cum iusto harum magni itaque
                  voluptates. Nulla repellat possimus ab at facere a rerum.
                  Mollitia deleniti ducimus dicta iste similique quia magnam
                  eius numquam recusandae eligendi sed quae a itaque maiores
                  cupiditate tempore fuga, ipsam architecto pariatur esse! Unde
                  soluta earum ducimus consequatur possimus labore
                  necessitatibus, laborum sunt suscipit velit non exercitationem
                  fuga quia culpa dolore, optio eligendi dolores voluptatum
                  minus! Perspiciatis totam perferendis minus sunt eaque tempora
                  maiores inventore. Omnis aperiam consequuntur velit cum
                  voluptatem reprehenderit commodi officia. Labore fugiat eius
                  cumque sunt aperiam beatae laudantium delectus, iusto
                  provident pariatur, laboriosam ab rerum! Ipsa aut pariatur
                  rerum laudantium natus! Voluptas culpa voluptatum nisi quaerat
                  doloribus asperiores consequuntur, libero praesentium facilis
                  assumenda aut architecto beatae amet fugiat ex, doloremque
                  vitae temporibus delectus, nam perspiciatis iste! Nulla eos
                  explicabo sequi expedita laudantium repellat deserunt. Culpa
                  voluptatem tenetur reprehenderit dignissimos aliquam,
                  molestias quae voluptas facere modi explicabo eos odit ipsum
                  numquam velit recusandae repellat atque expedita. Quas cum
                  odio eos nam unde. Dolor voluptas cupiditate unde explicabo,
                  necessitatibus amet nobis consectetur recusandae corrupti
                  ullam minus cumque labore!
                </div>
              </div>
              <div class="col thumbnail vegetables">
                <h2>Vegetables</h2>
                <div class="data">
                  <p class="mt-4">
                    No. of Investors <br />
                    465656
                  </p>
                  <p class="mt-4">
                    Total Fundings
                    <br />
                    465656/-
                  </p>
                  <p class="mt-4">
                    Return Time
                    <br />1 Yr
                  </p>
                </div>
                <div class="detail">
                  <h5 class="lael">Details</h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                  numquam optio vel voluptatum neque architecto temporibus
                  asperiores veritatis quam similique quo ex doloremque dolores
                  ipsam aliquam velit repellat. Adipisci nostrum magni repellat
                  recusandae omnis officiis ratione dicta iure quo! Similique
                  debitis commodi nemo rem omnis saepe, accusamus animi sequi
                  voluptatibus sed eligendi in. Aspernatur ea eaque explicabo
                  magnam quasi voluptate est modi id numquam in minima, ad saepe
                  non. Numquam vel obcaecati molestias nesciunt minus
                  perferendis. Cupiditate error rerum, fugiat laboriosam ratione
                  beatae ab, ut explicabo voluptate quam similique reprehenderit
                  temporibus corrupti atque repellat pariatur delectus totam
                  deserunt obcaecati aperiam iusto quaerat animi. Mollitia
                  architecto itaque numquam exercitationem temporibus atque
                  sapiente, at sequi? Quo impedit et temporibus rerum fugit
                  voluptatibus aliquid maxime delectus aspernatur sint. Eveniet
                  ipsa dolore odit vel nobis nesciunt quas tenetur rem maxime
                  autem quis laborum, iure molestiae, necessitatibus ratione
                  suscipit. Sit beatae vel nisi odio obcaecati excepturi
                  perferendis minus, tenetur iusto ex dolores nam. Veritatis
                  ipsum laboriosam officia voluptate repellendus neque
                  reprehenderit, ratione nam maxime, fuga deleniti possimus,
                  quam dicta voluptatibus tenetur molestiae maiores incidunt
                  eius. Delectus omnis quidem natus deleniti quam! Asperiores
                  dolorum atque vel voluptates doloremque, nam quia pariatur
                  dolores iusto? Ullam, nostrum recusandae cupiditate aspernatur
                  dicta error odit nulla voluptate non eaque ex explicabo
                  pariatur sit aliquid doloribus officia beatae, suscipit
                  reiciendis quibusdam placeat. Natus temporibus fugit,
                  obcaecati nemo accusamus voluptates, sint pariatur vel dolorum
                  quia facere maxime consequuntur! Molestiae nihil repellendus
                  voluptas animi recusandae blanditiis quibusdam, quo illo quis
                  dicta aperiam reprehenderit inventore expedita fuga ullam
                  magnam quaerat! Corrupti facilis assumenda soluta laudantium
                  ex! Adipisci officiis, consequatur velit modi a accusantium
                  illum laudantium amet provident corporis totam. Cupiditate
                  animi iste nam illum excepturi reprehenderit repellendus
                  tempora, autem esse earum, dolorum quos sunt natus
                  perspiciatis ratione beatae voluptates nemo expedita optio
                  magnam accusantium quod? Nisi iste natus ipsum accusantium nam
                  ut modi porro. Ullam voluptatem beatae exercitationem,
                  officiis excepturi sit pariatur provident expedita earum porro
                  et explicabo, distinctio cum iusto harum magni itaque
                  voluptates. Nulla repellat possimus ab at facere a rerum.
                  Mollitia deleniti ducimus dicta iste similique quia magnam
                  eius numquam recusandae eligendi sed quae a itaque maiores
                  cupiditate tempore fuga, ipsam architecto pariatur esse! Unde
                  soluta earum ducimus consequatur possimus labore
                  necessitatibus, laborum sunt suscipit velit non exercitationem
                  fuga quia culpa dolore, optio eligendi dolores voluptatum
                  minus! Perspiciatis totam perferendis minus sunt eaque tempora
                  maiores inventore. Omnis aperiam consequuntur velit cum
                  voluptatem reprehenderit commodi officia. Labore fugiat eius
                  cumque sunt aperiam beatae laudantium delectus, iusto
                  provident pariatur, laboriosam ab rerum! Ipsa aut pariatur
                  rerum laudantium natus! Voluptas culpa voluptatum nisi quaerat
                  doloribus asperiores consequuntur, libero praesentium facilis
                  assumenda aut architecto beatae amet fugiat ex, doloremque
                  vitae temporibus delectus, nam perspiciatis iste! Nulla eos
                  explicabo sequi expedita laudantium repellat deserunt. Culpa
                  voluptatem tenetur reprehenderit dignissimos aliquam,
                  molestias quae voluptas facere modi explicabo eos odit ipsum
                  numquam velit recusandae repellat atque expedita. Quas cum
                  odio eos nam unde. Dolor voluptas cupiditate unde explicabo,
                  necessitatibus amet nobis consectetur recusandae corrupti
                  ullam minus cumque labore!
                </div>
              </div>
              <div class="col thumbnail crops">
                <h2>Crops</h2>
                <div class="data">
                  <p class="mt-4">
                    No. of Investors <br />
                    465656
                  </p>
                  <p class="mt-4">
                    Total Fundings
                    <br />
                    465656/-
                  </p>
                  <p class="mt-4">
                    Return Time
                    <br />1 Yr
                  </p>
                </div>
                <div class="detail">
                  <h5 class="lael">Details</h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                  numquam optio vel voluptatum neque architecto temporibus
                  asperiores veritatis quam similique quo ex doloremque dolores
                  ipsam aliquam velit repellat. Adipisci nostrum magni repellat
                  recusandae omnis officiis ratione dicta iure quo! Similique
                  debitis commodi nemo rem omnis saepe, accusamus animi sequi
                  voluptatibus sed eligendi in. Aspernatur ea eaque explicabo
                  magnam quasi voluptate est modi id numquam in minima, ad saepe
                  non. Numquam vel obcaecati molestias nesciunt minus
                  perferendis. Cupiditate error rerum, fugiat laboriosam ratione
                  beatae ab, ut explicabo voluptate quam similique reprehenderit
                  temporibus corrupti atque repellat pariatur delectus totam
                  deserunt obcaecati aperiam iusto quaerat animi. Mollitia
                  architecto itaque numquam exercitationem temporibus atque
                  sapiente, at sequi? Quo impedit et temporibus rerum fugit
                  voluptatibus aliquid maxime delectus aspernatur sint. Eveniet
                  ipsa dolore odit vel nobis nesciunt quas tenetur rem maxime
                  autem quis laborum, iure molestiae, necessitatibus ratione
                  suscipit. Sit beatae vel nisi odio obcaecati excepturi
                  perferendis minus, tenetur iusto ex dolores nam. Veritatis
                  ipsum laboriosam officia voluptate repellendus neque
                  reprehenderit, ratione nam maxime, fuga deleniti possimus,
                  quam dicta voluptatibus tenetur molestiae maiores incidunt
                  eius. Delectus omnis quidem natus deleniti quam! Asperiores
                  dolorum atque vel voluptates doloremque, nam quia pariatur
                  dolores iusto? Ullam, nostrum recusandae cupiditate aspernatur
                  dicta error odit nulla voluptate non eaque ex explicabo
                  pariatur sit aliquid doloribus officia beatae, suscipit
                  reiciendis quibusdam placeat. Natus temporibus fugit,
                  obcaecati nemo accusamus voluptates, sint pariatur vel dolorum
                  quia facere maxime consequuntur! Molestiae nihil repellendus
                  voluptas animi recusandae blanditiis quibusdam, quo illo quis
                  dicta aperiam reprehenderit inventore expedita fuga ullam
                  magnam quaerat! Corrupti facilis assumenda soluta laudantium
                  ex! Adipisci officiis, consequatur velit modi a accusantium
                  illum laudantium amet provident corporis totam. Cupiditate
                  animi iste nam illum excepturi reprehenderit repellendus
                  tempora, autem esse earum, dolorum quos sunt natus
                  perspiciatis ratione beatae voluptates nemo expedita optio
                  magnam accusantium quod? Nisi iste natus ipsum accusantium nam
                  ut modi porro. Ullam voluptatem beatae exercitationem,
                  officiis excepturi sit pariatur provident expedita earum porro
                  et explicabo, distinctio cum iusto harum magni itaque
                  voluptates. Nulla repellat possimus ab at facere a rerum.
                  Mollitia deleniti ducimus dicta iste similique quia magnam
                  eius numquam recusandae eligendi sed quae a itaque maiores
                  cupiditate tempore fuga, ipsam architecto pariatur esse! Unde
                  soluta earum ducimus consequatur possimus labore
                  necessitatibus, laborum sunt suscipit velit non exercitationem
                  fuga quia culpa dolore, optio eligendi dolores voluptatum
                  minus! Perspiciatis totam perferendis minus sunt eaque tempora
                  maiores inventore. Omnis aperiam consequuntur velit cum
                  voluptatem reprehenderit commodi officia. Labore fugiat eius
                  cumque sunt aperiam beatae laudantium delectus, iusto
                  provident pariatur, laboriosam ab rerum! Ipsa aut pariatur
                  rerum laudantium natus! Voluptas culpa voluptatum nisi quaerat
                  doloribus asperiores consequuntur, libero praesentium facilis
                  assumenda aut architecto beatae amet fugiat ex, doloremque
                  vitae temporibus delectus, nam perspiciatis iste! Nulla eos
                  explicabo sequi expedita laudantium repellat deserunt. Culpa
                  voluptatem tenetur reprehenderit dignissimos aliquam,
                  molestias quae voluptas facere modi explicabo eos odit ipsum
                  numquam velit recusandae repellat atque expedita. Quas cum
                  odio eos nam unde. Dolor voluptas cupiditate unde explicabo,
                  necessitatibus amet nobis consectetur recusandae corrupti
                  ullam minus cumque labore!
                </div>
              </div>
            </div>
          </div>

          <div class="row bottom">
            <div class="col leftcolumn">
              <div class="label">Invested Value</div>
              <div class="investedvalue">6486/-</div>
            </div>
            <div class="col">
              <div class="label">
                Orders 
                {/* <b>{quantity}</b> */}
              </div>
              <div class="investeddetails">
                <Link to="/cart">See</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
