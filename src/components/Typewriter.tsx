"use client";

import { TypeAnimation } from "react-type-animation";

// Isolated so the home page can stay a server component and fetch live data.
const Typewriter = () => (
  <TypeAnimation
    sequence={[
      // Short lead-in only. This used to be 2400ms to sit behind the old
      // stair intro; the page now paints at ~0.6s, so a long pause just
      // left the hero headline empty.
      "",
      400,
      "Anubhav Maurya",
      1000,
      "Web Developer",
      1000,
      "Software Developer",
      1000,
      "App Developer",
      1000,
      "Backend Developer",
      1000,
    ]}
    wrapper="span"
    speed={40}
    repeat={Infinity}
  />
);

export default Typewriter;
