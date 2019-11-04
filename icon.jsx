import React from 'react';
import Svg, {Defs, LinearGradient, Stop, Ellipse} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    viewBox="0 0 117.173 112.637"
    height={425.714}
    width={442.857}
    {...props}>
    <Defs>
      <LinearGradient id="prefix__a">
        <Stop offset={0} />
        <Stop offset={1} stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        gradientTransform="translate(-40.065 -50.649)"
        gradientUnits="userSpaceOnUse"
        y2={154.881}
        x2={142.119}
        y1={37.708}
        x1={59.72}
        id="prefix__b"
        xlinkHref="#prefix__a"
      />
    </Defs>
    <Ellipse
      ry={56.318}
      rx={58.586}
      cy={56.229}
      cx={59.342}
      fill="url(#prefix__b)"
      transform="translate(-.756 .09)"
    />
  </Svg>
);

export default SvgComponent;
