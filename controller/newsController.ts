import { NewsService } from "../services/newsService";
import { Request, response, Response } from "express";

class NewsController {
    private __service: NewsService; 

    constructor(){
        this.__service = new NewsService()
    }

    async get(req: Request, res: Response) {
        try {
            const page = req.params.page ? parseInt(req.params.page): 1; 
            const qtd = req.params.qtd ? parseInt(req.params.qtd): 10; 

            let result = await this.__service.getAll(page, qtd); 
            res.status(200).json({result}); 
        } 
        catch (e) {
                response.status(500).json({e: e.message || e.toString()})
        } 
    }

    async getById(req: Request, res: Response){
        try {
            const _id = req.params.id; 
            let result = await this.__service.get(_id); 
            res.status(200).json({result});
        }
        catch(e) {
            res.status(500).json({e: e.message || e.toString()})
        }
    }
}
export default new NewsController();