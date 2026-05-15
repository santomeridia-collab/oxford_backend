import multer from "multer";
import multerS3 from "multer-s3";
import { s3 } from "../config/s3";

export const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.AWS_BUCKET as string,

    contentType: multerS3.AUTO_CONTENT_TYPE,

    key: (_req, file, cb) => {
      const fileName = `hero/${Date.now()}-${file.originalname}`;
      cb(null, fileName);
    },
  }),
});