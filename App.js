import React from 'react';

import Logo from './icon.svg';
import LogoJsx from './icon';

const App: () => React$Node = () => {
  return (
    <>
      <Logo width={150} height={150} />
      <LogoJsx width={150} height={150} />
    </>
  );
};

export default App;
