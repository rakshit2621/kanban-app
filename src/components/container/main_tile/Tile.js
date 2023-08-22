import React, { useRef, useState } from "react";
import Levelselect from "./Levelselect";
import "./Tile.css";
import { resources } from "../../../resources/TileResources";
import plusicon from "../../../resources/plusicon.png";

export default function Tile() {
  return (
    <>
      <div className="w-full h-100vh flex justify-evenly items-center mt-10 ">
        <div className=" w-[30%] h-[100%] bg-[#F5F5F5] rounded-xl flex flex-col justify-start items-center">
          <div className="w-[90%] h-[10vh] flex flex-col justify-evenly items-center">
            <div className="w-full h-[50%] flex justify-between items-center">
              <div className="w-[40%] h-full flex justify-evenly items-center">
                <div className="w-[0.5vmax] h-[0.5vmax] bg-[#5030E5] rounded-full"></div>
                <span className="text-[0D062D] text-lg font-bold">To Do</span>
                <div className="w-[1.7vmax] h-[1.7vmax] bg-[#E0E0E0] flex justify-center items-center text-xs text-[#625F6D] rounded-full">
                  4
                </div>
              </div>
              <div className="w-[20%] h-full flex justify-center items-center">
                <button>
                  <div className="p-1 rounded-sm bg-[#F5F5F5] h-7 w-7">
                    <img src={plusicon} alt="plusicon" />
                  </div>
                </button>
              </div>
            </div>
            <div className="w-[95%] h-[3%] bg-[#5030E5]"></div>
          </div>
          <div className="w-[90%] h-[70vh] overflow-y-scroll card pr-3">
            <div className="w-full h-fit ">
              <div className="w-full h-[30vh] p-2 bg-white rounded-xl mt-2 mb-2 flex flex-col justify-evenly items-center">
                <div className="w-[90%] h-[20%] ">
                  <div className="flex justify-between items-center">
                    <button>
                      <span className="bg-[rgba(223,168,116,0.2)] p-1 rounded-md  text-xs text-[#ab1212]">
                        <select name="cars" id="cars">
                          <option value="Low">Low</option>
                          <option value="Medium">Medium</option>
                          <option value="High">High</option>
                        </select>
                      </span>
                    </button>
                    <button>{resources.more}</button>
                  </div>
                </div>
                <div className="w-[90%] h-[15%] font-bold text-md text-[#0D062D]">
                  Brainstorming
                </div>
                <div className="w-[90%] h-[30%] text-xs text-[#787486]">
                  Brainstorming brings team members' diverse experience into
                  play.
                </div>
                <div className="w-[90%] h-[25%] flex justify-between items-center">
                  <div className="w-[100%] h-full flex justify-evenly items-center pr-12">
                    <button>
                      <div className="p-1 text-[#787486] text-xs flex justify-between items-center">
                        {resources.message} comments
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full h-[30vh] p-2 bg-white rounded-xl mt-2 mb-2 flex flex-col justify-evenly items-center">
                <div className="w-[90%] h-[20%] ">
                  <div className="flex justify-between items-center">
                    <button>
                      <span className="bg-[rgba(223,168,116,0.2)] p-1 rounded-md  text-xs text-[#ab1212]">
                        <select name="cars" id="cars">
                          <option value="Low">Low</option>
                          <option value="Medium">Medium</option>
                          <option value="High">High</option>
                        </select>
                      </span>
                    </button>
                    <button>{resources.more}</button>
                  </div>
                </div>
                <div className="w-[90%] h-[15%] font-bold text-md text-[#0D062D]">
                  Research
                </div>
                <div className="w-[90%] h-[30%] text-xs text-[#787486]">
                  User research helps you to create an optimal product for
                  users.
                </div>
                <div className="w-[90%] h-[25%] flex justify-between items-center">
                  <div className="w-[100%] h-full flex justify-evenly items-center pr-12">
                    <button>
                      <div className="p-1 text-[#787486] text-xs flex justify-between items-center">
                        {resources.message} comments
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full h-[30vh] p-2 bg-white rounded-xl mt-2 mb-2 flex flex-col justify-evenly items-center">
                <div className="w-[90%] h-[20%] ">
                  <div className="flex justify-between items-center">
                    <button>
                      <span className="bg-[rgba(223,168,116,0.2)] p-1 rounded-md  text-xs text-[#ab1212]">
                        <select name="cars" id="cars">
                          <option value="Low">Low</option>
                          <option value="Medium">Medium</option>
                          <option value="High">High</option>
                        </select>
                      </span>
                    </button>
                    <button>{resources.more}</button>
                  </div>
                </div>
                <div className="w-[90%] h-[15%] font-bold text-md text-[#0D062D]">
                  Wireframes
                </div>
                <div className="w-[90%] h-[30%] text-xs text-[#787486]">
                  Low fidelity wireframes include the most basic content and
                  visuals.
                </div>
                <div className="w-[90%] h-[25%] flex justify-between items-center">
                  <div className="w-[100%] h-full flex justify-evenly items-center pr-12">
                    <button>
                      <div className="p-1 text-[#787486] text-xs flex justify-between items-center">
                        {resources.message} comments
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-[100%] bg-[#F5F5F5] rounded-xl flex flex-col justify-start items-center">
          <div className="w-[90%] h-[10vh] flex flex-col justify-evenly items-center">
            <div className="w-full h-[50%] flex justify-between items-center">
              <div className="w-[50%] h-full flex justify-evenly items-center">
                <div className="w-[0.5vmax] h-[0.5vmax] bg-[#FFA500] rounded-full"></div>
                <span className="text-[0D062D] text-lg font-bold">
                  On Progress
                </span>
                <div className="w-[1.7vmax] h-[1.7vmax] bg-[#E0E0E0] flex justify-center items-center text-xs text-[#625F6D] rounded-full">
                  3
                </div>
              </div>
              <div className="w-[20%] h-full flex justify-center items-center"></div>
            </div>
            <div className="w-[95%] h-[3%] bg-[#FFA500]"></div>
          </div>
          <div className="w-[90%] h-[70vh] overflow-y-scroll card pr-3">
            <div className="w-full h-fit ">
              <div className="w-full h-[33vh] p-2 bg-white rounded-xl mt-2 mb-2 flex flex-col justify-evenly items-center">
                <div className="w-[90%] h-fit">
                  <div className="flex justify-between items-center">
                    <span className="bg-[rgba(223,168,116,0.2)] p-1 rounded-md  text-xs text-[#ab1212]">
                      <select name="cars" id="cars">
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                      </select>
                    </span>
                    {resources.more}
                  </div>
                </div>
                <div className="w-[90%] h-[15%] font-bold text-md text-[#0D062D]">
                  Onboarding Illustrations
                </div>
                <div className="w-[90%] h-[30%] text-xs text-[#787486]">
                  Many people to onboard
                </div>
                <div className="w-[90%] h-[25%] flex justify-between items-center">
                  <div className="w-[100%] h-full flex justify-evenly items-center pr-12">
                    <div className="p-1 text-[#787486] text-xs flex justify-between items-center">
                      {resources.message} comments
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[33vh] p-2 bg-white rounded-xl mt-2 mb-2 flex flex-col justify-evenly items-center">
              <div className="w-[90%] h-fit">
                <div className="flex justify-between items-center">
                  <span className="bg-[rgba(223,168,116,0.2)] p-1 rounded-md  text-xs text-[#ab1212]">
                    <select name="cars" id="cars">
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </span>
                  {resources.more}
                </div>
              </div>
              <div className="w-[90%] h-[15%] font-bold text-md text-[#0D062D]">
                Moodboard
              </div>
              <div className="w-[90%] h-[30%] text-xs text-[#787486]">
                Moondboard is to be done
              </div>
              <div className="w-[90%] h-[25%] flex justify-between items-center">
                <div className="w-[100%] h-full flex justify-evenly items-center pr-12">
                  <div className="p-1 text-[#787486] text-xs flex justify-between items-center">
                    {resources.message} comments
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-[100%] bg-[#F5F5F5] rounded-xl flex flex-col justify-start items-center">
          <div className="w-[90%] h-[10vh] flex flex-col justify-evenly items-center">
            <div className="w-full h-[50%] flex justify-between items-center">
              <div className="w-[40%] h-full flex justify-evenly items-center">
                <div className="w-[0.5vmax] h-[0.5vmax] bg-[#76A5EA] rounded-full"></div>
                <span className="text-[0D062D] text-lg font-bold">Done</span>
                <div className="w-[1.7vmax] h-[1.7vmax] bg-[#E0E0E0] flex justify-center items-center text-xs text-[#625F6D] rounded-full">
                  2
                </div>
              </div>
              <div className="w-[20%] h-full flex justify-center items-center"></div>
            </div>
            <div className="w-[95%] h-[3%] bg-[#8BC48A]"></div>
          </div>
          <div className="w-[90%] h-[70vh] overflow-y-scroll card pr-3">
            <div className="w-full h-fit ">
              <div className="w-full h-[60vh] p-2 bg-white rounded-xl mt-2 mb-2 flex flex-col justify-evenly items-center">
                <div className="w-[90%] h-fit">
                  <div className="flex justify-between items-center">
                    <span className="bg-[rgba(131,194,157,0.2)] p-1 rounded-md  text-xs text-[#68B266]">
                      Completed
                    </span>
                    {resources.more}
                  </div>
                </div>
                <div className="w-[90%] h-[15%] font-bold text-md text-[#0D062D]">
                  Mobile App Design
                </div>
                <div className="w-[90%] h-[30%] text-xs text-[#787486]">
                  Have to design the mobile app design
                </div>
                <div className="w-[90%] h-[25%] flex justify-between items-center">
                  <div className="w-[100%] h-full flex justify-evenly items-center pr-12">
                    <div className="p-1 text-[#787486] text-xs flex justify-between items-center">
                      {resources.message} comments
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[30vh] p-2 bg-white rounded-xl mt-2 mb-2 flex flex-col justify-evenly items-center">
              <div className="w-[90%] h-[20%] ">
                <div className="flex justify-between items-center">
                  <span className="bg-[rgba(131,194,157,0.2)] p-1 rounded-md  text-xs text-[#68B266]">
                    Completed
                  </span>
                  {resources.more}
                </div>
              </div>
              <div className="w-[90%] h-[15%] font-bold text-md text-[#0D062D]">
                Design System
              </div>
              <div className="w-[90%] h-[30%] text-xs text-[#787486]">
                It just needs to adapt the UI from what you did before
              </div>
              <div className="w-[90%] h-[25%] flex justify-between items-center">
                <div className="w-[100%] h-full flex justify-evenly items-center pr-12">
                  <div className="p-1 text-[#787486] text-xs flex justify-between items-center">
                    {resources.message} comments
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
