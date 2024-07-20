import { UserService } from "../service/UserService.js";

export class UserController {

    static async findAll(req, res){
        try{
            const usersAndPosts = await UserService.findAll();
            res.status(200).json({usersAndPosts});
        }catch(error){
            res.status(500).json({message: error.message});
        }
    }

    static async save(req, res){
        try{
            const result = await UserService.save(req);
            res.status(201).json({result});
        }catch(error){
            res.status(500).json({message: error.message});
        }
    }

    static async findUserByName(req, res){
        try{
            const user = await UserService.findUserByName(req);
            res.status(200).json({user});
        }catch(error){
            res.status(500).json({message: error.message});
        }
    }
    
}
