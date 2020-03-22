import React, { useEffect, useState, useRef } from "react";
import "./Selector.css";

interface SelectorItem {
  label: string;
  url: string;
}

const advanceSelection = (
  currentSelection: number,
  numItems: number,
  increment: number
) => {
  const nextSelection = (currentSelection + increment) % numItems;
  if (nextSelection < 0) {
    return numItems - 1;
  }
  return nextSelection;
};

export default function Selector({ items }: { items: Array<SelectorItem> }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentLinkRef = useRef<HTMLAnchorElement>(null);

  const keydownListener = (e: KeyboardEvent) => {
    switch (e.keyCode) {
      case 13:
      case 32:
        e.preventDefault();
        const activeLink: HTMLElement = document.activeElement as HTMLElement;
        activeLink.click();
        break;
      case 38:
        setCurrentIndex(advanceSelection(currentIndex, items.length, -1));
        break;
      case 40:
        setCurrentIndex(advanceSelection(currentIndex, items.length, 1));
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keydownListener);
    return () => {
      document.removeEventListener("keydown", keydownListener);
    };
  });

  useEffect(() => {
    if (currentLinkRef && currentLinkRef.current) {
      currentLinkRef.current.focus();
    }
  });

  return (
    <>
      {items.map((item, index) => (
        <a
          className="selectionLink"
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          ref={currentIndex === index ? currentLinkRef : null}
          onMouseOver={() => {
            setCurrentIndex(index);
          }}
        >
          {currentIndex === index ? ">" : "\u00A0"}&nbsp;[{index + 1}]{" "}
          {item.label}
        </a>
      ))}
    </>
  );
}
