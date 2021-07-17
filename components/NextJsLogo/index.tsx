import React from "react";
import Image from "next/image";

export default function NextJsLogo({ width = 100, height = 60 }) {
  return <Image src={"/assets/images/NextJS-Logo.png"} alt="NextJS Logo" width={width} height={height} />;
}
