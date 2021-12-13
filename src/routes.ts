import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserControllers";
import { CreatePeopleController } from "./controllers/CreatePeopleControllers";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();
const createUserController = new CreateUserController;
const createPeopleController = new CreatePeopleController;

router.post("/users", createUserController.handle);
router.post("/peoples", ensureAdmin, createPeopleController.handle);

export { router };
