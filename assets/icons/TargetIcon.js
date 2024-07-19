import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const TargetIcon = ({ color = "#fff", width = 20, height = 20, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <G
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <Path d="M10 18.333a8.333 8.333 0 1 0 0-16.667 8.333 8.333 0 0 0 0 16.667Z" />
      <Path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
      <Path d="M10 11.666a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default TargetIcon;
