import Person1 from "./profiles/Ellipse 12.png";
import Person2 from "./profiles/Ellipse 13.png";
import Person3 from "./profiles/Ellipse 14.png";
import Person4 from "./profiles/Ellipse 15.png";

import User1 from "./users/Ellipse 12.png";
import User2 from "./users/Ellipse 13.png";
import User4 from "./users/Ellipse 12 (1).png";
import User5 from "./users/Ellipse 13 (1).png";
import User3 from "./users/Ellipse 15.png";

import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/Mask Group.png";

import img from "./profiles/round_dots.png";
export const resources = {
  pencil: (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.13749 1.80001L2.64998 8.28751C2.39998 8.53751 2.16249 9.02501 2.11249 9.37501L1.76249 11.85C1.63749 12.75 2.26249 13.375 3.16249 13.25L5.63746 12.9C5.98746 12.85 6.475 12.6125 6.725 12.3625L13.2125 5.87501C14.325 4.76251 14.8625 3.46251 13.2125 1.81251C11.5625 0.150005 10.2625 0.675007 9.13749 1.80001Z"
        fill="#5030E5"
        fill-opacity="0.2"
        stroke="#5030E5"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.21249 2.72501C8.76249 4.68751 10.3 6.23751 12.275 6.78751L8.21249 2.72501Z"
        fill="#5030E5"
        fill-opacity="0.2"
      />
      <path
        d="M8.21249 2.72501C8.76249 4.68751 10.3 6.23751 12.275 6.78751"
        stroke="#5030E5"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  link: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99333 12.3167H11C13.3828 12.3167 15.3167 10.3829 15.3167 8.00001C15.3167 5.61717 13.3828 3.68334 11 3.68334H10C9.63586 3.68334 9.35 3.97847 9.35 4.33334C9.35 4.68952 9.64382 4.98334 10 4.98334H11C12.6638 4.98334 14.0167 6.33619 14.0167 8.00001C14.0167 9.66383 12.6638 11.0167 11 11.0167H9.99333C9.63716 11.0167 9.34333 11.3105 9.34333 11.6667C9.34333 12.0229 9.63716 12.3167 9.99333 12.3167Z"
        fill="#5030E5"
        stroke="#5030E5"
        stroke-width="0.3"
      />
      <path
        d="M5 12.3167H6C6.35618 12.3167 6.65 12.0229 6.65 11.6667C6.65 11.3105 6.35618 11.0167 6 11.0167H5C3.33618 11.0167 1.98334 9.66383 1.98334 8.00001C1.98334 6.33619 3.33618 4.98334 5 4.98334H6C6.35618 4.98334 6.65 4.68952 6.65 4.33334C6.65 3.97717 6.35618 3.68334 6 3.68334H5C2.61716 3.68334 0.683336 5.61717 0.683336 8.00001C0.683336 10.3829 2.61716 12.3167 5 12.3167Z"
        fill="#5030E5"
        stroke="#5030E5"
        stroke-width="0.3"
      />
      <path
        d="M5.33334 8.65H10.6667C11.0228 8.65 11.3167 8.35618 11.3167 8C11.3167 7.64382 11.0228 7.35 10.6667 7.35H5.33334C4.97716 7.35 4.68334 7.64382 4.68334 8C4.68334 8.35618 4.97716 8.65 5.33334 8.65Z"
        fill="#5030E5"
        stroke="#5030E5"
        stroke-width="0.3"
      />
    </svg>
  ),
  profiles: [Person1, Person2, Person3, Person4, Person1],
  plus: (
    <div className="flex justify-center items-center">
      <svg
        width="2"
        height="8"
        className="absolute"
        viewBox="0 0 2 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7V1"
          stroke="#5030E5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        width="8"
        height="2"
        className="absolute"
        viewBox="0 0 8 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1H7"
          stroke="#5030E5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  ),
  filter: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.6 1H12.4C13.1333 1 13.7333 1.6 13.7333 2.33333V3.8C13.7333 4.33333 13.4 5 13.0667 5.33333L10.2 7.86667C9.8 8.2 9.53333 8.86667 9.53333 9.4V12.2667C9.53333 12.6667 9.26666 13.2 8.93333 13.4L8 14C7.13333 14.5333 5.93333 13.9333 5.93333 12.8667V9.33333C5.93333 8.86667 5.66666 8.26667 5.4 7.93333L2.86666 5.26667C2.53333 4.93333 2.26666 4.33333 2.26666 3.93333V2.4C2.26666 1.6 2.86666 1 3.6 1Z"
        stroke="#787486"
        stroke-width="1.3"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  calender: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33334 1.33333V3.33333"
        stroke="#787486"
        stroke-width="1.3"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.6667 1.33333V3.33333"
        stroke="#787486"
        stroke-width="1.3"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.6667 2.33333C12.8867 2.45333 14 3.29999 14 6.43333V10.5533C14 13.3 13.3333 14.6733 10 14.6733H6C2.66667 14.6733 2 13.3 2 10.5533V6.43333C2 3.29999 3.11333 2.45999 5.33333 2.33333H10.6667Z"
        stroke="#787486"
        stroke-width="1.3"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.8333 11.7333H2.16666"
        stroke="#787486"
        stroke-width="1.3"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.00001 5.5C7.18001 5.5 6.48668 5.94667 6.48668 6.81333C6.48668 7.22667 6.68001 7.54 6.97334 7.74C6.56668 7.98 6.33334 8.36667 6.33334 8.82C6.33334 9.64667 6.96668 10.16 8.00001 10.16C9.02668 10.16 9.66668 9.64667 9.66668 8.82C9.66668 8.36667 9.43334 7.97333 9.02001 7.74C9.32001 7.53333 9.50668 7.22667 9.50668 6.81333C9.50668 5.94667 8.82001 5.5 8.00001 5.5ZM8.00001 7.39333C7.65334 7.39333 7.40001 7.18667 7.40001 6.86C7.40001 6.52667 7.65334 6.33333 8.00001 6.33333C8.34668 6.33333 8.60001 6.52667 8.60001 6.86C8.60001 7.18667 8.34668 7.39333 8.00001 7.39333ZM8.00001 9.33333C7.56001 9.33333 7.24001 9.11333 7.24001 8.71333C7.24001 8.31333 7.56001 8.1 8.00001 8.1C8.44001 8.1 8.76001 8.32 8.76001 8.71333C8.76001 9.11333 8.44001 9.33333 8.00001 9.33333Z"
        fill="#787486"
      />
    </svg>
  ),
  user: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.1064 7.74666C6.0864 7.74666 6.07307 7.74666 6.05307 7.74666C6.01973 7.73999 5.97307 7.73999 5.93307 7.74666C3.99973 7.68666 2.53973 6.16666 2.53973 4.29333C2.53973 2.38666 4.09307 0.833328 5.99973 0.833328C7.9064 0.833328 9.45973 2.38666 9.45973 4.29333C9.45307 6.16666 7.9864 7.68666 6.1264 7.74666C6.11973 7.74666 6.11307 7.74666 6.1064 7.74666ZM5.99973 1.83333C4.6464 1.83333 3.53973 2.93999 3.53973 4.29333C3.53973 5.62666 4.57973 6.69999 5.9064 6.74666C5.9464 6.73999 6.03307 6.73999 6.11973 6.74666C7.4264 6.68666 8.45307 5.61333 8.45973 4.29333C8.45973 2.93999 7.35307 1.83333 5.99973 1.83333Z"
        fill="#787486"
      />
      <path
        d="M11.0264 7.83334C11.0064 7.83334 10.9864 7.83334 10.9664 7.82667C10.6931 7.85334 10.4131 7.66001 10.3864 7.38667C10.3597 7.11334 10.5264 6.86667 10.7997 6.83334C10.8797 6.82667 10.9664 6.82667 11.0397 6.82667C12.0131 6.77334 12.7731 5.97334 12.7731 4.99334C12.7731 3.98001 11.9531 3.16 10.9397 3.16C10.6664 3.16667 10.4397 2.94001 10.4397 2.66667C10.4397 2.39334 10.6664 2.16667 10.9397 2.16667C12.4997 2.16667 13.7731 3.44001 13.7731 5.00001C13.7731 6.53334 12.5731 7.77334 11.0464 7.83334C11.0397 7.83334 11.0331 7.83334 11.0264 7.83334Z"
        fill="#787486"
      />
      <path
        d="M6.11307 15.0333C4.80641 15.0333 3.49307 14.7 2.49974 14.0333C1.57307 13.42 1.06641 12.58 1.06641 11.6667C1.06641 10.7533 1.57307 9.90667 2.49974 9.28667C4.49974 7.96001 7.73974 7.96001 9.72641 9.28667C10.6464 9.90001 11.1597 10.74 11.1597 11.6533C11.1597 12.5667 10.6531 13.4133 9.72641 14.0333C8.72641 14.7 7.41974 15.0333 6.11307 15.0333ZM3.05307 10.1267C2.41307 10.5533 2.06641 11.1 2.06641 11.6733C2.06641 12.24 2.41974 12.7867 3.05307 13.2067C4.71307 14.32 7.51307 14.32 9.17307 13.2067C9.81307 12.78 10.1597 12.2333 10.1597 11.66C10.1597 11.0933 9.80641 10.5467 9.17307 10.1267C7.51307 9.02 4.71307 9.02 3.05307 10.1267Z"
        fill="#787486"
      />
      <path
        d="M12.2264 13.8333C11.9931 13.8333 11.7864 13.6733 11.7397 13.4333C11.6864 13.16 11.8597 12.9 12.1264 12.84C12.5464 12.7533 12.9331 12.5867 13.2331 12.3533C13.6131 12.0667 13.8197 11.7067 13.8197 11.3267C13.8197 10.9467 13.6131 10.5867 13.2397 10.3067C12.9464 10.08 12.5797 9.92 12.1464 9.82C11.8797 9.76 11.7064 9.49333 11.7664 9.22C11.8264 8.95333 12.0931 8.78 12.3664 8.84C12.9397 8.96666 13.4397 9.19333 13.8464 9.50666C14.4664 9.97333 14.8197 10.6333 14.8197 11.3267C14.8197 12.02 14.4597 12.68 13.8397 13.1533C13.4264 13.4733 12.9064 13.7067 12.3331 13.82C12.2931 13.8333 12.2597 13.8333 12.2264 13.8333Z"
        fill="#787486"
      />
    </svg>
  ),
  more: (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.1949 7.99994C16.5756 7.99994 17.6949 6.88065 17.6949 5.49994C17.6949 4.11923 16.5756 2.99994 15.1949 2.99994C13.8142 2.99994 12.6949 4.11923 12.6949 5.49994C12.6949 6.88065 13.8142 7.99994 15.1949 7.99994Z"
        stroke="#787486"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.50001 7.99994C6.88072 7.99994 8 6.88065 8 5.49994C8 4.11923 6.88072 2.99994 5.50001 2.99994C4.11929 2.99994 3 4.11923 3 5.49994C3 6.88065 4.11929 7.99994 5.50001 7.99994Z"
        stroke="#787486"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.1949 17.9999C16.5756 17.9999 17.6949 16.8807 17.6949 15.4999C17.6949 14.1192 16.5756 12.9999 15.1949 12.9999C13.8142 12.9999 12.6949 14.1192 12.6949 15.4999C12.6949 16.8807 13.8142 17.9999 15.1949 17.9999Z"
        stroke="#787486"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.50001 17.9999C6.88072 17.9999 8 16.8807 8 15.4999C8 14.1192 6.88072 12.9999 5.50001 12.9999C4.11929 12.9999 3 14.1192 3 15.4999C3 16.8807 4.11929 17.9999 5.50001 17.9999Z"
        stroke="#787486"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  burger: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.925 11.125L4.075 11.125C2.95 11.125 2.5 11.6 2.5 12.8L2.5 15.825C2.5 17.025 2.95 17.5 4.075 17.5L15.925 17.5C17.05 17.5 17.5 17.025 17.5 15.825L17.5 12.8C17.5 11.6 17.05 11.125 15.925 11.125Z"
        fill="white"
      />
      <path
        d="M15.925 2.5L4.075 2.5C2.95 2.5 2.5 2.975 2.5 4.175L2.5 7.2C2.5 8.39167 2.95 8.875 4.075 8.875L15.925 8.875C17.05 8.875 17.5 8.4 17.5 7.2L17.5 4.175C17.5 2.975 17.05 2.5 15.925 2.5Z"
        fill="white"
      />
    </svg>
  ),
  fullPlus: (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 4.25H5.75V1C5.75 0.59 5.41 0.25 5 0.25C4.59 0.25 4.25 0.59 4.25 1V4.25H1C0.59 4.25 0.25 4.59 0.25 5C0.25 5.41 0.59 5.75 1 5.75H4.25V9C4.25 9.41 4.59 9.75 5 9.75C5.41 9.75 5.75 9.41 5.75 9V5.75H9C9.41 5.75 9.75 5.41 9.75 5C9.75 4.59 9.41 4.25 9 4.25Z"
        fill="#5030E5"
      />
    </svg>
  ),
  more: (
    <svg
      width="15"
      height="4"
      viewBox="0 0 15 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.44318 3.16477C2.03409 3.16477 1.68371 3.02083 1.39205 2.73295C1.10417 2.44508 0.962121 2.09659 0.965909 1.6875C0.962121 1.28598 1.10417 0.943182 1.39205 0.659091C1.68371 0.371212 2.03409 0.227273 2.44318 0.227273C2.82955 0.227273 3.17045 0.371212 3.46591 0.659091C3.76515 0.943182 3.91667 1.28598 3.92045 1.6875C3.91667 1.96023 3.8447 2.20833 3.70455 2.43182C3.56818 2.6553 3.38826 2.83333 3.16477 2.96591C2.94508 3.09848 2.70455 3.16477 2.44318 3.16477ZM7.78131 3.16477C7.37222 3.16477 7.02184 3.02083 6.73017 2.73295C6.44229 2.44508 6.30025 2.09659 6.30403 1.6875C6.30025 1.28598 6.44229 0.943182 6.73017 0.659091C7.02184 0.371212 7.37222 0.227273 7.78131 0.227273C8.16767 0.227273 8.50858 0.371212 8.80403 0.659091C9.10328 0.943182 9.25479 1.28598 9.25858 1.6875C9.25479 1.96023 9.18282 2.20833 9.04267 2.43182C8.90631 2.6553 8.72638 2.83333 8.5029 2.96591C8.2832 3.09848 8.04267 3.16477 7.78131 3.16477ZM13.1194 3.16477C12.7103 3.16477 12.36 3.02083 12.0683 2.73295C11.7804 2.44508 11.6384 2.09659 11.6422 1.6875C11.6384 1.28598 11.7804 0.943182 12.0683 0.659091C12.36 0.371212 12.7103 0.227273 13.1194 0.227273C13.5058 0.227273 13.8467 0.371212 14.1422 0.659091C14.4414 0.943182 14.5929 1.28598 14.5967 1.6875C14.5929 1.96023 14.5209 2.20833 14.3808 2.43182C14.2444 2.6553 14.0645 2.83333 13.841 2.96591C13.6213 3.09848 13.3808 3.16477 13.1194 3.16477Z"
        fill="#0D062D"
      />
    </svg>
  ),
  users: [User1, User2, User3, User4, User5],
  message: (
    <svg
      width="16"
      height="16"
      className="mr-1"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00001 15.2067C7.54001 15.2067 7.10668 14.9733 6.80001 14.5667L5.80001 13.2333C5.78001 13.2067 5.70001 13.1733 5.66668 13.1667H5.33334C2.55334 13.1667 0.833344 12.4133 0.833344 8.66667V5.33334C0.833344 2.38667 2.38668 0.833336 5.33334 0.833336H10.6667C13.6133 0.833336 15.1667 2.38667 15.1667 5.33334V8.66667C15.1667 11.6133 13.6133 13.1667 10.6667 13.1667H10.3333C10.28 13.1667 10.2333 13.1933 10.2 13.2333L9.20001 14.5667C8.89334 14.9733 8.46001 15.2067 8.00001 15.2067ZM5.33334 1.83334C2.94668 1.83334 1.83334 2.94667 1.83334 5.33334V8.66667C1.83334 11.68 2.86668 12.1667 5.33334 12.1667H5.66668C6.00668 12.1667 6.39334 12.36 6.60001 12.6333L7.60001 13.9667C7.83334 14.2733 8.16668 14.2733 8.40001 13.9667L9.40001 12.6333C9.62001 12.34 9.96668 12.1667 10.3333 12.1667H10.6667C13.0533 12.1667 14.1667 11.0533 14.1667 8.66667V5.33334C14.1667 2.94667 13.0533 1.83334 10.6667 1.83334H5.33334Z"
        fill="#787486"
      />
      <path
        d="M8.00001 8C7.62668 8 7.33334 7.7 7.33334 7.33333C7.33334 6.96666 7.63334 6.66666 8.00001 6.66666C8.36668 6.66666 8.66668 6.96666 8.66668 7.33333C8.66668 7.7 8.37334 8 8.00001 8Z"
        fill="#787486"
      />
      <path
        d="M10.6667 8C10.2933 8 10 7.7 10 7.33333C10 6.96666 10.3 6.66666 10.6667 6.66666C11.0333 6.66666 11.3333 6.96666 11.3333 7.33333C11.3333 7.7 11.04 8 10.6667 8Z"
        fill="#787486"
      />
      <path
        d="M5.33332 8C4.95999 8 4.66666 7.7 4.66666 7.33333C4.66666 6.96666 4.96666 6.66666 5.33332 6.66666C5.69999 6.66666 5.99999 6.96666 5.99999 7.33333C5.99999 7.7 5.70666 8 5.33332 8Z"
        fill="#787486"
      />
    </svg>
  ),
  menu_fourdots: <img src={img} alt="+2" />,

  files: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className="mr-1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.3334 7.33334V11.3333C14.3334 14 13.6667 14.6667 11.0001 14.6667H4.33341C1.66674 14.6667 1.00008 14 1.00008 11.3333V4.66667C1.00008 2 1.66674 1.33334 4.33341 1.33334H5.33341C6.33341 1.33334 6.55341 1.62667 6.93341 2.13334L7.93341 3.46667C8.18674 3.8 8.33341 4 9.00008 4H11.0001C13.6667 4 14.3334 4.66667 14.3334 7.33334Z"
        stroke="#787486"
        stroke-miterlimit="10"
      />
      <path
        d="M5.33333 1.33334H11.3333C12.6667 1.33334 13.3333 2 13.3333 3.33334V4.25334"
        stroke="#787486"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.33333 10H6"
        stroke="#787486"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  images: [image1, image2, image3, image4],
};
