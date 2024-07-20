import { User } from "../model/User.js";
import axios from "axios";
import bcrypt from "bcrypt";

export class UserService {

    static async findAll() {
        const users = await User.findAll({attributes:{exclude:['password']}});
        const usersAndPosts = await Promise.all(
            users.map(async(user)=>{
                try{ 
                    const response = await axios.get(`${process.env.POST_SERVICE_URL}/posts/user/${user.id}`);
                    const posts = response.data.post;

                    return {
                        user,
                        posts
                    }
                }catch(error){
                    console.log(`Error: ${error.message}`);
                    return {
                        user,
                        posts: []
                    }
                }
            })
        );

        return usersAndPosts;
    }

    static async save(req) {
        const { username, password } = req.body;
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create({username, password:hashPassword});
        const result = user.get({plain: true});
        delete result.password;
    
        return result;
    }

    static async findUserByName(req){
        const { username } = req.params;
        const user = await User.findOne({where:{username}});
        
        return user;
    }

}
