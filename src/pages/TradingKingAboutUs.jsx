import React from "react";

import SideLogo from "../components/SideLogo";
import TextArea from "../components/TextArea";

const TradingKingAboutUs = () => {
  return (
    <div className="py-[100px] bg-gradient-to-r from-slate-300 to-[#f9f9f9]">
      <div className="container">
        <div className="flex gap-6 flex-wrap justify-center lg:justify-around items-center">
          <SideLogo />
          <TextArea>
            <div className="text-center md:text-left">
              <h2 className="text-[20px] font-bold uppercase text-gradient mb-3">
                About us:
              </h2>
              <p className="leading-relaxed mb-4">
                Trading King is a{" "}
                <abbr title="Single Page Application">SPA</abbr> built using the
                most popular JS library{" "}
                <a
                  href="https://reactjs.org/"
                  className="font-bold uppercase text-gradient"
                >
                  REACT
                </a>{" "}
                ,{" "}
                <a
                  href="https://tailwindcss.com/"
                  className="font-bold uppercase text-gradient"
                >
                  Tailwind css
                </a>{" "}
                for styles and{" "}
                <a
                  href="https://apexcharts.com/"
                  className="font-bold uppercase text-gradient"
                >
                  apexcharts js
                </a>{" "}
                for chart component.
              </p>
              <p className="mb-4">
                Trading king uses the{" "}
                <a
                  className="font-bold uppercase text-gradient"
                  href="https://finnhub.io/"
                >
                  Finnhub Stock API
                </a>{" "}
                the most powerful stock API on the market.
              </p>
              <h3 className="text-lg font-semibold">
                Trading King was built from scratch by{" "}
                <a
                  href="mailto:xv.neer.business@gmail.com"
                  className="font-bold text-gradient"
                >
                  Moneer A. Mizyed
                </a>{" "}
                contact me for businesses.
              </h3>
            </div>
          </TextArea>
        </div>
      </div>
    </div>
  );
};

export default TradingKingAboutUs;
