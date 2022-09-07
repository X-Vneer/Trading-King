import React from "react";

const Hero = () => {
  const svg = (
    <svg
      className=" h-fit"
      data-name="Layer 1"
      width="100%"
      viewBox="0 0 721.16801 687.80201"
    >
      <path
        id="ae5c11dc-7e77-468a-a39f-cc8da6ee1565-188"
        data-name="Path 1495"
        d="M368.748,790.71V410.9a8.82,8.82,0,0,1,8.82-8.82h39.36a8.82,8.82,0,0,1,8.82,8.82h0V791.7Z"
        transform="translate(-189.41599 -106.099)"
        fill="rebeccapurple"
      />
      <path
        id="bc696f83-47b6-45c9-967f-bb64f1f3bee5-189"
        data-name="Path 1496"
        d="M498.748,791.9v-302a8.82,8.82,0,0,1,8.82-8.82h39.36a8.82,8.82,0,0,1,8.82,8.82h0V791.25Z"
        transform="translate(-189.41599 -106.099)"
        fill="#3f3d56"
      />
      <path
        d="M267.747,433.09884a2.9998,2.9998,0,0,1-2.23278-5.00244l131.60547-146.791L526.638,354.03488,656.92679,129.53732,789.65458,238.78244a3.00008,3.00008,0,1,1-3.813,4.63281L658.56937,138.66037,528.85819,362.16281,398.37614,288.8923,269.9816,432.10129A2.99144,2.99144,0,0,1,267.747,433.09884Z"
        transform="translate(-189.41599 -106.099)"
        fill="#3f3d56"
      />
      <circle
        id="a1f8771a-4bf9-4603-9747-6ae739e4ad47"
        data-name="Ellipse 300"
        cx="77.832"
        cy="324"
        r="28"
        fill="#c544fc"
      />
      <circle
        id="ffdbdf53-78c2-412f-9ede-372406e5d245"
        data-name="Ellipse 301"
        cx="207.832"
        cy="179"
        r="28"
        fill="#ccc"
      />
      <circle
        id="b7cff929-f00d-4f86-944c-e500b6ceb6ad"
        data-name="Ellipse 302"
        cx="337.832"
        cy="252"
        r="28"
        fill="#e6e6e6"
      />
      <circle
        id="eabc0b76-6faa-4fa0-934c-daff28b491dd"
        data-name="Ellipse 303"
        cx="467.832"
        cy="28"
        r="28"
        fill="#c544fc"
      />
      <circle
        id="a7ca0488-8ee6-49e2-b245-2872b84c042e"
        data-name="Ellipse 304"
        cx="636.832"
        cy="169.535"
        r="28"
        fill="#c544fc"
      />
      <path
        id="b3465432-03e0-48eb-8016-b04aa244e72c-191"
        data-name="Path 1513"
        d="M758.748,790.554V352.8c0-5.614,3.949-10.166,8.82-10.166h39.36c4.871,0,8.82,4.551,8.82,10.166V791.7Z"
        transform="translate(-189.41599 -106.099)"
        fill="#3f3d56"
      />
      <path
        id="ef6ae9ea-be37-4bc6-b1be-067860dc7e9d-195"
        data-name="Path 1514"
        d="M238.747,791.149V579.808c0-2.71,3.949-4.908,8.82-4.908h39.36c4.871,0,8.82,2.2,8.82,4.908V791.7Z"
        transform="translate(-189.41599 -106.099)"
        fill="#3f3d56"
      />
      <path
        id="b4c810f7-8361-4f56-9780-d97c96bbbba4-196"
        data-name="Path 944"
        d="M1009.585,793.901H190.416a1,1,0,1,1,0-2h819.168a1,1,0,0,1,0,2Z"
        transform="translate(-189.41599 -106.099)"
        fill="#e6e6e6"
      />
      <path
        id="b32730d1-ac43-40b1-a176-73e18bf362e5-197"
        data-name="Path 1515"
        d="M628.747,790.405V293.635c0-6.371,3.949-11.536,8.82-11.536h39.36c4.871,0,8.82,5.165,8.82,11.536V791.7Z"
        transform="translate(-189.41599 -106.099)"
        fill="#c544fc"
      />
    </svg>
  );
  return (
    <section className="bg-gradient-to-r from-slate-300 to-[#f9f9f9]">
      <div className="container py-[100px]">
        <div className="flex flex-col sm:flex-row justify-between items-center min-h-[70vh]">
          <div className="basis-[520px] text-center sm:text-left">
            <h1 className="text-5xl font-bold uppercase mb-6 text-gradient">
              Trading king
            </h1>
            <h3 className="font-bold text-2 text-4xl mb-6 text-[#203446] capitalize  leading-normal">
              Keep Track of your important Stocks at one place
            </h3>
            <p className=" text-2xl text-slate-500 font-semibold">
              Real-time stock prices for international markets.
            </p>
          </div>
          <div className="relative basis-[450px] w-full sm:w-auto">{svg}</div>
        </div>
        <div className="flex justify-center mt-[100px] sm:mt-[10px] sm:justify-start">
          <a
            href="#search"
            role="button"
            className="text-[18px] font-bold capitalize px-6 py-2 text-white rounded-3xl bg-gradient-to-r from-[#5d56d8] to-[#c544fc]"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
