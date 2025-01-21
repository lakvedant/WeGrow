import { Schema, model, models } from 'mongoose';

// Define the Hub Schema if not already defined in this file or imported from another file
const HubSchema = new Schema({
  // Hub fields go here
  // ...
});

const BookmarkSchema = new Schema({
  symbol: String,
  name: String,
});

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
  },
  photo: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  ownedHubs: [{
    type: Schema.Types.ObjectId,
    ref: 'Hub',
  }],
  joinedHubs: [{
    type: Schema.Types.ObjectId,
    ref: 'Hub',
  }],
  bookmarks: [BookmarkSchema]
  
});

const User = models?.User || model('User', UserSchema);

export default User;
