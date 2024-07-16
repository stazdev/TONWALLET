import * as React from "react";
import Svg, { Mask, Path } from "react-native-svg";
const ArrowDownIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={18}
    fill="none"
    {...props}
  >
    <Mask id="a" fill="#fff">
      <Path
        fillRule="evenodd"
        d="M6.293 17.707a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0-1.414-1.414L8 14.586V1a1 1 0 0 0-2 0v13.586l-4.293-4.293a1 1 0 1 0-1.414 1.414l6 6Z"
        clipRule="evenodd"
      />
    </Mask>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M6.293 17.707a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0-1.414-1.414L8 14.586V1a1 1 0 0 0-2 0v13.586l-4.293-4.293a1 1 0 1 0-1.414 1.414l6 6Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      d="M7.707 17.707 7 17l.707.707Zm-1.414 0L7 17l-.707.707Zm7.414-6L13 11l.707.707Zm0-1.414L13 11l.707-.707Zm-1.414 0L13 11l-.707-.707ZM8 14.586H7V17l1.707-1.707L8 14.586Zm-2 0-.707.707L7 17v-2.414H6Zm-4.293-4.293L1 11l.707-.707Zm-1.414 0L1 11l-.707-.707Zm0 1.414L1 11l-.707.707ZM7 17l-1.414 1.414a2 2 0 0 0 2.828 0L7 17Zm6-6-6 6 1.414 1.414 6-6L13 11Zm0 0 1.414 1.414a2 2 0 0 0 0-2.828L13 11Zm0 0 1.414-1.414a2 2 0 0 0-2.828 0L13 11Zm-4.293 4.293L13 11l-1.414-1.414-4.293 4.293 1.414 1.414ZM7 1v13.586h2V1H7Zm0 0h2a2 2 0 0 0-2-2v2Zm0 0v-2a2 2 0 0 0-2 2h2Zm0 13.586V1H5v13.586h2ZM1 11l4.293 4.293 1.414-1.414-4.293-4.293L1 11Zm0 0 1.414-1.414a2 2 0 0 0-2.828 0L1 11Zm0 0L-.414 9.586a2 2 0 0 0 0 2.828L1 11Zm6 6-6-6-1.414 1.414 6 6L7 17Z"
      mask="url(#a)"
    />
  </Svg>
);
export default ArrowDownIcon;
