import React, { useContext } from "react";
import MealForm from "./MealForm";
import styles from "./MealItem.module.css";
import CartContext from "../../store/cart-context";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const ctx = useContext(CartContext);

  const addCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      itemName: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.descp}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealForm id={props.id} onAddCart={addCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
