import { X } from "@phosphor-icons/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserService } from "../../../../services/user";
import {toast} from "react-hot-toast";
import { UserDTO } from "../../../../utils/types";

type Props = {
    close: () => void;
}

export function Create({close}:Props) {
    const userService = new UserService();
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (data: UserDTO) => await userService.create(data),
        onSuccess: () => {
            toast.success("User registered successfully");
            close()
        },
        onError: (error:Error) => {
            toast.error(error.message)
        },
        onSettled: () => {
            queryClient.invalidateQueries({queryKey:["users"]});
        }
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> & {target: HTMLInputElement[]}) => {
        e.preventDefault();

        const [firstName,lastName,email] = e.target;
        const data = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value
        }
        mutation.mutate(data)
    } 

  return (
    <section className="fixed inset-0 z-50 flex after:absolute after:inset-0 after:bg-black/15 after:backdrop-blur-[2px]"> 
        <article className="relative z-[60] p-4 m-auto max-w-md w-full  bg-white rounded-lg shadow">
            <header className="flex justify-end">
                <button onClick={close} type="button" className="text-gray-400 bg-transparent hover:text-gray-900 p-1 rounded-lg text-sm">
                    <X className="size-5"/>
                </button>
            </header>
            <form onSubmit={handleSubmit} className="px-4 py-2 flex flex-col gap-3">
                <div className="w-full">
                    <label htmlFor="name" className="text-sm mb-1 text-slate-700">Name</label>
                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"/>
                </div>
                <div className="w-full">
                    <label htmlFor="lastName" className="text-sm mb-1 text-slate-700">LastName</label>
                    <input type="text" name="lastName" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"/>
                </div>
                <div className="w-full">
                    <label htmlFor="email" className="text-sm mb-1 text-slate-700">E-mail</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"/>
                </div>
                <button className="inline-flex gap-2 items-center justify-center rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 py-3 px-5 text-sm font-medium text-white shadow-xl shadow-gray-400/75 transition-transform duration-200 hover:scale-[1.01]">
                   Submit
                </button>
            </form>
        </article>
    </section>
  )
}
