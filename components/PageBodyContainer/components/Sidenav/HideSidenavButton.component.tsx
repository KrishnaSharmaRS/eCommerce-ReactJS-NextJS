import React from "react";
import { connect } from "react-redux";
import { hideSidenav } from "../../../../redux/reducers/sidenavReducer/actions";

interface IProps {
  hideSidenav: typeof hideSidenav;
}

const HideSidenavButton = ({ hideSidenav }: IProps) => (
  <div className="_1AE2U _1FPKg">
    <button type="button" className="_3gYxC" onClick={hideSidenav}>
      <i></i>
      <i></i>
      <i></i>
    </button>
  </div>
);

const mapDispatchToProps = {
  hideSidenav: hideSidenav,
};

export default connect(null, mapDispatchToProps)(HideSidenavButton);
