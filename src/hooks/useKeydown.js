import * as React from "react";

export default function useKeydown(code, callback) {
  React.useEffect(() => {
    // key handler
    function keydownHandler(event) {
      if (event.code === code) {
        callback();
      }
    }
    // set event listener
    window.addEventListener("keydown", keydownHandler);
    // on dismount clear event listener
    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  }, [code, callback]);
}
