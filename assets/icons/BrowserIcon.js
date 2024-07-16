import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Colors } from "@/constants/Colors";

const BrowserIcon = ({ focused }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={29} height={28} fill="none">
    <Path
      fill={focused ? Colors.dark.accent_blue : Colors.dark.tab_bar_inactive}
      d="M16.5 14a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z"
    />
    <Path
      fill={focused ? Colors.dark.accent_blue : Colors.dark.tab_bar_inactive}
      fillRule="evenodd"
      d="M14.75 25.25C20.963 25.25 26 20.213 26 14S20.963 2.75 14.75 2.75 3.5 7.787 3.5 14s5.037 11.25 11.25 11.25Zm.636-16.266c2.877-1.02 4.315-1.531 5.09-.822.04.035.077.072.112.111.709.776.199 2.214-.822 5.09l-.544 1.534c-.45 1.27-.676 1.905-1.127 2.372l-.076.076c-.467.45-1.102.676-2.372 1.127l-1.533.544c-2.877 1.02-4.315 1.53-5.09.822a1.766 1.766 0 0 1-.112-.111c-.709-.776-.199-2.214.822-5.09l.544-1.534c.45-1.27.676-1.905 1.127-2.372l.076-.076c.467-.451 1.102-.676 2.372-1.127l1.533-.544Z"
      clipRule="evenodd"
    />
    <Path
      fill={focused ? Colors.dark.accent_blue : Colors.dark.tab_bar_inactive}
      fillRule="evenodd"
      d="M20.477 8.162c-.776-.71-2.214-.199-5.09.822l-1.534.544c-1.27.45-1.905.676-2.372 1.127l-.076.076c-.45.467-.676 1.102-1.127 2.372l-.544 1.533c-1.02 2.877-1.531 4.315-.822 5.09.035.04.072.077.111.112.776.709 2.214.198 5.09-.822l1.534-.544c1.27-.45 1.905-.676 2.372-1.128.026-.024.051-.05.076-.075.451-.467.676-1.102 1.127-2.372l.544-1.533c1.02-2.877 1.53-4.315.822-5.091a1.766 1.766 0 0 0-.111-.111ZM14.75 15.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"
      clipRule="evenodd"
      opacity={0.32}
    />
  </Svg>
);
export default BrowserIcon;
