import { Router } from "express";
import getKeys from "../controllers/key/getKeys.js";
import updateKeyStatus from "../controllers/key/updateKeyStatus.js";
import uploadId from "../controllers/upload/uploadId.js";

import role from "../middlewares/role.js";
import { upload } from "../middlewares/upload.js";

const router = Router();

// router.get("/", role(["deanOfacademics", "advisor"]), getKeys);

router.post("/history",role(["deanOfacademics", "advisor", "admin"]), getKeys);

router.put("/status", role(["helper"]), updateKeyStatus);

export default router;
