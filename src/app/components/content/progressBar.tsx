import React, { FC } from "react";

const ProgressBar: FC<{ percent: number }> = ({ percent }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-2 bg-tertiary"
      style={{ width: `${percent}%` }}
    />
  );
};

export default ProgressBar;
