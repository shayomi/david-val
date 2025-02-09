import localFont from "next/font/local";

export const kodchasan = localFont({
  src: [
    {
      path: "../../public/fonts/kodchasan/Kodchasan-Light.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/kodchasan/Kodchasan-Regular.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/kodchasan/Kodchasan-Medium.ttf",
      weight: "400",
      style: "medium",
    },
    {
      path: "../../public/fonts/kodchasan/Kodchasan-Bold.ttf",
      weight: "600",
      style: "bold",
    },
  ],
});
