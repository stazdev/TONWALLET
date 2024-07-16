import { Colors } from "@/constants/Colors";
import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
const WalletIcon = ({ focused }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={29} height={28} fill="none">
    <G
      fill={focused ? Colors.dark.accent_blue : Colors.dark.tab_bar_inactive}
      opacity={0.32}
    >
      <Path d="M18.75 12.5h4v4h-4v-4ZM3.75 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.79 3 7.91 3 10.15 3h6.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748c.436.856.436 1.976.436 4.216V12h-19V9.4Z" />
    </G>
    <Path
      fill={focused ? Colors.dark.accent_blue : Colors.dark.tab_bar_inactive}
      fillRule="evenodd"
      d="M4.186 8.184C3.75 9.04 3.75 10.16 3.75 12.4v4.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.79 23 7.91 23 10.15 23h9.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748c.436-.856.436-1.976.436-4.216v-4.2c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C22.71 6 21.59 6 19.35 6h-9.2c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748ZM20.5 12.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default WalletIcon;
