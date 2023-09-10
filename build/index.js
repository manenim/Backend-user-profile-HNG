"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userDB_1 = __importDefault(require("./data/userDB"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/api', (req, res) => {
    let q = req.query;
    console.log(q);
    res.status(200).json(userDB_1.default);
});
app.listen(PORT, () => console.log(`server listening at port 3000`));
