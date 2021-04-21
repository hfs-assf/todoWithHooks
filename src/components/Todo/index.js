import React from "react";

import Backdrop from "./Backdrop";
import Modal from "./Modal";

import useCustom from "./hooks";
import useStyle from "./style";

const Todo = (props) => {
  const { handler, state } = useCustom();
  const classes = useStyle();

  return (
    <div className={classes.card}>
      <h2>{props.text}</h2>
      <div className={classes.actions}>
        <button className={classes.btn} onClick={handler.deleteHandler}>
          Delete
        </button>
      </div>
      {state.modalIsOpen && (
        <Modal
          cancelHandler={handler.closeModalHandler}
          confirmHandler={handler.closeModalHandler}
        />
      )}
      {state.modalIsOpen && (
        <Backdrop onCancelbackdrop={handler.closeModalHandler} />
      )}
    </div>
  );
};

export default Todo;
