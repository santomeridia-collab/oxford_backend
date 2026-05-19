// src/modules/admin/admin.service.ts

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { AdminModel } from "./auth.model";

export const registerAdmin =
  async (
    email: string,
    password: string
  ) => {

    const existingAdmin =
      await AdminModel.findOne({
        email,
      });

    if (existingAdmin) {
      throw new Error(
        "Admin already exists"
      );
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const admin =
      await AdminModel.create({
        email,
        password: hashedPassword,
      });

    return admin;
  };

export const loginAdmin =
  async (
    email: string,
    password: string
  ) => {

    const admin =
      await AdminModel.findOne({
        email,
      });

    if (!admin) {
      throw new Error(
        "Invalid credentials"
      );
    }

    const isMatch =
      await bcrypt.compare(
        password,
        admin.password
      );

    if (!isMatch) {
      throw new Error(
        "Invalid credentials"
      );
    }

    const token =
      jwt.sign(
        {
          adminId: admin._id,
        },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "7d",
        }
      );

    return {
      token,
      admin: {
        _id: admin._id,
        email: admin.email,
      },
    };
  };