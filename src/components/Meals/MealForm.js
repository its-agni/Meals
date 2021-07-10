import React, { useRef, useState } from "react";
import styles from "./MealForm.module.css";
import Input from "../UI/Input";

const MealForm = (props) => {
  const [amtValid, setAmtValid] = useState(true);
  const amtRef = useRef();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const inputAmount = amtRef.current.value;
    const intAmount = +inputAmount;

    if (intAmount < 1 || intAmount > 5 || inputAmount.trim().length === 0) {
      setAmtValid(false);
      return;
    }

    props.onAddCart(intAmount);
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <Input
        ref={amtRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add to Cart</button>
      {!amtValid && <p>Enter valid amount of items (1-5)</p>}
    </form>
  );
};

export default MealForm;
