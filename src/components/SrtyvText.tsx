import { SVGProps } from "react";
import clsx from "clsx";

export function StryvText(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="352"
      // height="82"
      {...props}
      className={clsx("group", props.className)}
      viewBox="0 0 352 82"
    >
      <path
        fill="#fff"
        d="M260 56h-46v4h46zM214 67h44v4h-39.5v11H214V67M265 82V56h4.5v26zM321 56v4.5h-20.5V82H296V60.5h-20.5V56zM227 0h-10l27.5 19v16.5h7V19L280 0h-10.5L248 14zM294.5 0h-8L319 35.5 351.5 0h-8L319 27zM203 .5h-56.5V6H201c5 .5 4.5 9.5 0 9.5l-54.5.5v20h5V21h40l13 15h7.5l-13.5-15h4.5c10.5-4.5 8.5-16.5 0-20.5M8.5.5H65V6H10.5c-3 1.5-4.5 6 0 9H56c10 1 14 17.5 0 20.5H1.5V30H56c4 0 4-9 0-9H8.5C1 19.5-4.5 6 8.5.5M73.5.5h64V6H109v30h-6.5V6h-29z"
      ></path>
    </svg>
  );
}

export default StryvText;
