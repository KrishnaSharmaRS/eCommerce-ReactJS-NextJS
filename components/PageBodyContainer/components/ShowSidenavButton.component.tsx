import React from "react";
import { connect } from "react-redux";

import { showSidenav } from "../../../redux/reducers/sidenavReducer/actions";
import { ESidenavSection } from "../../../redux/reducers/sidenavReducer";
import BackButton from "./BackButton.component";

interface IDispatchToProps {
  showSidenav: typeof showSidenav;
}

interface IParentProps {
  section: ESidenavSection;
  back: boolean;
}

type Props = IDispatchToProps & IParentProps;

const ShowSidenavButton = ({ showSidenav, back = false, section = ESidenavSection.navigator }: Props) => (
  <div className="_1AE2U _1HouL" onClick={() => showSidenav(section)}>
    {back ? (
      <BackButton />
    ) : (
      <button type="button" className="_3gYxC">
        <i />
        <i />
        <i />
      </button>
    )}
  </div>
);

const mapDispatchToProps = {
  showSidenav,
};

export default connect(null, mapDispatchToProps)(ShowSidenavButton);
