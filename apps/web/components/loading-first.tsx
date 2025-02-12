"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useLoading } from "@/lib/store/loading-store";
import { fredoka_moto } from "@/public/fonts";
import { motion } from "framer-motion";
import useMusic from "@/hooks/useMusic";

const LoadingFirst = () => {
  const { isLoading, setIsLoading } = useLoading((state) => state);
  const [isClose, setIsClose] = useState(false);
  const items = Array.from({ length: 10 }, (_, i) => ``);
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between the animations of each child
      },
    },
  };

  const { audioLoadingMusic } = useMusic();

  function closeLoading() {
    audioLoadingMusic?.current?.play();
    setIsClose(false);
    setIsLoading(true);

    setTimeout(() => {
      setIsClose(true);
      setIsLoading(false);
      audioLoadingMusic?.current?.pause();
    }, 5000);
  }

  if (isClose) return null;

  return (
    <>
      <div
        onClick={closeLoading}
        className={cn(
          `fixed top-0 left-0 w-full z-[99999999999999] backdrop-blur-2xl flex justify-center items-center overflow-hidden min-h-[100dvh] ease-out duration-300 cursor-pointer`,
          `${!isLoading ? "bg-[#171921]" : " bg-[#171921]/10"}`
        )}
      >
        <audio ref={audioLoadingMusic} src="/music/loading-bg-music.mp3" />

        <div className="flex flex-col justify-center items-center gap-16">
          <Image
            src={"/icons/logo.png"}
            alt={"logo"}
            height={556}
            width={496}
            unoptimized
            className="max-w-[400px] w-full select-none"
          />
          {!isLoading ? (
            <button
              onClick={closeLoading}
              className={cn("ty-title text-neutral-8", fredoka_moto.className)}
            >
              CLICK HERE TO CONTINUE
            </button>
          ) : (
            <motion.div
              className="flex items-center gap-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {items.map((item, index) => (
                <motion.div
                  initial={{ opacity: 1, background: "#4d7999" }}
                  transition={{
                    delay: index * 0.5,
                    ease: "easeOut",
                    duration: 0.3,
                    filter: "blur(5px)",
                  }}
                  whileInView={{ opacity: 1, background: "#59f7ff" }}
                  key={index}
                  className="item border-2 border-black"
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                    textAlign: "center",
                  }}
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default LoadingFirst;
