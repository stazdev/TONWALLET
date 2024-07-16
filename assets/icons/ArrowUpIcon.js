import * as React from "react";
import Svg, { Mask, Path } from "react-native-svg";
const ArrowUpIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={18}
    fill="none"
    {...props}
  >
    <Mask id="a" fill="#fff">
      <Path
        fillRule="evenodd"
        d="M6.793.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L8.5 3.414V17a1 1 0 1 1-2 0V3.414L2.207 7.707A1 1 0 0 1 .793 6.293l6-6Z"
        clipRule="evenodd"
      />
    </Mask>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M6.793.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L8.5 3.414V17a1 1 0 1 1-2 0V3.414L2.207 7.707A1 1 0 0 1 .793 6.293l6-6Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      d="M8.207.293 7.5 1l.707-.707Zm-1.414 0L7.5 1 6.793.293Zm7.414 6L13.5 7l.707-.707Zm0 1.414L13.5 7l.707.707Zm-1.414 0L13.5 7l-.707.707ZM8.5 3.414l.707-.707L7.5 1v2.414h1Zm-2 0h1V1L5.793 2.707l.707.707ZM2.207 7.707 1.5 7l.707.707Zm-1.414 0L1.5 7l-.707.707Zm0-1.414L1.5 7l-.707-.707ZM8.914-.414a2 2 0 0 0-2.828 0L7.5 1 8.914-.414Zm6 6-6-6L7.5 1l6 6 1.414-1.414Zm0 2.828a2 2 0 0 0 0-2.828L13.5 7l1.414 1.414Zm-2.828 0a2 2 0 0 0 2.828 0L13.5 7l-1.414 1.414ZM7.793 4.121l4.293 4.293L13.5 7 9.207 2.707 7.793 4.121ZM9.5 17V3.414h-2V17h2Zm-2 2a2 2 0 0 0 2-2h-2v2Zm-2-2a2 2 0 0 0 2 2v-2h-2Zm0-13.586V17h2V3.414h-2Zm-2.586 5 4.293-4.293-1.414-1.414L1.5 7l1.414 1.414Zm-2.828 0a2 2 0 0 0 2.828 0L1.5 7 .086 8.414Zm0-2.828a2 2 0 0 0 0 2.828L1.5 7 .086 5.586Zm6-6-6 6L1.5 7l6-6L6.086-.414Z"
      mask="url(#a)"
    />
  </Svg>
);
export default ArrowUpIcon;
