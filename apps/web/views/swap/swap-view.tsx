import ArrowSwap from "@/components/icon/arrow-swap";
import WalletIcon from "@/components/icon/wallet-icon";
import { Input } from "@/components/ui/input";
import { useDashboardModal } from "@/lib/store/dashboard-modal-store";
import { cn } from "@/lib/utils";
import { fredoka_moto } from "@/public/fonts";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import CopyIcon from "@/components/icon/copy-icon";
import { useToken0, useToken1 } from "@/lib/store/token-store";
import useMusic from "@/hooks/useMusic";

const SwapView = () => {
  const { dashboardCount } = useDashboardModal((state) => state);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [amount, setAmount] = useState<any>("");
  const [amount1, setAmount1] = useState<any>("");

  const { item, setItem } = useToken0((state) => state);
  const { item: item1, setItem: setItem1 } = useToken1((state) => state);

  const [token3, setToken3] = useState({
    name: "USDC",
    image: "/assets/swap/usdc-token.png",
    address: "0x1...1",
  });

  const tokens = [
    {
      name: "SUI",
      image: "/assets/swap/sui-token.png",
      address: "0x1...1",
    },
    {
      name: "USDC",
      image: "/assets/swap/usdc-token.png",
      address: "0x1...1",
    },
    {
      name: "BUCK",
      image: "/assets/swap/buck-token.png",
      address: "0x1...1",
    },
    {
      name: "BUT",
      image: "/assets/swap/but-token.png",
      address: "0x1...1",
    },
  ];
  const [isCopy, setIsCopy] = useState(false);

  const { landHover, landClick } = useMusic();

  function copyClipBoard(address: string) {
    navigator.clipboard.writeText(address);
    setIsCopy(true);
    const timerId = setTimeout(() => {
      setIsCopy(false);
    }, 2000); // Set the delay in milliseconds (1 seconds in this case)

    return () => clearTimeout(timerId);
  }

  function switchData() {
    setToken3(item);
    setItem(item1);
  }

  function switchitem1() {
    setItem1(token3);
  }

  useEffect(() => {
    switchitem1();
  }, [token3]);

  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Regex to allow up to 5 whole digits, 1 decimal point, and up to 5 decimal places
    const regex = /^\d{0,5}(\.\d{0,5})?$/;

    // Validate the input against the regex pattern
    if (regex.test(value)) {
      // Remove leading zeros (e.g., '00123' => '123')
      value = value.replace(/^0+(\d)/, "$1");

      // Set the valid amount
      setAmount(value);
    }
  };

  const handleAmount1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Regex to allow up to 5 whole digits, 1 decimal point, and up to 5 decimal places
    const regex = /^\d{0,5}(\.\d{0,5})?$/;

    // Validate the input against the regex pattern
    if (regex.test(value)) {
      // Remove leading zeros (e.g., '00123' => '123')
      value = value.replace(/^0+(\d)/, "$1");

      // Set the valid amount
      setAmount1(value);
    }
  };

  return (
    <>
      {dashboardCount === 3 && (
        <div className="flex flex-col gap-2 items-start justify-start min-w-[288px]  min-h-[266px] pt-2 pb-3 px-2 rounded-3xl border-4 border-cyan-1 bg-neutral-7">
          <div className="flex flex-col items-start justify-start gap-[3px] w-full relative">
            <button
              onMouseEnter={() => landHover()}
              onMouseDown={() => landClick()}
              onClick={switchData}
              className="absolute top-[56%] left-1/2 transform -translate-x-1/2 -translate-y-[56%] bg-neutral-7 p-1 rounded-lg"
            >
              <ArrowSwap />
            </button>
            {/* you pay  */}
            <div className="flex flex-col gap-2 p-3 self-stretch bg-neutral-8 rounded-2xl ">
              <div className="flex flex-row justify-between items-center w-full">
                <h1
                  className={cn(
                    fredoka_moto.className,
                    "ty-subtitle text-neutral-1"
                  )}
                >
                  You pay
                </h1>

                <div className="flex items-center gap-1">
                  <WalletIcon />
                  <h1 className="ty-subtext text-neutral-5">499 {item.name}</h1>
                </div>
              </div>
              <div className="flex flex-col items-start gap-1 self-stretch">
                <div className="p-2 flex justify-between items-center gap-2 rounded-lg border border-neutral-7 bg-neutral-8 w-full">
                  <Input
                    className={cn(
                      fredoka_moto.className,
                      "ty-subheading text-blue-1"
                    )}
                    placeholder="Ex. 15"
                    onChange={handleAmount}
                    value={amount}
                  />

                  <DropdownMenu open={open} onOpenChange={setOpen}>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={cn(
                          "flex items-center justify-between gap-1 p-1 rounded-[4px] grow",
                          `${open ? "bg-neutral-1 border border-neutral-1" : ""}`
                        )}
                      >
                        <div className="flex items-center gap-1">
                          {item?.name && (
                            <Image
                              src={item.image}
                              alt={item.name}
                              height={14}
                              width={14}
                              unoptimized
                            />
                          )}

                          <h1
                            className={cn(
                              fredoka_moto.className,
                              "ty-subtitle ",
                              `${open ? "text-neutral-8" : "text-neutral-1"}`
                            )}
                          >
                            {item.name === "" ? "Select" : item.name}
                          </h1>
                        </div>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          className={`${open ? "transform  scale-y-[-1]" : ""} ease-out duration-300 min-w-[14px]`}
                        >
                          <path
                            d="M10.8464 4.78029C11.1057 4.97134 11.1612 5.33651 10.9701 5.59591C10.8217 5.7974 10.6733 5.98893 10.5431 6.15576C10.2832 6.48873 9.92548 6.93474 9.53674 7.38239C9.15058 7.82718 8.72235 8.28703 8.32265 8.64023C8.12344 8.81623 7.91753 8.9781 7.71674 9.09914C7.532 9.2105 7.27813 9.33329 7.00041 9.33329C6.72268 9.33329 6.46876 9.2105 6.28402 9.09914C6.08323 8.9781 5.87738 8.81623 5.67817 8.64023C5.27842 8.28703 4.85023 7.82718 4.46404 7.38239C4.07533 6.93474 3.71756 6.48873 3.45767 6.15576C3.32749 5.98893 3.17906 5.7974 3.03067 5.59592C2.83962 5.33651 2.89503 4.97134 3.15443 4.78029C3.25871 4.70349 3.38008 4.66653 3.50036 4.66663H7.00041H10.5004C10.6207 4.66653 10.7421 4.70349 10.8464 4.78029Z"
                            fill="#BFBFBF"
                          />
                        </svg>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="min-w-[136px] p-1 flex flex-col gap-1 rounded-lg border-[0.7px] border-neutral-6 bg-neutral-8 ">
                      {tokens.map((data, index) => {
                        return (
                          <DropdownMenuItem
                            key={index}
                            onClick={() =>
                              item1?.name !== data.name &&
                              setItem({
                                name: data.name,
                                image: data.image,
                                address: data.address,
                              })
                            }
                            className="flex items-center gap-2 p-1"
                          >
                            {data.image && (
                              <Image
                                src={data.image}
                                alt={data.name}
                                height={30}
                                width={30}
                              />
                            )}

                            <div className="flex flex-col gap-1">
                              <h1
                                className={cn(
                                  fredoka_moto.className,
                                  "ty-subtitle text-neutral-1"
                                )}
                              >
                                {data.name}
                              </h1>
                              <button
                                onClick={() => copyClipBoard(data.address)}
                                className={cn(
                                  "flex items-center gap-1 text-neutral-5 ty-subtext"
                                )}
                              >
                                {data.address}::{data.name}
                                <CopyIcon />
                              </button>
                            </div>
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="flex flex-wrap justify-between gap-2 items-center w-full">
                  <h1
                    className={cn(
                      fredoka_moto.className,
                      "p-1 ty-subtext text-neutral-5"
                    )}
                  >
                    ~$10
                  </h1>

                  <div className="flex flex-wrap items-center gap-1">
                    <button
                      className={cn(
                        fredoka_moto.className,
                        "p-1 ty-subtext text-neutral-5"
                      )}
                    >
                      10%
                    </button>
                    <button
                      className={cn(
                        fredoka_moto.className,
                        "p-1 ty-subtext text-neutral-5"
                      )}
                    >
                      50%
                    </button>
                    <button
                      className={cn(
                        fredoka_moto.className,
                        "p-1 ty-subtext text-neutral-5"
                      )}
                    >
                      MAX
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* you receive  */}
            <div className="flex flex-col gap-2 p-3 self-stretch bg-neutral-8 rounded-2xl ">
              <div className="flex flex-row justify-between items-center w-full">
                <h1
                  className={cn(
                    fredoka_moto.className,
                    "ty-subtitle text-neutral-1"
                  )}
                >
                  You Receive
                </h1>

                <div className="flex items-center gap-1">
                  <WalletIcon />
                  <h1 className="ty-subtext text-neutral-5">
                    499 {item1.name}
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="p-2 flex justify-between items-center gap-2 rounded-lg border border-neutral-7 bg-neutral-8 w-full">
                  <Input
                    className={cn(
                      fredoka_moto.className,
                      "ty-subheading text-blue-1"
                    )}
                    placeholder="Ex. 15"
                    onChange={handleAmount1}
                    value={amount1}
                  />
                  <DropdownMenu open={open2} onOpenChange={setOpen2}>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={cn(
                          "flex items-center gap-1 p-1 rounded-[4px] grow",
                          `${open2 ? "bg-neutral-1 border border-neutral-1" : ""}`
                        )}
                      >
                        <div className="flex items-center gap-1">
                          {item1?.name && (
                            <Image
                              src={item1.image}
                              alt={item1.name}
                              height={14}
                              width={14}
                              unoptimized
                              className="min-w-[14px]"
                            />
                          )}

                          <h1
                            className={cn(
                              fredoka_moto.className,
                              "ty-subtitle ",
                              `${open2 ? "text-neutral-8" : "text-neutral-1"}`
                            )}
                          >
                            {item1.name === "" ? "Select" : item1.name}
                          </h1>
                        </div>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          className={`${open ? "transform  scale-y-[-1]" : ""} ease-out duration-300 min-w-[14px]`}
                        >
                          <path
                            d="M10.8464 4.78029C11.1057 4.97134 11.1612 5.33651 10.9701 5.59591C10.8217 5.7974 10.6733 5.98893 10.5431 6.15576C10.2832 6.48873 9.92548 6.93474 9.53674 7.38239C9.15058 7.82718 8.72235 8.28703 8.32265 8.64023C8.12344 8.81623 7.91753 8.9781 7.71674 9.09914C7.532 9.2105 7.27813 9.33329 7.00041 9.33329C6.72268 9.33329 6.46876 9.2105 6.28402 9.09914C6.08323 8.9781 5.87738 8.81623 5.67817 8.64023C5.27842 8.28703 4.85023 7.82718 4.46404 7.38239C4.07533 6.93474 3.71756 6.48873 3.45767 6.15576C3.32749 5.98893 3.17906 5.7974 3.03067 5.59592C2.83962 5.33651 2.89503 4.97134 3.15443 4.78029C3.25871 4.70349 3.38008 4.66653 3.50036 4.66663H7.00041H10.5004C10.6207 4.66653 10.7421 4.70349 10.8464 4.78029Z"
                            fill="#BFBFBF"
                          />
                        </svg>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="min-w-[136px] p-1 flex flex-col gap-1 rounded-lg border-[0.7px] border-neutral-6 bg-neutral-8 ">
                      {tokens
                        .filter((filtedata) => filtedata.name !== item1?.name)
                        .map((data, index) => {
                          return (
                            <DropdownMenuItem
                              key={index}
                              onClick={() => {
                                item?.name !== data.name &&
                                  setItem1({
                                    name: data.name,
                                    image: data.image,
                                    address: data.address,
                                  });
                              }}
                              className="flex items-center gap-2 p-1"
                            >
                              <Image
                                src={data.image}
                                alt={data.name}
                                height={30}
                                width={30}
                              />
                              <div className="flex flex-col gap-1">
                                <h1
                                  className={cn(
                                    fredoka_moto.className,
                                    "ty-subtitle text-neutral-1"
                                  )}
                                >
                                  {data.name}
                                </h1>
                                <h1
                                  className={cn(
                                    "flex items-center gap-1 text-neutral-5 ty-subtext"
                                  )}
                                >
                                  {data.address}::{data.name}
                                  <CopyIcon />
                                </h1>
                              </div>
                            </DropdownMenuItem>
                          );
                        })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
          <button
            onMouseEnter={() => landHover()}
            onMouseDown={() => landClick()}
            className="swap-button w-full py-3 px-2 rounded-full"
          >
            <h1
              className={cn(fredoka_moto.className, "ty-title text-neutral-1")}
            >
              Swap
            </h1>
          </button>
        </div>
      )}
    </>
  );
};

export default SwapView;
