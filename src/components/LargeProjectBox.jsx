import React from "react";

const LargeProjectBox = ({
  name,
  description,
  img_src1,
  img_src2,
  skills,
  category,
  participants,
  time,
  link,
}) => {
  return (
    <div className="w-11/12 bg-gray-200 mx-auto my-5 px-5 py-3 rounded-md text-black">
      <p className="text-xl font-bold">{name}</p>
      <div className="px-3">
        {participants != null && <p>Participants: {participants}</p>}
        <p>{description.overall}</p>
        <p>{description.do}</p>
        <p>{description.result}</p>
        {img_src1 != null && (
          <div className="flex-col w-8/12 mx-auto">
            <img src={img_src1} className="mx-auto my-3 rounded-lg" />
            <img src={img_src2} className="mx-auto my-3 rounded-lg" />
          </div>
        )}

        {link != "#" && (
          <a href={link} className="text-cyan-700" target="_blank">
            See detail
          </a>
        )}
        <div className="flex flex-row-reverse">
          <div className="basis-1/2 flex flex-col ">
            <p className="basis-2/4">Category: {category}</p>
            <p className="basis-2/4">Skills: {skills}</p>
          </div>
          <div className="basis-1/2">
            <p>Time: {time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeProjectBox;
