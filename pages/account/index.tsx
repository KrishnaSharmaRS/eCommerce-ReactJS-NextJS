import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import OrdersSection from "../../page-components/account/OrdersSection.component";
import ProfileSection from "../../page-components/account/ProfileSection.component";
import { IState } from "../../redux/reducers/types";
import { EUserTitle } from "../../redux/reducers/userReducer";
import { selectUserEmail, selectUserFirstName, selectUserLastName, selectUserTitle } from "../../redux/reducers/userReducer/selectors";

export enum EAccountPageSection {
  profile = "Profile",
  orders = "Orders",
}

interface IStateToProps {
  title: EUserTitle;
  firstName: string;
  lastName: string;
  email: string;
}

const AccountPage = ({ title, firstName, lastName, email }: IStateToProps) => {
  const [section, setSection] = useState(EAccountPageSection.profile);

  const greeting = new Date().getHours() >= 12 ? (new Date().getHours() >= 16 ? "evening" : "afternoon") : "morning";

  const signOut = () => {};

  return (
    <main className="_3ORUr">
      <div className="_2ezKP _3AP5M">
        <h1 className="_1e-bx">
          Good {greeting}, {firstName} {lastName}.
        </h1>
      </div>
      <div className="_30v6S">
        <div className="_18WbU">
          <div className="uCIu8">
            <div className="_2_cSA">
              <span>
                <div className="_3Ro-v">
                  <ul className="_3cPXq">
                    <li className="_3gIev">
                      <span className={`_9hvBD pointer${section === EAccountPageSection.profile ? " _6FTN" : ""}`} onClick={() => setSection(EAccountPageSection.profile)}>
                        Profile
                      </span>
                    </li>
                    <li className="_3gIev">
                      <span className={`_9hvBD pointer${section === EAccountPageSection.orders ? " _6FTN" : ""}`} onClick={() => setSection(EAccountPageSection.orders)}>
                        Orders
                      </span>
                    </li>
                  </ul>
                </div>
              </span>
            </div>
          </div>
        </div>
        {section === EAccountPageSection.profile ? <ProfileSection firstName={firstName} lastName={lastName} email={email} title={title} /> : <OrdersSection />}
        <button type="button" className="_1FEMw _1SVks _2zsvO bp2Y3 _2ZSVP" onClick={signOut}>
          <span className="CPL8O">
            <span className="_2DBxJ">Sign Out</span>
          </span>
        </button>
      </div>
    </main>
  );
};

const mapStateToProps = createStructuredSelector<IState, IStateToProps>({
  title: selectUserTitle,
  firstName: selectUserFirstName,
  lastName: selectUserLastName,
  email: selectUserEmail,
});

export default connect(mapStateToProps)(AccountPage);
