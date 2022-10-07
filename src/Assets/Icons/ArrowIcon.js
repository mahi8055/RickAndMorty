import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function ArrowIcon(props) {
  return (
    <Svg

      viewBox="0 0 12 20"
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.287 18.573L1.713 10l8.574-8.573"
        stroke={props.stroke}
        strokeWidth={1.5}
      />
    </Svg>
  )
}

ArrowIcon.defaultProps = {
  width: 12,
  height: 20,
  fill: '#fff',
  viewBox: "0 0 12 20"
}

export default ArrowIcon;
