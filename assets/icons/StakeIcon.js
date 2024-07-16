import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Stakeicon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M12.793.793a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L14.5 3.914V18.5a1 1 0 1 1-2 0V3.914L8.207 8.207a1 1 0 0 1-1.414-1.414l6-6ZM1.5 14.5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Zm7-2a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Stakeicon;
