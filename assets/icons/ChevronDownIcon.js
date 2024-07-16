import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ChevronDownIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M4.195 6.646a.75.75 0 1 0-.89 1.208l4.75 3.5a.75.75 0 0 0 .89 0l4.75-3.5a.75.75 0 1 0-.89-1.208L8.5 9.818 4.195 6.646Z"
    />
  </Svg>
);
export default ChevronDownIcon;
