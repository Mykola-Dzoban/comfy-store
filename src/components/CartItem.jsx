import { formatPrice, generateAmountOptions } from "../utils";
import { removeItem, editItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ cartItem }) => {
  const { cartID, title, price, amount, image, company, productColor } =
    cartItem;

  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(removeItem({ cartID }));
  };

  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };

  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0">
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      <div className="sm:ml-16 sm:w-48">
        <h3 className="capitalize font-medium">{title}</h3>
        <h4 className="capitalize text-sm text-neutral-content mt-2">
          {company}
        </h4>
        <p className="mt-2 text-sm capitalize flex items-center gap-x-2">
          color:
          <span
            className="badge badge-sm"
            style={{ background: `${productColor}` }}></span>
        </p>
      </div>
      <div className="sm:ml-12">
        <div className="max-w-xs form-control">
          <label className="label p-0" htmlFor="amount">
            <span className="label-text">Amount</span>
          </label>
          <select
            className="mt-2 select select-base select-bordered select-xs"
            name="amount"
            id="amount"
            value={amount}
            onChange={handleAmount}>
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        <button className="mt-2 link link-primary link-hover text-sm" onClick={removeItemFromCart}>
          remove
        </button>
      </div>
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};
export default CartItem;
