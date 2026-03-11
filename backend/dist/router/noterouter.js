"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notecont_1 = require("../controller/notecont");
const router = express_1.default.Router();
router.post("/", notecont_1.addnote);
router.get("/", notecont_1.getallnote);
router.get("/:id", notecont_1.getnotebyid);
router.delete("/:id", notecont_1.deletnote);
router.delete("/", notecont_1.deletallnote);
router.put("/state/:id", notecont_1.updatestate);
router.put("/:id", notecont_1.updatenote);
exports.default = router;
