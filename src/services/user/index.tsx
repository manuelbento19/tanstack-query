import { api } from "../../api";
import { UserDTO, UserResponse } from "../../utils/types";

export class UserService {

    async get(){
        const response = await api.get<UserResponse[]>("/users");
        return response.data;
    }

    async create(data:UserDTO){
        const response = await api.post<UserResponse>("/users",{
            ...data,
            created_at: new Date()
        });
        return response.data;
    }
    
    async delete(id:string){
        const response = await api.delete<UserResponse[]>(`/users/${id}`);
        return response.data;
    }
}