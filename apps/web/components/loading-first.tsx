import React from "react";
import Image from "next/image";

const LoadingFirst = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-[9999] bg-black/10 backdrop-blur-2xl flex justify-center items-center overflow-hidden min-h-[100dvh]">
      <Image src={"/icons/logo.png"} alt={"logo"} height={556} width={496} />
    </div>
  );
};

export default LoadingFirst;
