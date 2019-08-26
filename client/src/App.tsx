import React, { FC } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { IconContext } from 'react-icons';

import AppContext from './context';
import { useSpring, animated, config } from 'react-spring';
import { RouteComponentProps } from 'react-router-dom';
// TODO: add theme context and theme reducer

const withAnimation = (Component: any) => {
  const Animated: FC<RouteComponentProps> = props => {
    const anim = useSpring({
      from: {
        opacity: 0.1,
      },
      to: {
        opacity: 1,
      },
      config: config.wobbly,
    });
    return (
      <animated.div style={anim}>
        <Component {...props} />
      </animated.div>
    );
  };
  return Animated;
};

const App: React.FC = () => {
  return (
    <AppContext>
      <IconContext.Provider value={{}}>
        <h1 className=" h-16 w-16 bg-gray-200 border border-gray-300">hello</h1>
      </IconContext.Provider>
    </AppContext>
  );
};

export default App;
