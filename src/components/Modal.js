import { useState } from "react";
import { AiOutlineCloseCircle, AiFillShopping } from "react-icons/ai";
import { Button } from "../App.Styled";

const Modal = ({ basket, removeItemFromBasket }) => {
  const [open, setOpen] = useState(false);
  console.log(basket);
  return (
    <>
      <div
        onClick={() => {
          setOpen(false);
        }}
        className={`overlay ${open ? "overlay--open" : ""}`}
      ></div>
      <div className={`modal ${open ? "modal--open" : ""}`}>
        <AiOutlineCloseCircle
          onClick={() => {
            setOpen(false);
          }}
          className="close-button"
        ></AiOutlineCloseCircle>

        {basket.map((item, i) => (
          <div key={i} className="modal-tile">
            <img src={item.pics} alt="cat" />
            <h3>{item.name}</h3>
            <p>£{item.price}</p>
            <Button
              onClick={() => {
                removeItemFromBasket(item);
              }}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>

      <AiFillShopping
        onClick={() => {
          setOpen(true);
        }}
        className="basket"
      ></AiFillShopping>
    </>
  );
};

export default Modal;