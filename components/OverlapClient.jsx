"use client";

import { useRef } from "react";
import { useOverlapping } from "@/hooks/useOverlapping";

const OverlapClient = ({ children }) => {
  const wrapperRef = useRef();

  useOverlapping(wrapperRef); // pass the reference to the wrapper element

  return (
    // padding-bottom equals the height of header
    <div ref={wrapperRef} className="pb-16">
      {children}
    </div>
  );
};

export default OverlapClient;
