import React from "react";
import { Content } from "./Content";

export const Body = () => {
  //this data can be accessed from the backend -- this is just dummy data
  const data = [
    {
      type: "Movies",
      media: [
        {
          poster: "dummyposter.jpeg",
          trailer: "dummy/youtubeurl",
          title: "Dummy Title",
          genre: "Dummy Genre",
          description: "Dummy Description",
          link: "dummy movie link",
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ],
    },
    {
      type: "TV Shows",
      media: [
        {
          poster: "dummyposter.jpeg",
          trailer: "dummy/youtubeurl",
          title: "Dummy Title",
          genre: "Dummy Genre",
          description: "Dummy Description",
          seasons: [
            {
              season: 1,
              episodes: [
                {
                  episode: 1,
                  title: "Dummy Title",
                  thumbanail: "dummythumbnail.jpeg",
                  link: "dummy link",
                },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
            },
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
          ],
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ],
    },
  ];

  return (
    <>
      <div className="">
        {data.map((item, index) => {
          return <Content key={index} type={item.type} media={item.media} />;
        })}
      </div>
    </>
  );
};
