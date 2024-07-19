import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PlusIcon = ({ color = "#fff", width = 20, height = 20, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="M9.167 10.833h-5V9.166h5v-5h1.666v5h5v1.667h-5v5H9.167v-5Z"
    />
  </Svg>
);
export default PlusIcon;
