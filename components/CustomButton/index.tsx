import React from "react";

import LinkCustom from "../LinkCustom";

const CustomButton = ({ title, link }: { title: string; link: string }) => (
  <LinkCustom className="_1FEMw _3pv2D _3WIwG bp2Y3 _3I2Tv" to={link}>
    <span className="CPL8O">
      <span className="_2DBxJ">{title}</span>
    </span>
  </LinkCustom>
);

export default CustomButton;
