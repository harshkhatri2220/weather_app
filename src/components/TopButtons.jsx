import React from "react";

const TopButtons = ({setCityPassed}) => {
  const city = [
    {
      id: 1,
      location: "London",
    },
    {
      id: 2,
      location: "Sydney",
    },
    {
      id: 3,
      location: "Toronto",
    },
    {
      id: 4,
      location: "Paris",
    },
    {
      id: 5,
      location: "Tokyo",
    },
  ];

  return (
    <div
      
    >
      <div className=" flex items-center justify-around  ">
        {city.map(({ id, location }) => {
          return (
            <button key={id} className=" text-white  font-medium "
            onClick={()=>setCityPassed({q:location})}>
              {location}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TopButtons;
