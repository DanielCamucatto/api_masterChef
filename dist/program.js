"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const startUp_1 = __importDefault(require("./routes/startUp"));
let port = "5000";
startUp_1.default.app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`);
});