import React, { useState } from "react";
import { connect } from "react-redux";

import { IState } from "../../redux/reducers/types";
import { selectUserAddresses } from "../../redux/reducers/userReducer/selectors";
import AddEditAddress from "./AddEditAddress.component";

interface IStateToProps {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  addresses: Array<object>;
}

const ProfileSection = ({ title, firstName, lastName, email, addresses }: IStateToProps) => {
  const [addAddressHidden, setAddAddressHidden] = useState(true);
  const [editAddress, setEditAddress] = useState({
    hidden: true,
  });

  return (
    <section className="_3L21P">
      <section className="_3G86p _22EcF">
        <div className="FN1o3">
          <h3 className="_3xd_O">Account Details</h3>
          <button className="_3EFDW">Edit</button>
        </div>
        <div className="_1ca8v">
          <p className="_3QD4a">{`${title} ${firstName} ${lastName}`}</p>
          <p className="_3QD4a">{email}</p>
        </div>
        <div className="_15u58" />
      </section>
      <section className="SIbpx">
        <div className="_1f-1k">
          <h3 className="_1cFY0">Password</h3>
          <button className="_1aMe5">Edit</button>
        </div>
        <div className="_16QWA">
          <p>********</p>
        </div>
      </section>
      <section className="_1ndra">
        <div className="_1-UqY">
          <label className="JKN45">
            <input type="checkbox" className="_2ocad" defaultValue="false" />
          </label>
        </div>
      </section>
      <section className="gGi4A">
        <div className="_38m5k mb-3">
          <h3 className="fE2vf">Addresses</h3>
          <button
            className="S697n"
            onClick={() => {
              if (!editAddress.hidden) setEditAddress({ hidden: true });
              setAddAddressHidden(!addAddressHidden);
            }}
          >
            <span className="_1K1pK">+ Add new address</span>
          </button>
        </div>
        {addAddressHidden && editAddress.hidden ? (
          addresses.length ? (
            <div className="_26elb">
              {addresses.map((userAddress, idx) => (
                <div key={idx} className="col-12 row p-3 border my-2">
                  <div className="col-11">
                    <p className="FN5ZV">
                    </p>
                  </div>
                  <div
                    className="col-1"
                    onClick={() => {
                      setEditAddress({
                        ...userAddress,
                        hidden: false,
                      });
                    }}
                  >
                    <span className="_1EYUC">
                      <button type="button" className="_3O1u9">
                        Edit
                      </button>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="_1vLSz">{"You didn't enter any addresses yet"}</p>
          )
        ) : (
          !addAddressHidden && <AddEditAddress />
        )}
      </section>
    </section>
  );
};

const mapStateToProps = (state: IState) => ({
  addresses: selectUserAddresses(state),
});

export default connect(mapStateToProps)(ProfileSection);
