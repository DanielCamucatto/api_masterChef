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
Object.defineProperty(exports, "__esModule", { value: true });
const newsService_1 = require("../services/newsService");
const express_1 = require("express");
class NewsController {
    constructor() {
        this.__service = new newsService_1.NewsService();
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const page = req.params.page ? parseInt(req.params.page) : 1;
                const qtd = req.params.qtd ? parseInt(req.params.qtd) : 10;
                let result = yield this.__service.getAll(page, qtd);
                res.status(200).json({ result });
            }
            catch (e) {
                express_1.response.status(500).json({ e: e.message || e.toString() });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params.id;
                let result = yield this.__service.get(_id);
                res.status(200).json({ result });
            }
            catch (e) {
                res.status(500).json({ e: e.message || e.toString() });
            }
        });
    }
}
exports.default = new NewsController();
