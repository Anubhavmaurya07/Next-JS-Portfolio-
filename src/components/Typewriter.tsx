"use client";

import { TypeAnimation } from "react-type-animation";

// Isolated so the home page can stay a server component.
// The name is the first string and is pre-rendered, so it is in the server
// HTML and on screen immediately — visible to Google, link previews and
// anyone on a slow phone — before the animation starts cycling roles.
const Typewriter = () => (
  <TypeAnimation
    sequence={[
      "Anubhav Maurya",
      2000,
      "Website Developer",
      1200,
      "Software Developer",
      1200,
      "App Developer",
      1200,
      "Anubhav Maurya",
      2000,
    ]}
    wrapper="span"
    speed={40}
    preRenderFirstString
    repeat={Infinity}
  />
);

export default Typewriter;
