import React from "react";
import ReactPlayer from "react-player";

export default function IntroVIdeo() {
  return (
    <div className="w-full px-10 lg:px-20 flex justify-center items-center overflow-clip">
      <div className="w-full aspect-video rounded-xl lg:rounded-3xl overflow-clip">
        <ReactPlayer
          url="https://youtu.be/w_-pQD86Cqs"
          light="https://i.postimg.cc/Df9Yx8ZC/Toolong-by-Sepogung-Pengembangan-Startup-Digital-2022-2023-2-51-screenshot.png"
          playing={true}
          controls={false}
          width="100%"
          height={"100%"}
        />
      </div>
    </div>
  );
}
