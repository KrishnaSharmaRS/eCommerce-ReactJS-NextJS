import React from "react";
import { connect } from "react-redux";

// import "./cart-dropdown.styles.css";
import { IState } from "../../redux/reducers/types";
import { selectCartDropdownHidden, selectCartTotalAmount } from "../../redux/reducers/cartReducer/selectors";
import { toggleCartDropdown } from "../../redux/reducers/cartReducer/actions";
import CustomButton from "../CustomButton";

const CartDropdown = ({ totalAmount, dropdownHidden, toggleCartDropdown }: Props) => {
  return dropdownHidden ? null : (
    <div className={`_1Fjlu _9bTZa dropdown-close`} id="cart-dropdown" style={{ height: "auto", backgroundColor: "gray" }}>
      <div>
        <div className="_2ezKP _18W8V _3AP5M">
          {/* SHOW CART ITEMS HERE */}
          <section className="_303li">
            <aside className="_1atut _37sqU">
              <p className="XPIOb">
                Enjoy complimentary standard shipping and free returns.
                <br />
                Can we help?
              </p>
              <div>
                <span className="_5SL-f">855.XXX.XXXX</span>
              </div>
              <div>
                <a href="mailto:KrishnaSharmaRS@hotmail.com" className="_2ieZl">
                  KrishnaSharmaRS@hotmail.com
                </a>
              </div>
              <div onClick={toggleCartDropdown}>
                <CustomButton title="Go to Cart" link="/cart" />
              </div>
            </aside>
            <div className="_2jVzw _1v7V4">
              <ul className="_2tIVW">
                <li className="Yr3ee">
                  <span className="_1ASpr">Subtotal</span>
                  <span className="_3Yoeq">${totalAmount}.00</span>
                </li>
                <li className="Yr3ee">
                  <span className="_1ASpr">Free Ground Shipping</span>
                  <span className="_3Yoeq">$0.00</span>
                </li>
                <li className="Yr3ee Cnxif">
                  <span className="_1ASpr">Total</span>
                  <span className="_3Yoeq">${totalAmount}.00</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

interface IStateToProps {
  totalAmount: number;
  dropdownHidden: boolean;
}

interface IDispatchToProps {
  toggleCartDropdown: typeof toggleCartDropdown;
}

type Props = IStateToProps & IDispatchToProps;

const mapStateToProps = (state: IState) => ({
  totalAmount: selectCartTotalAmount(state),
  dropdownHidden: selectCartDropdownHidden(state),
});

const mapDispatchToProps = {
  toggleCartDropdown,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
