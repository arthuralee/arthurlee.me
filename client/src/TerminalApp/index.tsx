import React, { useState, useEffect } from "react";
import Selector from "./Selector";
import "./index.css";
import useTimerBasedState from "./useTimerBasedState";

const LINKS = [
  { label: "linkedin", url: "http://www.linkedin.com/in/arthuralee" },
  { label: "twitter", url: "https://twitter.com/compid" },
  { label: "github", url: "https://github.com/arthuralee" }
];

function Cursor() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.setTimeout(() => {
      setIsVisible(!isVisible);
    }, 300);
  }, [isVisible]);

  return <>{isVisible ? "\u2588" : ""}</>;
}

function Prompt({ showCursor = false }: { showCursor?: boolean }) {
  const text = "aboutme";

  const numChars = useTimerBasedState(
    text.length,
    i => (i === 0 ? 200 : 50),
    i => i
  );

  return (
    <>
      <div>
        $ {text.slice(0, numChars)}
        {numChars < text.length ? "\u2588" : null}
      </div>

      {showCursor ? (
        <div>{numChars === text.length ? <Cursor /> : ""}</div>
      ) : null}
    </>
  );
}

export default function TerminalApp() {
  const lines = [
    <Prompt />,
    <div>&nbsp;</div>,
    <div>Arthur Lee</div>,
    <div>Software Engineer</div>,
    <div>&nbsp;</div>,
    <Selector items={LINKS} />
  ];

  const elements = useTimerBasedState(
    lines.length,
    i => (i === 0 ? 0 : i === 1 ? 1200 : 50),
    i => (i > 1 ? lines.slice(0, i) : <Prompt showCursor={true} />)
  );

  return (
    <div className="container">
      <div className="terminal">{elements}</div>
    </div>
  );
}
