import React from 'react';
import Svg, {Defs, RadialGradient, Stop, Circle} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = props => (
  <Svg viewBox="0 0 200 200" {...props}>
    <Defs>
      <RadialGradient
        id="prefix__gradient1"
        cx="50%"
        cy="50%"
        r="50%"
        fx="50%"
        fy="50%">
        <Stop offset="0%" stopColor="#f0f" />
        <Stop offset="100%" stopColor="#ffbd2e" />
      </RadialGradient>
      <RadialGradient
        id="prefix__gradient2"
        cx="50%"
        cy="50%"
        r="70%"
        fx="50%"
        fy="50%">
        <Stop offset="0%" stopColor="#f0f" />
        <Stop offset="100%" stopColor="#ffbd2e" />
      </RadialGradient>
      <RadialGradient
        id="prefix__gradient3"
        cx="20%"
        cy="50%"
        r="50%"
        fx="50%"
        fy="50%">
        <Stop offset="0%" stopColor="#f0f" />
        <Stop offset="100%" stopColor="#ffbd2e" />
      </RadialGradient>
      <RadialGradient
        id="prefix__gradient4"
        cx="50%"
        cy="50%"
        r="50%"
        fx="20%"
        fy="90%">
        <Stop offset="0%" stopColor="#f0f" />
        <Stop offset="100%" stopColor="#ffbd2e" />
      </RadialGradient>
      <RadialGradient
        id="prefix__gradient5"
        cx="20%"
        cy="20%"
        r="50%"
        fx="20%"
        fy="20%">
        <Stop offset="0%" stopColor="#f0f" />
        <Stop offset="100%" stopColor="#ffbd2e" />
      </RadialGradient>
      <RadialGradient
        id="prefix__gradient6"
        cx="50%"
        cy="50%"
        r="50%"
        fx="80%"
        fy="80%">
        <Stop offset="0%" stopColor="#f0f" />
        <Stop offset="100%" stopColor="#ffbd2e" />
      </RadialGradient>
    </Defs>
    <Circle cx={40} cy={60} r={30} fill="url(#prefix__gradient1)" />
    <Circle cx={100} cy={60} r={30} fill="url(#prefix__gradient2)" />
    <Circle cx={160} cy={60} r={30} fill="url(#prefix__gradient3)" />
    <Circle cx={40} cy={140} r={30} fill="url(#prefix__gradient4)" />
    <Circle cx={100} cy={140} r={30} fill="url(#prefix__gradient5)" />
    <Circle cx={160} cy={140} r={30} fill="url(#prefix__gradient6)" />
  </Svg>
);

export default SvgComponent;
