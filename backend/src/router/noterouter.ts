import express from "express";
import {
  addnote,
  getallnote,
  getnotebyid,
  deletnote,
  deletallnote,
  updatenote,
  updatestate,
} from "../controller/notecont";
const router = express.Router();
router.post("/", addnote);
router.get("/", getallnote);
router.get("/:id", getnotebyid);
router.delete("/:id", deletnote);
router.delete("/", deletallnote);
router.put("/state/:id", updatestate);
router.put("/:id", updatenote);

export default router;
