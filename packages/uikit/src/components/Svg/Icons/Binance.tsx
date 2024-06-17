import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <img src="images/chains/1.png" alt="" width="25px" style={{marginRight: "8px"}} />
  );
};

export default Icon;
