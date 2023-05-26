import React from "react";

/**
 * Renders the top buttons for selecting predefined cities.
 * @param {Object} props - The component props.
 * @param {Function} props.setQuery - A function to set the search query for weather information.
 * @returns {JSX.Element} The rendered TopButtons component.
 */
function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Delhi",
    },
    {
      id: 2,
      title: "Mumbai",
    },
    {
      id: 3,
      title: "Agra",
    },
    {
      id: 4,
      title: "Mathura",
    },
    {
      id: 5,
      title: "Srinagar",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-[#00FFCA] text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
