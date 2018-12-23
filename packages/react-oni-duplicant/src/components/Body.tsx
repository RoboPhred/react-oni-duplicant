import * as React from "react";

import classnames from "classnames";

import { DuplicantDirection } from "../types";

import { requireBody, getBodyFrame } from "../assets/body";

export interface BodyProps {
  className?: string;
  ordinal: number;
  direction?: DuplicantDirection;
}

const Body: React.SFC<BodyProps> = ({
  className,
  ordinal,
  direction = DuplicantDirection.Forward
}) => {
  const frame = getBodyFrame(ordinal, direction);
  return (
    <img
      style={{
        marginLeft: frame ? -frame.width / 2 + frame.origin.x : 0,
        marginTop: frame ? -frame.height / 2 + frame.origin.y : 0,
        width: frame ? frame.width : 0,
        height: frame ? frame.height : 0
      }}
      className={classnames(className, "duplicant-body")}
      src={requireBody(ordinal, direction)}
    />
  );
};
export default Body;
