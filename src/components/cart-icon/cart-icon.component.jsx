import {
  CartIconContainer,
  ShoppingIconComponent,
  ItemCount,
} from "./cart-icon.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import React from "react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconComponent />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
