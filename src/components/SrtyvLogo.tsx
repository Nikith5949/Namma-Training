import { SVGProps } from "react";
import clsx from "clsx";

export function StryvLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={clsx("group", props.className)}
      fill="none"
      // width="340"
      // height="348"
      viewBox="0 0 340 348"
    >
      <path
        fill="#DD2527"
        d="M1 341c-.333 1-.6 3.5 1 5.5.667.5 2.5 1.2 4.5 0L197 182l-74 28 55-29.5 72-3.5-31.5 35-14.5 52.5c-1.167 3.333-1.7 9.5 5.5 7.5l27-25 80-101-143.5 6-34.5 22.5zM200 5.5l-35.5 53L240 0zM94 83.5 157.5 15l-18 50.5-56 61.5 82-4-34.5 28-96 5z"
      ></path>
      <path
        fill="#DD2527"
        d="m162.5 71-48 24.5 91.5-6 41.5-26-41.5 52L339.5.5 322 11z"
      ></path>
    </svg>
  );
}

export default StryvLogo;
