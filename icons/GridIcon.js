import * as React from "react";
import Svg, { Path } from "react-native-svg";
const GridIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#212121"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h7v7H3V3ZM14 3h7v7h-7V3ZM14 14h7v7h-7v-7ZM3 14h7v7H3v-7Z"
      clipRule="evenodd"
      {...props}
    />
  </Svg>
);
export default GridIcon;
