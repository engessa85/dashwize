import React from "react";
import { ThreeCircles } from "react-loader-spinner";
function SignInUpLoader({middleCircleColor}) {
  return (
    <div className="">
      <ThreeCircles
        height="50"
        width="50"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#22C55E"
        innerCircleColor={middleCircleColor}
        middleCircleColor="#22C55E"
      />
    </div>
  );
}

export default SignInUpLoader;

