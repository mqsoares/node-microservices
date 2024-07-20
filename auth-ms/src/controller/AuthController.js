import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import axios from 'axios';

export class AuthController {

    static async login(req, res) {
        try{
            const {username, password} = req.body;

            if(!username && !password) {
                res.status(422).json({message: "O campo login e senha são obrigatórios."});
            }

            const response = await axios.get(`${process.env.SERVICE_GATEWAY_URL}/${process.env.USER_SERVICE_NAME}/users/${username}`);
            const user = response.data.user;
            if(!user) {
                res.status(404).json({message: "Usuário não encontrado"});
            }

            const isPasswordHash = await bcrypt.compare(password, user.password);
            if(!isPasswordHash) {
                res.status(401).json({message: "Login ou senha inválidos."});
            }

            const token = jwt.sign({ id: user.id }, process.env.PRIVATE_KEY, { 
                expiresIn: '1h' 
            });

            res.status(200).json({token});
        }catch(error){
            res.status(500).json({message: error.message});
        }
    }
    
}
