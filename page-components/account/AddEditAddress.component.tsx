import React, { FormEvent } from "react";
import { useState } from "react";

import InputField from "../../components/InputField";

const initialForm = {
  landmark: "",
  apartment: "",
  street: "",
  area: "",
  city: "",
  state: "",
  country: "",
  zipCode: "",
};

const AddEditAddress = () => {
  const [form, setForm] = useState({
    ...initialForm,
  });

  const onChange = ({ target: { name, value } }: { target: { name: string; value: string } }) => setForm((prev) => ({ ...prev, [name]: value }));

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <section className="_2Q3Wa _25Nr4">
      <form className="_27Vr2" onSubmit={(event) => submitHandler(event)}>
        <InputField name="landmark" value={form.landmark} placeholder={"Landmark"} classes="_6lPcH" onChange={onChange} />
        <InputField name="apartment" value={form.apartment} placeholder={"Apartment"} classes="_6lPcH" onChange={onChange} />
        <InputField name="street" value={form.street} placeholder={"Street"} classes="_6lPcH" onChange={onChange} />
        <InputField name="area" value={form.area} placeholder={"Area"} classes="_6lPcH" onChange={onChange} />
        <InputField name="city" value={form.city} placeholder={"City"} classes="_6lPcH" onChange={onChange} />
        <InputField name="state" value={form.state} placeholder={"State"} classes="_6lPcH" onChange={onChange} />
        <InputField name="country" value={form.country} placeholder={"Country"} classes="_6lPcH" onChange={onChange} />
        <InputField name="zipCode" value={form.zipCode} placeholder={"Zip Code"} classes="_6lPcH" onChange={onChange} />
        <div className="_1sDGU F_6lPcH">
          <button className="_1FEMw _11d9e _3WIwG bp2Y3 _3I2Tv" type="submit">
            <span className="CPL8O">
              <span className="_2DBxJ">Save</span>
            </span>
          </button>
          <button className="_1FEMw _3Eof8 _332jM _3I2Tv" type="button">
            <span className="CPL8O">
              <span className="_2DBxJ">Cancel</span>
            </span>
          </button>
        </div>
      </form>
      <div className="_1sDGU _6lPcH">
        <h5 className={`text-center`}>(Error Message Here)</h5>
      </div>
    </section>
  );
};

export default AddEditAddress;
