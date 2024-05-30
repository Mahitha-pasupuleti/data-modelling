import mongoose from 'mongoose';

const hoursInEachHospital = new mongoose.Schema({
  hospitalName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital',
  },
  numberOfHours: {
    type: Number,
    required: true,
    default: 0,
  },
});

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
    },
    qualifications: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      required: true,
      default: 0,
    },
    worksInHospitals: [hoursInEachHospital],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);
