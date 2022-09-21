import mongoose from 'mongoose';
const { Schema } = mongoose;

const countSchema = new Schema(
  {
    count_value: {
      type: String,
      required: [true, 'Count value is required'],
    },
  },
  { versionKey: false }
);

export default countSchema;
