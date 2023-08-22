import React from "react";
import { resources } from "../../resources/HeaderResources";
// import UserImage from "../../resources/Mask Group.png";

export default function Header() {
  return (
    <div className="w-full h-[10vh] border-b-[1.5px] border-b-[#DBDBDB] flex justify-center items-center">
      <div>{resources.logo} </div>
      <div className="font-extrabold text-3xl"> &nbsp; &nbsp;Kanban app</div>
    </div>
  );
}
