import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CloseIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M.47.47a.75.75 0 0 1 1.06 0L6 4.94 10.47.47a.75.75 0 1 1 1.06 1.061l-4.47 4.47 4.47 4.47a.75.75 0 1 1-1.06 1.06L6 7.061l-4.47 4.47a.75.75 0 0 1-1.06-1.06L4.94 6 .47 1.531a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default CloseIcon;
