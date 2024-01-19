import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const registerUser = asyncHandler(async (req, res) => {
  //get user from frontend
  const { username, email, fullName, password } = req.body;
  //check existing user
  if (
    [username, email, fullName, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }
});
//check existing users
const existedUser = User.findOne({
  $or: [{ username }, { email }],
});
if (existedUser) {
  throw new ApiError(409, "User with email and username already exists");
}

//local path
const avatarLocalPath = req.files?.avatar[0]?.path;
const coverImageLocalPath = req.files?.coverImage[0]?.path;

//check avatar
if (!avatarLocalPath) {
  throw new ApiError(400, "Avatar field is required");
}

//upload on cloudinary
const avatar = await uploadOnCloudinary(avatarLocalPath);
const coverImage = await uploadOnCloudinary(coverImageLocalPath);

//check avatar for cloudinary
if (!avatar) {
  throw new ApiError(400, "Avatar field is required");
}

//databse entry

export { registerUser };
