import React, { useEffect, useState } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    /* const cart = await commerce.cart.retrieve();
    setCart(cart); */
    setCart(await commerce.cart.retrieve());
  };
  /* function that going to add the product to cart with this
 id of the product and the quantity */
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    /* with setCart, we can update the cart after item add being 
    added and we use "handleAddToCart" inside the single product in the button. 
    In Order to d that we have to pass it over <Products />  by props via onAddToCart
    to reach the button inside Product.js component */
    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  console.log(cart);

  return (
    <Router>
      <div>
        {/* Function that add total items contained in the cart to be displayed inside
       the <Badge/> into the <Navbar />. the "total_items" is one of parameters of Cart 
       reached via console log  */}
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Router exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Router>
          <Router exact path="/cart">
            <Cart cart={cart} />
          </Router>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
