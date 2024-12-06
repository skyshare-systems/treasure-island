import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex justify-center items-center overflow-hidden min-h-[100dvh] bg-[url('/assets/background/bg-loading.png')] bg-center bg-no-repeat bg-cover">
      <Image src={"/icons/logo.png"} alt={"logo"} height={556} width={496} />
    </div>
  );
};

export default Loading;
