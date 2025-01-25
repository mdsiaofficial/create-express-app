import express from "express";
import { homeController } from "../controllers/indexController.js";

export const router = express.Router();

router.get("/", homeController);
