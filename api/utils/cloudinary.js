import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //to upload files
    const res = await cloudinary.uploader(localFilePath, {
      resource_type: "auto",
    });
    console.log("file has been uploaded in cloudinary", res.url);
    return res;
  } catch (error) {
    //remove locally save temporary file as upload failed
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };
