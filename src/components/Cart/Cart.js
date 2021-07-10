import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const totalAmount = `$${ctx.totalAmt.toFixed(2)}`;

  const hasItems = ctx.items > 0;

  const onAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };
  const onRemoveHandler = (id) => {
    ctx.removeItem(id);
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {ctx.items.map((cart) => (
        <CartItem
          key={cart.id}
          name={cart.itemName}
          amount={cart.amount}
          price={cart.price}
          onAdd={onAddHandler.bind(null, cart)}
          onRemove={onRemoveHandler.bind(null, cart.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onCloseAction={props.onClose}>
      <div>{cartItems}</div>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Place Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
