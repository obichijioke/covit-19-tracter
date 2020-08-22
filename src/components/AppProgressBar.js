import React from "react";
import ProgressBar from "react-customizable-progressbar";

const AppProgressBar = ({ radius, progress, size, color }) => {
  return (
    <div>
      <ProgressBar
        radius={radius}
        progress={progress}
        strokeWidth={size === "big" ? 4 : 2}
        strokeColor={color === "green" ? "#3abb38" : "#e32115"}
        trackStrokeWidth={size === "big" ? 4 : 2}
        pointerRadius={size === "big" ? 3 : 1}
        pointerStrokeWidth={size === "big" ? 8 : 3}
        pointerStrokeColor={color === "green" ? "#3abb38" : "#e32115"}
      >
        <div className="indicator">
          <div
            className={size === "big" ? "big-percentage" : "percentage"}
            style={
              color && {
                boxShadow: `${
                  color === "green"
                    ? size === "big"
                      ? "0px 2px 59px 8px #3abb38"
                      : "0px 0px 0px 0px #3abb38"
                    : "0px 2px 59px 8px rgba(255, 199, 199, 1)"
                }`,
              }
            }
          >
            {progress}%
          </div>
        </div>
      </ProgressBar>
    </div>
  );
};

export default AppProgressBar;
