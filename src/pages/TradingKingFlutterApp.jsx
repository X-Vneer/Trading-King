import React from "react";
import SideLogo from "../components/SideLogo";
import TextArea from "../components/TextArea";
import { useContext } from "react";
import { NavBarContext } from "../App";
const TradingKingFlutterApp = () => {
  const [opened, setOpened] = useContext(NavBarContext);

  return (
    <div
      className="py-[100px] bg-gradient-to-r from-slate-300 to-[#f9f9f9]"
      onClick={() => {
        setOpened(false);
      }}
    >
      <div className="container">
        <div className="flex gap-6 flex-wrap justify-center lg:justify-around items-center">
          <SideLogo />
          <TextArea>
            <div className="min-h-[350px] flex items-center justify-center">
              <h1 className="text-[35px] font-bold uppercase text-gradient text-center my-auto ">
                Coming Soon
              </h1>
            </div>
          </TextArea>
        </div>
      </div>
    </div>
  );
};

export default TradingKingFlutterApp;
