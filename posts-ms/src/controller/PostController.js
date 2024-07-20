import { PostService } from "../service/PostService.js";

export class PostController{
    static async findAll(req, res){
        try{
            const posts = await PostService.findAll();
            res.status(200).json({posts});
        }catch(error){
            res.status(500).json({message: error.message});
        }
    }

    static async save(req, res){
        try{
            const post = PostService.save(req);
            res.status(201).json({post});
        }catch(error){
            res.status(500).json({message: error.message});
        }
    }

    static async findByUserId(req, res){
        try{
            const post = await PostService.findByUserId(req);
            res.status(200).json({post});
        }catch(error){
            res.status(500).json({message: error.message});
        }
    }
}
