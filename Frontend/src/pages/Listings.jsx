// import React, { useState } from "react";
// import Sidebar from "../components/sidebar/Sidebar";
// import { motion } from "framer-motion";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Listings = () => {
//   const navigate = useNavigate();

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//   };

//   // State for form fields
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [location, setLocation] = useState("");
//   const [price, setPrice] = useState("");
//   const [amenities, setAmenities] = useState([]);
//   const [images, setImages] = useState([]);

//   // Available amenities
//   const availableAmenities = [
//     { id: "wifi", label: "Wi-Fi" },
//     { id: "parking", label: "Parking" },
//     { id: "kitchen", label: "Kitchen" },
//     { id: "ac", label: "A/C" },
//   ];

//   // Handle amenity selection
//   const handleAmenityChange = (event) => {
//     const { value, checked } = event.target;
//     if (checked) {
//       setAmenities([...amenities, value]);
//     } else {
//       setAmenities(amenities.filter((item) => item !== value));
//     }
//   };

//   // Handle image upload
//   const handleImageUpload = (event) => {
//     const files = Array.from(event.target.files);
//     if (files.length > 6) {
//       alert("You can only upload up to 6 images.");
//       return;
//     }
//     setImages(files);
//   };

//   //   Handle form submission
//   //   const handleSubmit = async (event) => {
//   //     event.preventDefault();

//   //     const formData = new FormData();
//   //     formData.append("title", title);
//   //     formData.append("description", description);
//   //     formData.append("location", location);
//   //     formData.append("price", price);
//   //     amenities.forEach((amenity) => formData.append("amenities", amenity));
//   //     images.forEach((image) => formData.append("images", image));

//   //     try {
//   //       const response = await fetch("http://localhost:5000/listings/add", {
//   //         method: "POST",
//   //         body: formData,
//   //       });
//   //       const result = await response.json();
//   //       console.log("Listing created:", result);
//   //       alert("Listing created successfully!");
//   //     } catch (error) {
//   //       console.error("Error creating listing:", error);
//   //       alert("Error creating listing. Please try again.");
//   //     }
//   //   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const data = {
//       title,
//       description,
//       location,
//       price,
//       amenities,
//       images,
//     };

//     axios
//       .post("http://localhost:5000/listings/add", data)
//       .then(() => navigate("/myListings"));
//     console.log(data).catch((err) => {
//       alert("Something went wrong...");
//       console.log(err);
//     });
//   };

//   //   const contentVariants = {
//   //     hidden: { opacity: 0, y: 20 },
//   //     visible: {
//   //       opacity: 1,
//   //       y: 0,
//   //       transition: {
//   //         duration: 0.4,
//   //         ease: "easeOut",
//   //       },
//   //     },
//   //   };

//   return (
//     <div>
//       <Sidebar />
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="flex-1 ml-50 p-8 lg:p-12"
//       >
//         <h1 className="text-3xl font-bold mb-8 text-gray-800">
//           Create a New Listing
//         </h1>
//         <form className="bg-white p-8 rounded-lg shadow-md">
//           {/* Title */}
//           <div className="mb-6">
//             <label className="block text-gray-700 font-semibold mb-2">
//               Title
//             </label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Description */}
//           <div className="mb-6">
//             <label className="block text-gray-700 font-semibold mb-2">
//               Description
//             </label>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               rows="4"
//               required
//             />
//           </div>

//           {/* Location */}
//           <div className="mb-6">
//             <label className="block text-gray-700 font-semibold mb-2">
//               Location
//             </label>
//             <input
//               type="text"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Price */}
//           <div className="mb-6">
//             <label className="block text-gray-700 font-semibold mb-2">
//               Price
//             </label>
//             <input
//               type="number"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Amenities */}
//           <div className="mb-6">
//             <label className="block text-gray-700 font-semibold mb-2">
//               Amenities
//             </label>
//             <div className="grid grid-cols-2 gap-4">
//               {availableAmenities.map((amenity) => (
//                 <div key={amenity.id} className="flex items-center">
//                   <input
//                     type="checkbox"
//                     id={amenity.id}
//                     value={amenity.id}
//                     checked={amenities.includes(amenity.id)}
//                     onChange={handleAmenityChange}
//                     className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                   />
//                   <label htmlFor={amenity.id} className="ml-2 text-gray-700">
//                     {amenity.label}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Images */}
//           <div className="mb-6">
//             <label className="block text-gray-700 font-semibold mb-2">
//               Images (Up to 6)
//             </label>
//             <input
//               type="file"
//               multiple
//               onChange={handleImageUpload}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               accept="image/*"
//               required
//             />
//             <p className="text-sm text-gray-500 mt-2">Upload up to 6 images.</p>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className=" cursor-pointer bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
//             onClick={handleSubmit}
//           >
//             Create Listing
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default Listings;

// import React, { useState } from "react";
// import Sidebar from "../components/sidebar/Sidebar";
// import { motion } from "framer-motion";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Listings = () => {
//   const navigate = useNavigate();

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//   };

//   // State for form fields
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [location, setLocation] = useState("");
//   const [price, setPrice] = useState("");
//   const [amenities, setAmenities] = useState([]);
//   const [images, setImages] = useState([]);

//   // Available amenities
//   const availableAmenities = [
//     { id: "wifi", label: "Wi-Fi" },
//     { id: "parking", label: "Parking" },
//     { id: "kitchen", label: "Kitchen" },
//     { id: "ac", label: "A/C" },
//   ];

