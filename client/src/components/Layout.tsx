import React from "react";
import { FC } from "react";

import Nav from "./Nav";
import { IUser } from "../interface/User";
import { useSpring, config, animated } from "react-spring";
import AbsoluteWraper from "./utils/AbsoluteWraper";

type Prop = {
  user: IUser;
};
const Layout: FC<Prop> = prop => {
  const animation = useSpring({
    from: {
      transform: "translateX(-100vw)",
    },
    to: {
      transform: "translate(0)",
    },
    config: config.wobbly,
  });
  return (
    <AbsoluteWraper>
      <Nav user={prop.user} />
      <animated.main style={animation}>{prop.children}</animated.main>
    </AbsoluteWraper>
  );
};

export default Layout;
