import React, { useContext } from "react";
import { MainContext } from "../Context/Context";

export const MediaModal = ({ isVisible }) => {
  const { setmodalVisible } = useContext(MainContext);

  const handleClose = (e) => {
    if (e.target.id === "modalBackground") {
      setmodalVisible(false);
    }
  };

  if (!isVisible) return null;
  return (
    <div
      className=" fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={handleClose}
      id="modalBackground"
    >
      <div className="bg-white border-4 border-black w-[1000px] h-[560px] rounded-[30px] overflow-hidden flex relative">
        <div
          className="absolute top-6 right-6 hover:cursor-pointer"
          onClick={() => setmodalVisible(false)}
        >
          <img className="h-6" src="/images/close.png" alt="close" />
        </div>
        <div className="main bg-white flex w-[100%]">
          <div className="left w-[50%] flex flex-col items-center p-4">
            <div className="video border-4 border-black overflow-hidden rounded-[30px] m-4 relative">
              {/* add the image here */}
              <img
                className="h-[250px] w-[450px] "
                src="https://www.pinkvilla.com/images/2023-06/1649626176_.jpg"
                alt="extraction2"
              />
              <div className="play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                {/* Add the link here */}
                <a href="https://youtu.be/Y274jZs5s7s?si=nePXEnf_4ul5NJma">
                  <img
                    className="h-20 hover:cursor-pointer"
                    src="/images/play.png"
                    alt="play"
                  />
                </a>
              </div>
            </div>
            <div className="detail w-[420px] flex justify-between items-center m-2 ">
              {/* add the name here */}
              <div className="title text-3xl font-bold">Extraction</div>
              {/* add the genre here */}
              <div className="genre">Action</div>
            </div>
            {/* add the description here */}
            <div className="description w-[410px] mt-6 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              soluta earum quasi est ratione? Molestias earum quasi laboriosam?
              Eos repellat quibusdam, libero culpa facilis tempore nihil rerum
              itaque reiciendis vel.
            </div>
          </div>
          <div className="center h-[100%] flex items-center justify-center">
            <div className="border-[3px] border-black h-3/4"></div>
          </div>
          <div className="right w-[50%] flex items-center justify-center">
            <div className="watch border-4 border-black w-[200px] h-[70px] flex justify-center items-center rounded-[20px] hover:cursor-pointer ">
              {/* add the watch link here */}
              <div className="text-2xl font-bold">Watch Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};