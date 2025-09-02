import { SVGProps } from "react";
import clsx from "clsx";

export function StryvLogoWithText(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={clsx("group", props.className)}
      fill="none"
      viewBox="0 0 520 368"
    >
      <path
        fill="#DD2527"
        d="M1 341c-.333 1-.6 3.5 1 5.5.667.5 2.5 1.2 4.5 0L197 182l-74 28 55-29.5 72-3.5-31.5 35-14.5 52.5c-1.167 3.333-1.7 9.5 5.5 7.5l27-25 80-101-143.5 6-34.5 22.5zM200 5.5l-35.5 53L240 0zM94 83.5 157.5 15l-18 50.5-56 61.5 82-4-34.5 28-96 5z"
      ></path>
      <path
        fill="#DD2527"
        d="m162.5 71-48 24.5 91.5-6 41.5-26-41.5 52L339.5.5 322 11z"
      ></path>
      <path
        fill="#fff"
        d="M428 342h-46v4h46zM382 353h44v4h-39.5v11H382v-15M433 368v-26h4.5v26zM489 342v4.5h-20.5V368H464v-21.5h-20.5V342zM395 286h-10l27.5 19v16.5h7V305l28.5-19h-10.5L416 300zM462.5 286h-8l32.5 35.5 32.5-35.5h-8L487 313zM371 286.5h-56.5v5.5H369c5 .5 4.5 9.5 0 9.5l-54.5.5v20h5v-15h40l13 15h7.5l-13.5-15h4.5c10.5-4.5 8.5-16.5 0-20.5M176.5 286.5H233v5.5h-54.5c-3 1.5-4.5 6 0 9H224c10 1 14 17.5 0 20.5h-54.5V316H224c4 0 4-9 0-9h-47.5c-7.5-1.5-13-15 0-20.5M241.5 286.5h64v5.5H277v30h-6.5v-30h-29z"
      ></path>
    </svg>
  );
}

export default StryvLogoWithText;
