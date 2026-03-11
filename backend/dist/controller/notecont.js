"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatestate = exports.updatenote = exports.deletallnote = exports.deletnote = exports.getnotebyid = exports.getallnote = exports.addnote = void 0;
const note_1 = __importDefault(require("../models/note"));
//add note in the db
const addnote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newNote = yield note_1.default.create(req.body);
        res.json("note is created");
        console.log("note created");
    }
    catch (error) {
        res.json({
            message: "note not add",
            error,
        });
    }
});
exports.addnote = addnote;
//get all note for display in home
const getallnote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allnote = yield note_1.default.find();
        if (!allnote) {
            res.json("no note as detected");
        }
        else {
            res.json(allnote);
        }
    }
    catch (error) {
        res.json(error);
    }
});
exports.getallnote = getallnote;
// get note if clicked in the note in the home (all information)
const getnotebyid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const onenote = yield note_1.default.findById(req.params.id);
        if (!onenote) {
            res.json("this note not found");
        }
        else {
            res.json(onenote);
        }
    }
    catch (error) {
        res.json(error);
    }
});
exports.getnotebyid = getnotebyid;
//delet note if selected
const deletnote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletnote = yield note_1.default.findByIdAndDelete(req.params.id);
        if (!deletnote) {
            res.json("the note has not found");
        }
        else {
            res.json("the note has deleted");
        }
    }
    catch (error) {
        res.json(error);
    }
});
exports.deletnote = deletnote;
//delet all note from the note
const deletallnote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allnote = yield note_1.default.deleteMany();
        if (!allnote) {
            res.json("no note to deleted");
        }
        else {
            res.json("all note has deleted");
        }
    }
    catch (error) {
        res.json(error);
    }
});
exports.deletallnote = deletallnote;
//update note (set function if modify any and his clicked saved)
const updatenote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const noteupdated = yield note_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
    }
    catch (error) { }
});
exports.updatenote = updatenote;
// update state (completed or not completed)
const updatestate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatestate = yield note_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!updatestate) {
            res.json("the note not found");
        }
        else {
            res.json("the state is updated");
        }
    }
    catch (error) {
        res.json(error);
    }
});
exports.updatestate = updatestate;
