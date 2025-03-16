const Boarding = require("../models/listing_model.js");

//@desc - Get all listings
//@Route - GET /listings/
const getAllListings = (req, res) => {
  Boarding.find()
    .then((Boarding) => res.status(200).json(Boarding))
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

// const addListing = async (req, res) => {
//   try {
//     const imageFilenames = req.files.map((file) => file.filename);

//     const boarding = new Boarding({
//       title: req.body.title,
//       Description: req.body.Description,
//       location: req.body.location,
//       price: Number(req.body.price),
//       amenities: req.body.amenities,
//       images: imageFilenames,
//     });

//     await boarding.save();
//     res.json({ success: true, message: "Boarding added" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

const addListing = async (req, res) => {
  try {
    const imageFilenames = req.files.map((file) => file.filename);

    const boarding = new Boarding({
      title: req.body.title,
      Description: req.body.Description, // Ensure this matches the frontend
      location: req.body.location,
      price: Number(req.body.price),
      amenities: Array.isArray(req.body.amenities)
        ? req.body.amenities
        : [req.body.amenities], // Handle single or multiple amenities
      images: imageFilenames,
    });

    await boarding.save();
    res.json({ success: true, message: "Boarding added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//

//@desc - Get each listing by id
//@Route - GET /listings/:id
const getSingleListing = (req, res) => {
  Boarding.findById(req.params.id)
    .then((Boarding) => res.status(200).json(Boarding))
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

//@desc - Update listing
//@Route - PUT /listings/update/:id
const updateListing = (req, res) => {
  Boarding.findById(req.params.id)
    .then((Boarding) => {
      Boarding.title = req.body.title;
      Boarding.Description = req.body.Description;
      Boarding.location = req.body.location;
      Boarding.price = req.body.price;
      Boarding.amenities = req.body.amenities;
      Boarding.images = req.body.images;

      Boarding.save()
        .then(() => res.status(200).json("Boarding updated"))
        .catch((err) => res.status(400).json({ Error: err }));
    })

    .catch((err) => res.status(400).json({ Erro: err }));
};

//@desc - Delete listing
//@Route - DELETE /listings/:id
const deleteListing = (req, res) => {
  Boarding.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Boarding deleted"))
    .catch((err) => res.status(400).json({ Error: err }));
};

module.exports = {
  getAllListings,
  addListing,
  getSingleListing,
  updateListing,
  deleteListing,
};
