import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { IconDirections } from "@tabler/icons-react";
import { IconPointFilled } from "@tabler/icons-react";
import {
  IconMapPin,
  IconUsers,
  IconCalendar,
  IconPlayerPlay,
} from "@tabler/icons-react";

import {
  IconWifi,
  IconParkingCircle,
  IconToolsKitchen3,
  IconBathFilled,
} from "@tabler/icons-react";

const amenityIcons = {
  wifi: <IconWifi stroke={2} className="text-[10px] mt-1" />,
  parking: <IconParkingCircle stroke={2} className="text-[10px] mt-1" />,
  kitchen: <IconToolsKitchen3 stroke={2} className="text-[10px] mt-1" />,
  bathroom: <IconBathFilled stroke={2} className="text-[10px] mt-1" />,
};

const HeroSection = () => {
  const navigate = useNavigate();
  const [listings, setListings] = useState({});
  const [searchParams, setSearchParams] = useState({
    location: "",
    beds: "",
    date: "",
  });

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/booking-page", { state: { searchParams } });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/listings/")
      .then((res) => {
        // Check if res.data is an array before setting it to state
        if (Array.isArray(res.data)) {
          setListings(res.data);
          console.log("Data fetched successfully:", res.data);
        } else {
          console.error("Expected an array but got:", res.data);
          setListings([]); // Set to an empty array if data is invalid
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setListings([]); // Set to an empty array in case of an error
      });
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/cOverview.jpg"
          alt="Room Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/95"></div>
      </div>

      {/* Content */}
      <div className="relative w-full mx-auto px-4 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            We Find The Best Room For You
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Find comfortable and affordable student accommodation near SLIIT
            University. Choose from our selection of well-equipped rooms
            starting from LKR 4,000/month.
          </p>

          {/* Video Button */}
          <button className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 text-gray-900 hover:bg-gray-50 transition shadow-md">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
              <IconPlayerPlay size={20} className="text-gray-900 ml-0.5" />
            </div>
            <span className="font-medium">Watch Video</span>
          </button>
        </motion.div>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg p-6 shadow-lg max-w-5xl mx-auto"
        >
          <form
            onSubmit={handleSearch}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {/* Location Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location / Uni
              </label>
              <div className="relative">
                <IconMapPin
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search For A Uni"
                  value={searchParams.location}
                  onChange={(e) =>
                    setSearchParams({
                      ...searchParams,
                      location: e.target.value,
                    })
                  }
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Beds Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Beds
              </label>
              <div className="relative">
                <IconUsers
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <select
                  value={searchParams.beds}
                  onChange={(e) =>
                    setSearchParams({ ...searchParams, beds: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 appearance-none bg-white"
                >
                  <option value="">How many Beds?</option>
                  <option value="1">Single Room - LKR 8,000/month</option>
                  <option value="2">Double Room - LKR 6,000/month</option>
                  <option value="3">Shared Room - LKR 4,500/month</option>
                  <option value="4">Group Room - LKR 4,000/month</option>
                </select>
              </div>
            </div>

            {/* Date Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <div className="relative">
                <IconCalendar
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="date"
                  placeholder="Pick a date"
                  value={searchParams.date}
                  onChange={(e) =>
                    setSearchParams({ ...searchParams, date: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full px-8 py-3 bg-amber-400 text-gray-900 rounded-lg font-semibold hover:bg-amber-500 transition focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                Search
              </button>
            </div>
          </form>
        </motion.div>
        <div className="px-20 flex flex-wrap justify-baseline gap-5">
          {Array.isArray(listings) &&
            listings.map((listing) => (
              <Link to={`/booking-page/${listing._id}`}>
                <div
                  key={listing._id} // Use listing._id instead of listing.id (MongoDB uses _id)
                  className="w-[300px] h-[320px] p-4 rounded-lg shadow-md shadow-slate-500 mt-16"
                >
                  <div>
                    {listing.images && listing.images.length > 0 ? (
                      <img
                        src={`http://localhost:5000/images/${listing.images[0]}`}
                        alt="Listing Image"
                        className="rounded-xl w-full h-[150px] object-cover"
                      />
                    ) : (
                      <p className="text-gray-500">No image available</p>
                    )}
                  </div>

                  {/* Render title and price */}
                  <div className="">
                    <h1 className="text-xl font-bold mt-2">{listing.title}</h1>
                  </div>

                  {/* Render location */}
                  <div className="flex justify-between items-center mt-3">
                    <h1 className="flex justify-start gap-2 items-center mt-2">
                      <IconDirections stroke={2} className="text-red-700" />
                      {listing.location}
                    </h1>
                    <h1 className=" text-right">
                      <span className="text-red-700 font-semibold">
                        Rs.{listing.price}
                      </span>{" "}
                      month
                    </h1>
                  </div>
                  <ul>
                    <p className="flex justify-baseline items-center gap-3 flex-wrap">
                      {listing.amenities.map((amenity, index) => (
                        <li
                          key={index}
                          className="flex justify-start gap-2 items-center mt-2"
                        >
                          {amenityIcons[amenity] || (
                            <IconPointFilled
                              stroke={2}
                              className="text-[10px] mt-1"
                            />
                          )}
                          {amenity}
                        </li>
                      ))}
                    </p>
                  </ul>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
