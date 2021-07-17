import Image from "next/image";
import React from "react";

export default function ReactJsLogo({ width = 100, height = 100 }) {
  return <Image src={"/assets/images/ReactJS-Logo.png"} alt="React.js Logo" width={width} height={height} />;
}
