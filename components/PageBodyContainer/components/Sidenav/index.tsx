import React from "react";
import { connect } from "react-redux";

import CloseSidenavButton from "../CloseSidenavButton.component";
import NavigatorSection from "./NavigatorSection.component";
import SearchSection from "./SearchSection.component";
import HideSidenavButton from "./HideSidenavButton.component";
import { IState } from "../../../../redux/reducers/types";
import { selectSidenavHidden, selectSidenavSection } from "../../../../redux/reducers/sidenavReducer/selectors";
import { ESidenavSection } from "../../../../redux/reducers/sidenavReducer";

interface IStateToProps {
  section: ESidenavSection;
  hidden: boolean;
}

const SidenavSection = ({ section }: { section: ESidenavSection }) => {
  switch (section) {
    case ESidenavSection.navigator:
      return <NavigatorSection />;
    case ESidenavSection.search:
      return <SearchSection />;
    default:
      return <NavigatorSection />;
  }
};

type Props = IStateToProps;

const Sidenav = ({ section, hidden }: Props) =>
  hidden ? null : (
    <section className="_1AmTj _1km0o">
      <div className="_3gCK4" style={{ color: "inherit" }}>
        <div className="_233xR" />
        <div className="I7Tum">
          <div className="I7Tum menu-entered">
            <div className={section === ESidenavSection.navigator ? "_1My8p _2cU6z" : "_2XjFc"}>
              {section === ESidenavSection.navigator ? (
                <header className="_1Y6Bz _1ZQcX _38orv">
                  <div className="_3Kr4_">
                    <svg width={20} height={17} viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg" className="_1MNh5">
                      <g stroke="#7390CA" fill="none" fillRule="evenodd" strokeLinecap="square">
                        <path d="M.606 8.5l7.66 7.66" />
                        <path d="M8.266.84L.606 8.5" />
                        <path d="M.559 8.5H18.58" />
                      </g>
                    </svg>
                    <div className="_37-xn _27wbY">
                      <button type="button" className="_2l_wH">
                        <span className="PPoOK">
                          <svg width={22} height={22} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                            <g transform="rotate(45 8.172 10.5)" stroke="#7390CA" fill="none" fillRule="evenodd">
                              <circle cx="8.5" cy="8.5" r="8.5" />
                              <path d="M25.34 9.5h-7.86" strokeLinecap="square" />
                            </g>
                          </svg>
                        </span>
                      </button>
                    </div>
                    <HideSidenavButton />
                  </div>
                </header>
              ) : (
                <header className="_2B3pJ _1t6FE">
                  <div className="_3boam">
                    <div className="_37-xn LXfTE">
                      <button type="button" className="_2l_wH">
                        <span className="PPoOK">
                          <svg width={22} height={22} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                            <g transform="rotate(45 8.172 10.5)" stroke="#7390CA" fill="none" fillRule="evenodd">
                              <circle cx="8.5" cy="8.5" r="8.5" />
                              <path d="M25.34 9.5h-7.86" strokeLinecap="square" />
                            </g>
                          </svg>
                        </span>
                      </button>
                    </div>
                    <ul className="Wetic">
                      <li className="Bpa7x">Shop</li>
                    </ul>
                  </div>
                  <CloseSidenavButton />
                </header>
              )}
              <SidenavSection section={section} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

const mapStateToProps = (state: IState): IStateToProps => ({
  section: selectSidenavSection(state),
  hidden: selectSidenavHidden(state),
});

export default connect(mapStateToProps)(Sidenav);
