import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ChevronRightIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#556170"
      d="M6.32 2.388a.75.75 0 0 0-.184 1.044l3.199 4.57-3.2 4.57a.75.75 0 1 0 1.23.86l3.5-5a.75.75 0 0 0 0-.86l-3.5-5a.75.75 0 0 0-1.045-.184Z"
    />
  </Svg>
);
export default ChevronRightIcon;
