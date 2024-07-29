import { z } from "zod";
import { UserSchema } from "../schemas";

export type UserDTO = z.infer<typeof UserSchema>

export type UserResponse = UserDTO & {
    id: string;
    created_at: Date;
}