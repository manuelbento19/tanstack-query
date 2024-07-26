import {z} from 'zod'

export const UserSchema = z.object({
    firstName: z.string().nonempty("Required field"),
    lastName: z.string().nonempty("Required field"),
    email : z.string().email().nonempty("Required field"),
})