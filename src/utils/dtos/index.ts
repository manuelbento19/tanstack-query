import { User } from "../types";

export type CreateUserDTO = Omit<User,"id"|"created_at">