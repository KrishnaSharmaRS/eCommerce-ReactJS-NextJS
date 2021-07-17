import React from "react";
import { connect } from "react-redux";

import { hideSidenav } from "../../../redux/reducers/sidenavReducer/actions";

interface IProps {
  hideSidenav: typeof hideSidenav;
}

const CloseSidenavButton = ({ hideSidenav }: IProps) => (
  <svg width={20} height={21} viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg" className="_2HHN_" onClick={hideSidenav}>
    <g stroke="#7390CA" fill="none" fillRule="evenodd" strokeLinecap="square">
      <path d="M19.5 19.545L.517.455" />
      <path d="M.018 20L20 1" />
    </g>
  </svg>
);

const mapDispatchToProps = {
  hideSidenav: hideSidenav,
};

export default connect(null, mapDispatchToProps)(CloseSidenavButton);
