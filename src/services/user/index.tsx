import { api } from "../../api";
import { User } from "../../utils/types";

export class UserService {

    async get(){
        const response = await api.get<User[]>("/users");
        return response.data;
    }
}