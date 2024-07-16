import { Colors } from "@/constants/Colors";
import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HistoryIcon = ({ focused }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={23} height={24} fill="none">
    <Path
      fill={focused ? Colors.dark.accent_blue : Colors.dark.tab_bar_inactive}
      fillRule="evenodd"
      d="M11.25 23.25c6.213 0 11.25-5.037 11.25-11.25S17.463.75 11.25.75 0 5.787 0 12s5.037 11.25 11.25 11.25Zm1.5-16.75a1.5 1.5 0 0 0-3 0V12c0 .398.158.78.44 1.06l3.5 3.5a1.5 1.5 0 0 0 2.12-2.12l-3.06-3.061V6.5Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default HistoryIcon;
