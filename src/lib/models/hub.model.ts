import { Schema, model, models } from 'mongoose';

const HubSchema = new Schema({
  hubName: {
    type: String,
    required: true,
  },
  hubDescription: {
    type: String,
    required: true,
  },
  people: {
    type: Number,
    required: true,
  },
  currpeople: {
    type: Number,
    required: true,
  },
  m_invest: {
    type: Number,
    required: true,
  },
  invest_period: {
    type: Number,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  HubOwner: {
    type: Schema.Types.ObjectId, // Changed to ObjectId
    ref: 'User', // Reference to the User model
    required: true,
  },
  HubMembers: [{
    type: Schema.Types.ObjectId, // Changed to ObjectId
    ref: 'User', // Reference to the User model
    required: true,
  }],
  AvgReturn: {
    type: Number,
  },
  Risk: {
    type: Number,
  },
  imgurl: {
    type: String,
  }
}, { timestamps: true }); // Add timestamps

const Hub = models?.Hub || model("Hub", HubSchema);

export default Hub;
