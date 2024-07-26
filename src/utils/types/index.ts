import { z } from "zod";
import { UserSchema } from "../schemas";

export type User = z.infer<typeof UserSchema> & {
    id: string;
    created_at: Date;
}