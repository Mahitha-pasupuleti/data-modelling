import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema(
  {
    hospitalName: {
      type: String,
      required: true,
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: String, //some countries could have characters in pincode
      required: true,
    },
    specalizedIn: [
      {
        type: String,
      },
    ], // Array of specalizations for the hospital
  },
  { timestamps: true }
);

export const Hospital = mongoose.model('Hospital', hospitalSchema);
