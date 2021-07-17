import { connect } from "react-redux";
import { useRouter } from "next/dist/client/router";

import { IState } from "../../redux/reducers/types";
import { toggleCartDropdown } from "../../redux/reducers/cartReducer/actions";
import { selectCartTotalItems } from "../../redux/reducers/cartReducer/selectors";

interface IProps {
  totalItems: number;
  toggleCartDropdown: () => void;
}

const CartIcon = ({ totalItems, toggleCartDropdown }: IProps) => {
  const router = useRouter();

  return (
    <button
      className="_2sOwc dxAzI"
      onClick={() => {
        if (document.body.offsetWidth < 1024) router.push("/cart");
        else toggleCartDropdown();
      }}
    >
      <div className="_3BoVl">
        <p className="_2UzYT" />
        <div className="-SgCg">
          <svg width={23} height={25} viewBox="0 0 23 25" xmlns="http://www.w3.org/2000/svg" className="_2F084">
            <g transform="translate(0 1)" stroke="black" fill="none" fillRule="evenodd">
              <rect x=".5" y="3.5" width={22} height={20} rx={2} />
              <path d="M15 4c0-2.21-1.79-4-4-4S7 1.79 7 4" />
            </g>
          </svg>
          <span className="uOtGF">{totalItems}</span>
        </div>
      </div>
    </button>
  );
};

const mapStateToProps = (state: IState) => ({
  totalItems: selectCartTotalItems(state),
});

const mapDispatchToProps = {
  toggleCartDropdown: toggleCartDropdown,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
