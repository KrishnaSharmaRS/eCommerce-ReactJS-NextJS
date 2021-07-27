import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { IState } from "../../../redux/reducers/types";
import { IUserState } from "../../../redux/reducers/userReducer/types";
import { ESidenavSection } from "../../../redux/reducers/sidenavReducer";
import { selectUser } from "../../../redux/reducers/userReducer/selectors";
import { showSidenav } from "../../../redux/reducers/sidenavReducer/actions";

import LinkCustom from "../../../components/LinkCustom";
import NextJsLogo from "../../../components/NextJsLogo";
import ReactJsLogo from "../../../components/ReactJsLogo";
import SearchButton from "../../SearchButton";
import CartIcon from "../../CartIcon";

interface IStateToProps {
  user: IUserState;
}

interface IDispatchToProps {
  showSidenav: typeof showSidenav;
}

interface IParentProps {
  scrolled: boolean;
  back?: boolean;
}

type IProps = IStateToProps & IDispatchToProps & IParentProps;

const Navbar = ({ scrolled, showSidenav, back = false }: IProps) => {
  const [wide, setWide] = useState(false);

  useEffect(() => {
    setWide(document.body.offsetWidth > 1023);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = document.body.offsetWidth;

      if (width > 1023 && !wide) {
        setWide(true);
      } else if (width < 1024 && wide) {
        setWide(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [wide]);

  return (
    <div className="_261kN">
      <div className="_13V14" />
      <div className={`_2TyZc _1boKx`} style={{ backgroundColor: "white" }}>
        <div className="_2ezKP _3hmyN">
          <div className="_2Ifsz _1Oy0N">
            <SearchButton />
            <ul className="Wetic">
              <LinkCustom to="/products">
                <li className="Bpa7x _1MEV3">Shop</li>
              </LinkCustom>
              {/* {!currentUser && (
                    <LinkCustom to="/sign-in">
                        <li className="Bpa7x _1MEV3">
                            Sign in
                        </li>
                    </LinkCustom>
                )} */}
            </ul>
          </div>
          <LinkCustom className="_2hYip kmMNG _1qwNv" to="/" style={{ top: `${scrolled ? "2px" : "22px"}`, width: 250 }}>
            {scrolled && (
              <div style={{ textAlign: "center" }}>
                <NextJsLogo />
              </div>
            )}
            {!scrolled && (
              <div className="px-auto" style={{ textAlign: "center" }}>
                <ReactJsLogo />
              </div>
            )}
          </LinkCustom>
          <div className="_2Ifsz _16fEE">
            <span className="_1FEMw _1pjJu _2zsvO _1c3Vc _2ZSVP _3I2Tv">
              <span className="CPL8O">
                <span className="_2DBxJ">BUY</span>
              </span>
            </span>
            {wide ? (
              <span className="_2reTt _26R4L">Store</span>
            ) : (
              <div className="_1AE2U _1HouL" onClick={() => showSidenav(ESidenavSection.navigator)}>
                {back ? (
                  <button type="button" className="Oshap">
                    <svg width={20} height={17} viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg">
                      <g stroke="black" fill="none" fillRule="evenodd" strokeLinecap="square">
                        <path d="M.606 8.5l7.66 7.66" />
                        <path d="M8.266.84L.606 8.5" />
                        <path d="M.559 8.5H18.58" />
                      </g>
                    </svg>
                  </button>
                ) : (
                  <button type="button" className="_3gYxC">
                    <i />
                    <i />
                    <i />
                  </button>
                )}
              </div>
            )}
            <LinkCustom className="_2Kllo" to="/account">
              <svg width={23} height={26} viewBox="0 0 23 26" xmlns="http://www.w3.org/2000/svg" className="-n_iK">
                <g transform="translate(1.043 1)" stroke="black" fill="none" fillRule="evenodd">
                  <path d="M21.02 18.3c.136-.707-2.657-6.822-10.423-6.822-7.765 0-10.624 5.712-10.565 6.82-.017 3.53-.017 5.294 0 5.294H21.02V18.3z" />
                  <circle cx="10.435" cy="4.174" r="4.174" />
                </g>
              </svg>
            </LinkCustom>
            <CartIcon />
          </div>
        </div>
      </div>
      <div className="_14Y8O" />
    </div>
  );
};

interface ISelection {
  user: IUserState;
}

const mapStateToProps = createStructuredSelector<IState, ISelection>({
  user: selectUser,
});

const mapDispatchToProps = {
  showSidenav,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
