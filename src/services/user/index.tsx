import { api } from "../../api";
import { CreateUserDTO } from "../../utils/dtos";
import { User } from "../../utils/types";

export class UserService {

    async get(){
        const response = await api.get<User[]>("/users");
        return response.data;
    }

    async create(data:CreateUserDTO){
        const response = await api.post<User[]>("/users",{
            ...data,
            created_at: new Date()
        });
        return response.data;
    }
    async delete(id:string){
        const response = await api.delete<User[]>(`/users/${id}`);
        return response.data;
    }
}