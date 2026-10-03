import React from "react";

export function useInteract(disabled) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  return [
    { hover: hover && !disabled, press: press && !disabled, focus },
    {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => { setHover(false); setPress(false); },
      onMouseDown: () => setPress(true),
      onMouseUp: () => setPress(false),
      onFocus: (e) => setFocus(!!(e.target.matches && e.target.matches(":focus-visible"))),
      onBlur: () => setFocus(false),
    },
  ];
}
