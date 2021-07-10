import React from "react";
import mealsHead from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import CartButton from "./CartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Mealy Meals</h1>
        <CartButton onCart={props.onCartClick} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsHead} alt="meal course served in a table!" />
      </div>
    </>
  );
};

export default Header;
