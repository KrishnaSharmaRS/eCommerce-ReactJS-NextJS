import React from "react";
import { connect } from "react-redux";

import { showSidenav } from "../../redux/reducers/sidenavReducer/actions";
import { ESidenavSection } from "../../redux/reducers/sidenavReducer";
import SearchIcon from "../SearchIcon";

const SearchButton = ({ showSidenav }: IStateToProps) => (
    <div className="_37-xn _2Puhw" onClick={() => showSidenav(ESidenavSection.search)}>
        <button type="button" className="_2l_wH">
            <SearchIcon />
        </button>
    </div>
);

const mapDispatchToProps = {
    showSidenav,
};

interface IStateToProps {
    showSidenav: (section: ESidenavSection) => void
}

export default connect(null, mapDispatchToProps)(SearchButton);