//   // Handle amenity selection
//   const handleAmenityChange = (event) => {
//     const { value, checked } = event.target;
//     if (checked) {
//       setAmenities([...amenities, value]);
//     } else {
//       setAmenities(amenities.filter((item) => item !== value));
//     }
//   };

//   // Handle image upload
//   const handleImageUpload = (event) => {
//     const files = Array.from(event.target.files);
//     if (files.length > 6) {
//       alert("You can only upload up to 6 images.");
//       return;
//     }
//     setImages(files);
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create FormData object
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("location", location);
//     formData.append("price", price);
//     amenities.forEach((amenity) => formData.append("amenities", amenity));
//     images.forEach((image) => formData.append("images", image));

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/listings/add",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data", // Set the content type for file uploads
//           },
//         }
//       );
//       console.log("Listing created:", response.data);
//       alert("Listing created successfully!");
//       navigate("/myListings"); // Redirect after successful submission
//     } catch (error) {
//       console.error("Error creating listing:", error);
//       alert("Error creating listing. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <Sidebar />
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="flex-1 ml-50 p-8 lg:p-12"
//       >
//         <h1 className="text-3xl font-bold mb-8 text-gray-800">
//           Create a New Listing
//         </h1>
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white p-8 rounded-lg shadow-md"
//         >
//           {/* Title */}
//           <div className="mb-6">
//             <label className="block text-gray-700 font-semibold mb-2">
//               Title
//             </label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Description */}
//           <div className="mb-6">
//             <label className="block text-gray-700 font-semibold mb-2">
//               Description
//             </label>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               rows="4"
//               required
//             />
//           </div>

//           {/* Location */}
//           <div className="mb-6">
//             <label className="block text-gray-700 font-semibold mb-2">
//               Location
//             </label>
//             <input
//               type="text"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Price */}
//           <div className="mb-6">
//             <label className="block text-gray-700 font-semibold mb-2">
//               Price
//             </label>
//             <input
//               type="number"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Amenities */}
//           <div className="mb-6">
//             <label className="block text-gray-700 font-semibold mb-2">
//               Amenities
//             </label>
//             <div className="grid grid-cols-2 gap-4">
//               {availableAmenities.map((amenity) => (
//                 <div key={amenity.id} className="flex items-center">
//                   <input
//                     type="checkbox"
//                     id={amenity.id}
//                     value={amenity.id}
//                     checked={amenities.includes(amenity.id)}
//                     onChange={handleAmenityChange}
//                     className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                   />
//                   <label htmlFor={amenity.id} className="ml-2 text-gray-700">
//                     {amenity.label}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Images */}
//           <div className="mb-6">
//             <label className="block text-gray-700 font-semibold mb-2">
//               Images (Up to 6)
//             </label>
//             <input
//               type="file"
//               multiple
//               onChange={handleImageUpload}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               accept="image/*"
//               required
//             />
//             <p className="text-sm text-gray-500 mt-2">Upload up to 6 images.</p>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
//           >
//             Create Listing
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default Listings;

import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Listings = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // State for form fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [images, setImages] = useState([]);

  // Available amenities
  const availableAmenities = [
    { id: "wifi", label: "Wi-Fi" },
    { id: "parking", label: "Parking" },
    { id: "kitchen", label: "Kitchen" },
    { id: "ac", label: "A/C" },
  ];

  // Handle amenity selection
  const handleAmenityChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setAmenities([...amenities, value]);
    } else {
      setAmenities(amenities.filter((item) => item !== value));
    }
  };

  // Handle image upload
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 6) {
      alert("You can only upload up to 6 images.");
      return;
    }
    setImages(files);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object
    const formData = new FormData();
    formData.append("title", title);
    formData.append("Description", description); // Match backend field name
    formData.append("location", location);
    formData.append("price", price);
    amenities.forEach((amenity) => formData.append("amenities", amenity));
    images.forEach((image) => formData.append("images", image));

    try {
      const response = await axios.post(
        "http://localhost:5000/listings/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the content type for file uploads
          },
        }
      );
      console.log("Listing created:", response.data);
      alert("Listing created successfully!");
      navigate("/myListings"); // Redirect after successful submission
    } catch (error) {
      console.error("Error creating listing:", error);
      alert("Error creating listing. Please try again.");
    }
  };

  return (
    <div>
      <Sidebar />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 ml-50 p-8 lg:p-12"
      >
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Create a New Listing
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          {/* Title */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>

          {/* Location */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Price */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Price
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Amenities */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Amenities
            </label>
            <div className="grid grid-cols-2 gap-4">
              {availableAmenities.map((amenity) => (
                <div key={amenity.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={amenity.id}
                    value={amenity.id}
                    checked={amenities.includes(amenity.id)}
                    onChange={handleAmenityChange}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor={amenity.id} className="ml-2 text-gray-700">
                    {amenity.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Room Type */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Room Type
            </label>
            <select
              type="select"
              value=""
              onChange=""
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="volvo">Single Room</option>
              <option value="saab">Double Room</option>
              <option value="mercedes">Shared Room</option>
              <option value="audi">Group Room</option>
            </select>
          </div>

          {/* Images */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Images (Up to 6)
            </label>
            <input
              type="file"
              multiple
              onChange={handleImageUpload}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept="image/*"
              required
            />
            <p className="text-sm text-gray-500 mt-2">Upload up to 6 images.</p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Create Listing
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Listings;
