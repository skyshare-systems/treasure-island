import LandCard from "@/components/land-card";
import Image from "next/image";

export const items = [
  { id: 1, label: "Item 1", color: "#f9f9f9", land: <></> },
  { id: 2, label: "Item 2", color: "#f9f9f9", land: <></> },
  { id: 3, label: "Item 3", color: "#f9f9f9", land: <></> },
  { id: 4, label: "Item 4", color: "#f9f9f9", land: <></> },
  { id: 5, label: "Item 5", color: "#f9f9f9", land: <></> },
  { id: 6, label: "Item 6", color: "#f9f9f9", land: <></> },
  { id: 7, label: "Item 7", color: "#f9f9f9", land: <></> },
  { id: 8, label: "Item 8", color: "#f9f9f9", land: <></> },
  { id: 9, label: "Item 9", color: "#f9f9f9", land: <></> },
  { id: 10, label: "Item 10", color: "#f9f9f9", land: <></> },
  { id: 11, label: "Item 11", color: "#f9f9f9", land: <></> },
  { id: 12, label: "Item 12", color: "#f9f9f9", land: <></> },
  { id: 13, label: "Item 13", color: "#f9f9f9", land: <></> },
  { id: 14, label: "Item 14", color: "#f9f9f9", land: <></> },
  {
    id: 15,
    label: "Item 15",
    color: "#f9f9f9",
    land: (
      <>
        <Image
          src={"/assets/stones/stone-1.png"}
          alt={"stone"}
          height={500}
          width={500}
          unoptimized
          className="min-[140px] lg:min-w-[150px]"
        />
      </>
    ),
  },
  {
    id: 16,
    label: "Item 16",
    color: "#DE5995",
    land: (
      <>
        <LandCard
          className=""
          image={"/assets/lands/image-1.png"}
          name={"Konoha"}
          tag={"@naruto"}
          sui={31}
          token={12}
          percentage={1.4}
          imageClassName={
            "max-w-[200px] lg:max-w-[90px] w-full flex justify-center items-center"
          }
          type={"A"}
          variant={"platinum"}
        />
      </>
    ),
  },
  { id: 17, label: "Item 17", color: "#f9f9f9", land: <></> },
  {
    id: 18,
    label: "Item 18",
    color: "#DE5995",
    land: (
      <>
        <LandCard
          className={""}
          image={"/assets/lands/image-3.png"}
          name={"Planet Namek"}
          tag={"@suiyan"}
          sui={42}
          token={30}
          percentage={1.8}
          imageClassName={
            "max-w-[200px] lg:max-w-[90px] w-full flex justify-center items-center"
          }
          type={"A"}
          variant={"platinum"}
        />
      </>
    ),
  },
  { id: 19, label: "Item 19", color: "#f9f9f9", land: <></> },
  { id: 20, label: "Item 20", color: "#f9f9f9", land: <></> },
  { id: 21, label: "Item 21", color: "#f9f9f9", land: <></> },
  { id: 22, label: "Item 22", color: "#f9f9f9", land: <></> },
  { id: 23, label: "Item 23", color: "#f9f9f9", land: <></> },
  { id: 24, label: "Item 24", color: "#f9f9f9", land: <></> },
  { id: 25, label: "Item 25", color: "#f9f9f9", land: <></> },
  { id: 26, label: "Item 26", color: "#f9f9f9", land: <></> },
  { id: 27, label: "Item 27", color: "#f9f9f9", land: <></> },
  {
    id: 28,
    label: "Item 28",
    color: "#f9f9f9",
    land: <></>,
  },
  {
    id: 29,
    label: "Item 29",
    color: "#DE5995",
    land: (
      <>
        <LandCard
          className="max-w-[220px] flex justify-center items-center"
          image={"/assets/lands/image-2.png"}
          name={"Mirai Land"}
          tag={"@studiomirai"}
          sui={80}
          token={47}
          percentage={1.1}
          imageClassName={
            "max-w-[200px] lg:max-w-[90px] w-full flex justify-center items-center"
          }
          type={"A"}
          variant={"platinum"}
        />
      </>
    ),
  },
  { id: 30, label: "Item 30", color: "#f9f9f9", land: <></> },
  { id: 31, label: "Item 31", color: "#f9f9f9", land: <></> },
  { id: 32, label: "Item 32", color: "#f9f9f9", land: <></> },
  { id: 33, label: "Item 33", color: "#f9f9f9", land: <></> },
  { id: 34, label: "Item 34", color: "#f9f9f9", land: <></> },
  { id: 35, label: "Item 35", color: "#f9f9f9", land: <></> },
  { id: 36, label: "Item 36", color: "#f9f9f9", land: <></> },
  { id: 37, label: "Item 37", color: "#f9f9f9", land: <></> },
  { id: 38, label: "Item 38", color: "#f9f9f9", land: <></> },
  {
    id: 39,
    label: "Item 39",
    color: "#DE5995",
    land: (
      <>
        <LandCard
          className={""}
          image={"/assets/lands/image-4.png"}
          name={"Pink Panther"}
          tag={"0x1412…4120"}
          sui={37}
          token={22}
          percentage={1.3}
          imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
          type={"A"}
          variant={"platinum"}
        />
      </>
    ),
  },
  {
    id: 40,
    label: "Item 40",
    color: "#DE5995",
    land: (
      <>
        <LandCard
          className="hover:z-[2]"
          image={"/assets/lands/image-6.png"}
          name={"Cherry Land"}
          tag={"@wara"}
          sui={88}
          token={12}
          percentage={1.14}
          imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
          type={"A"}
          variant={"platinum"}
        />
      </>
    ),
  },
  { id: 41, label: "Item 41", color: "#f9f9f9", land: <></> },
  { id: 42, label: "Item 42", color: "#f9f9f9", land: <></> },
  { id: 43, label: "Item 43", color: "#f9f9f9", land: <></> },
  { id: 44, label: "Item 44", color: "#f9f9f9", land: <></> },
  {
    id: 45,
    label: "Item 45",
    color: "#C6E67A",
    land: (
      <>
        <LandCard
          className=""
          image={"/assets/lands/image-12.png"}
          name={"Loki's Hideout"}
          tag={"@wallstreetbets"}
          sui={12}
          token={6}
          percentage={1.4}
          imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
          type={"C"}
          variant={"emerald"}
        />
      </>
    ),
  },
  { id: 46, label: "Item 46", color: "#f9f9f9", land: <></> },
  { id: 47, label: "Item 47", color: "#f9f9f9", land: <></> },
  { id: 48, label: "Item 48", color: "#f9f9f9", land: <></> },
  { id: 49, label: "Item 49", color: "#f9f9f9", land: <></> },
  { id: 50, label: "Item 50", color: "#f9f9f9", land: <></> },
  {
    id: 51,
    label: "Item 51",
    color: "#DE5995",
    land: (
      <>
        <LandCard
          className="hover:z-[2]"
          image={"/assets/lands/image-6.png"}
          name={"Cherry Land"}
          tag={"@wara"}
          sui={88}
          token={12}
          percentage={1.14}
          imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
          type={"A"}
          variant={"platinum"}
        />
      </>
    ),
  },
  { id: 52, label: "Item 52", color: "#f9f9f9", land: <></> },
  { id: 53, label: "Item 53", color: "#f9f9f9", land: <></> },
  { id: 54, label: "Item 54", color: "#f9f9f9", land: <></> },
  { id: 55, label: "Item 55", color: "#f9f9f9", land: <></> },
  {
    id: 56,
    label: "Item 56",
    color: "#C6E67A",
    land: (
      <>
        <LandCard
          className=""
          image={"/assets/lands/image-13.png"}
          name={"Emerald City of Oz"}
          tag={"@mystenlabs"}
          sui={12}
          token={6}
          percentage={1.4}
          imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
          type={"C"}
          variant={"emerald"}
        />
      </>
    ),
  },
  { id: 57, label: "Item 57", color: "#f9f9f9", land: <></> },
  { id: 58, label: "Item 58", color: "#f9f9f9", land: <></> },
  { id: 59, label: "Item 59", color: "#f9f9f9", land: <></> },
  { id: 60, label: "Item 60", color: "#f9f9f9", land: <></> },
  { id: 61, label: "Item 61", color: "#f9f9f9", land: <></> },
  { id: 62, label: "Item 62", color: "#f9f9f9", land: <></> },
  { id: 63, label: "Item 63", color: "#f9f9f9", land: <></> },
  {
    id: 64,
    label: "Item 64",
    color: "#DE5995",
    land: (
      <>
        <LandCard
          className="hover:z-[2]"
          image={"/assets/lands/image-7.png"}
          name={"AEON land"}
          tag={"@000"}
          sui={144}
          token={53}
          percentage={2.01}
          imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
          type={"A"}
          variant={"platinum"}
        />
      </>
    ),
  },
  {
    id: 65,
    label: "Item 65",
    color: "#DE5995",
    land: (
      <>
        <LandCard
          className="hover:z-[2]"
          image={"/assets/lands/image-1.png"}
          name={"AEON land V2"}
          tag={"@000"}
          sui={144}
          token={53}
          percentage={2.01}
          imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
          type={"A"}
          variant={"platinum"}
        />
      </>
    ),
  },
  { id: 66, label: "Item 66", color: "#f9f9f9", land: <></> },
  {
    id: 67,
    label: "Item 67",
    color: "#7AE67F",
    land: (
      <>
        <LandCard
          className=""
          image={"/assets/lands/image-14.png"}
          name={"Shang Chi"}
          tag={"@kotaro"}
          sui={12}
          token={6}
          percentage={1.4}
          imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
          type={"D"}
          variant={"gold"}
        />
      </>
    ),
  },
  { id: 68, label: "Item 68", color: "#f9f9f9", land: <></> },
  { id: 69, label: "Item 69", color: "#f9f9f9", land: <></> },
  { id: 70, label: "Item 70", color: "#f9f9f9", land: <></> },
  { id: 71, label: "Item 71", color: "#f9f9f9", land: <></> },
  { id: 72, label: "Item 72", color: "#f9f9f9", land: <></> },
  { id: 73, label: "Item 73", color: "#f9f9f9", land: <></> },
  { id: 74, label: "Item 74", color: "#f9f9f9", land: <></> },
  { id: 75, label: "Item 75", color: "#f9f9f9", land: <></> },
  { id: 76, label: "Item 76", color: "#f9f9f9", land: <></> },
  {
    id: 77,
    label: "Item 77",
    color: "#7AE67F",
    land: (
      <>
        <LandCard
          className=""
          image={"/assets/lands/image-8.png"}
          name={"Panda Express"}
          tag={"@pandakitchen"}
          sui={31}
          token={12}
          percentage={1.1}
          imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
          type={"D"}
          variant={"gold"}
        />
      </>
    ),
  },
  { id: 78, label: "Item 78", color: "#f9f9f9", land: <></> },
  { id: 79, label: "Item 79", color: "#f9f9f9", land: <></> },
  {
    id: 80,
    label: "Item 80",
    color: "#7AE67F",
    land: (
      <>
        {" "}
        <LandCard
          className=""
          image={"/assets/lands/image-15.png"}
          name={"Bambooman"}
          tag={"@suifrens"}
          sui={12}
          token={6}
          percentage={1.4}
          imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
          type={"D"}
          variant={"gold"}
        />
      </>
    ),
  },
  { id: 81, label: "Item 81", color: "#f9f9f9", land: <></> },
  { id: 82, label: "Item 82", color: "#f9f9f9", land: <></> },
  { id: 83, label: "Item 83", color: "#f9f9f9", land: <></> },
  { id: 84, label: "Item 84", color: "#f9f9f9", land: <></> },
  { id: 85, label: "Item 85", color: "#f9f9f9", land: <></> },
  { id: 86, label: "Item 86", color: "#f9f9f9", land: <></> },
  {
    id: 87,
    label: "Item 87",
    color: "#DE9B0B",
    land: (
      <>
        <LandCard
          className=""
          image={"/assets/lands/image-9.png"}
          name={"Zen's Tropics V2"}
          tag={"@zenfrogs"}
          sui={12}
          token={6}
          percentage={1.4}
          imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
          type={"B"}
          variant={"diamond"}
        />
      </>
    ),
  },
  {
    id: 88,
    label: "Item 88",
    color: "#DE9B0B",
    land: (
      <>
        <LandCard
          className=""
          image={"/assets/lands/image-10.png"}
          name={"Ancient Egypt V2"}
          tag={"@adeniyi"}
          sui={12}
          token={6}
          percentage={1.4}
          imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
          type={"B"}
          variant={"diamond"}
        />
      </>
    ),
  },
  { id: 89, label: "Item 89", color: "#f9f9f9", land: <></> },
  { id: 90, label: "Item 90", color: "#f9f9f9", land: <></> },
  { id: 91, label: "Item 91", color: "#f9f9f9", land: <></> },
  { id: 92, label: "Item 92", color: "#f9f9f9", land: <></> },
  { id: 93, label: "Item 93", color: "#f9f9f9", land: <></> },
  { id: 94, label: "Item 94", color: "#f9f9f9", land: <></> },
  { id: 95, label: "Item 95", color: "#f9f9f9", land: <></> },
  { id: 96, label: "Item 96", color: "#f9f9f9", land: <></> },
  { id: 97, label: "Item 97", color: "#f9f9f9", land: <></> },
  { id: 98, label: "Item 98", color: "#f9f9f9", land: <></> },
  { id: 99, label: "Item 99", color: "#f9f9f9", land: <></> },
  { id: 100, label: "Item 100", color: "#f9f9f9", land: <></> },
  {
    id: 101,
    label: "Item 101",
    color: "#7AE67F",
    land: (
      <>
        <LandCard
          className=""
          image={"/assets/lands/image-11.png"}
          name={"Zen's Tropics"}
          tag={"@zenfrogs"}
          sui={12}
          token={6}
          percentage={1.4}
          imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
          type={"D"}
          variant={"gold"}
        />
      </>
    ),
  },
  { id: 102, label: "Item 102", color: "#f9f9f9", land: <></> },
  {
    id: 103,
    label: "Item 103",
    color: "#7AE67F",
    land: (
      <>
        <LandCard
          className=""
          image={"/assets/lands/image-16.png"}
          name={"Pls dont attacc me"}
          tag={"@wade"}
          sui={12}
          token={6}
          percentage={1.4}
          imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
          type={"D"}
          variant={"gold"}
        />
      </>
    ),
  },
  { id: 104, label: "Item 104", color: "#f9f9f9", land: <></> },
  { id: 105, label: "Item 105", color: "#f9f9f9", land: <></> },
  { id: 106, label: "Item 106", color: "#f9f9f9", land: <></> },
  { id: 107, label: "Item 107", color: "#f9f9f9", land: <></> },
  { id: 108, label: "Item 108", color: "#f9f9f9", land: <></> },
  { id: 109, label: "Item 109", color: "#f9f9f9", land: <></> },
  { id: 110, label: "Item 110", color: "#f9f9f9", land: <></> },
  { id: 111, label: "Item 111", color: "#f9f9f9", land: <></> },
  { id: 112, label: "Item 112", color: "#f9f9f9", land: <></> },
  { id: 113, label: "Item 113", color: "#f9f9f9", land: <></> },
  { id: 114, label: "Item 114", color: "#f9f9f9", land: <></> },
  { id: 115, label: "Item 115", color: "#f9f9f9", land: <></> },
  {
    id: 116,
    label: "Item 116",
    color: "#7AE67F",
    land: (
      <>
        <LandCard
          className=""
          image={"/assets/lands/image-17.png"}
          name={"KungFu Panda"}
          tag={"0x95cc…1485"}
          sui={12}
          token={6}
          percentage={1.4}
          imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
          type={"D"}
          variant={"gold"}
        />
      </>
    ),
  },
  { id: 117, label: "Item 117", color: "#f9f9f9", land: <></> },
  {
    id: 118,
    label: "Item 118",
    color: "#7AE67F",
    land: (
      <>
        <LandCard
          className=""
          image={"/assets/lands/image-18.png"}
          name={"KungFu Panda 2"}
          tag={"0x95cc…1485"}
          sui={12}
          token={6}
          percentage={1.4}
          imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
          type={"D"}
          variant={"gold"}
        />
      </>
    ),
  },
  { id: 119, label: "Item 119", color: "#f9f9f9", land: <></> },
  { id: 120, label: "Item 120", color: "#f9f9f9", land: <></> },
  { id: 121, label: "Item 121", color: "#f9f9f9", land: <></> },
  { id: 122, label: "Item 122", color: "#f9f9f9", land: <></> },
  { id: 123, label: "Item 123", color: "#f9f9f9", land: <></> },
  { id: 124, label: "Item 124", color: "#f9f9f9", land: <></> },
  { id: 125, label: "Item 125", color: "#f9f9f9", land: <></> },
  { id: 126, label: "Item 126", color: "#f9f9f9", land: <></> },
  { id: 127, label: "Item 127", color: "#f9f9f9", land: <></> },
  { id: 128, label: "Item 128", color: "#f9f9f9", land: <></> },
  { id: 129, label: "Item 129", color: "#f9f9f9", land: <></> },
  { id: 130, label: "Item 130", color: "#f9f9f9", land: <></> },
  { id: 131, label: "Item 131", color: "#f9f9f9", land: <></> },
  { id: 132, label: "Item 132", color: "#f9f9f9", land: <></> },
  { id: 133, label: "Item 133", color: "#f9f9f9", land: <></> },
  { id: 134, label: "Item 134", color: "#f9f9f9", land: <></> },
  { id: 135, label: "Item 135", color: "#f9f9f9", land: <></> },
  { id: 136, label: "Item 136", color: "#f9f9f9", land: <></> },
  { id: 137, label: "Item 137", color: "#f9f9f9", land: <></> },
  { id: 138, label: "Item 138", color: "#f9f9f9", land: <></> },
  { id: 139, label: "Item 139", color: "#f9f9f9", land: <></> },
  { id: 140, label: "Item 140", color: "#f9f9f9", land: <></> },
  { id: 141, label: "Item 141", color: "#f9f9f9", land: <></> },
  { id: 142, label: "Item 142", color: "#f9f9f9", land: <></> },
  { id: 143, label: "Item 143", color: "#f9f9f9", land: <></> },
  { id: 144, label: "Item 144", color: "#f9f9f9", land: <></> },
  { id: 145, label: "Item 145", color: "#f9f9f9", land: <></> },
  { id: 146, label: "Item 146", color: "#f9f9f9", land: <></> },
  { id: 147, label: "Item 147", color: "#f9f9f9", land: <></> },
  { id: 148, label: "Item 148", color: "#f9f9f9", land: <></> },
  { id: 149, label: "Item 149", color: "#f9f9f9", land: <></> },
  { id: 150, label: "Item 150", color: "#f9f9f9", land: <></> },
  { id: 151, label: "Item 151", color: "#f9f9f9", land: <></> },
  { id: 152, label: "Item 152", color: "#f9f9f9", land: <></> },
  { id: 153, label: "Item 152", color: "#f9f9f9", land: <></> },
  { id: 154, label: "Item 152", color: "#f9f9f9", land: <></> },
  { id: 155, label: "Item 152", color: "#f9f9f9", land: <></> },
  { id: 156, label: "Item 152", color: "#f9f9f9", land: <></> },
];
