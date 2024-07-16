import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SwapIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M5.793.793a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L7.5 3.914V14.5a1 1 0 1 1-2 0V3.914L2.207 7.207A1 1 0 0 1 .793 5.793l5-5Zm7 12.414 5 5a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0-1.414-1.414L19.5 15.086V4.5a1 1 0 1 0-2 0v10.586l-3.293-3.293a1 1 0 0 0-1.414 1.414Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SwapIcon;
