import { Post } from "../model/Post.js";

export class PostService {

    static async findAll() {
        const posts = await Post.findAll();

        return posts;
    }

    static async save(req) {
        const { title, user_id } = req.body;
        const post = await Post.create({
            title, 
            user_id
        });
    
        return post;
    }

    static async findByUserId(req){
        const {user_id} = req.params;
        const post = await Post.findAll({where:{user_id}});
                
        return post;
    }

}
