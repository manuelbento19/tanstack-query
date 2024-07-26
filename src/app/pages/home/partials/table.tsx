import { Pencil, TrashSimple } from '@phosphor-icons/react';
import { UserService } from '../../../../services/user';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

type Props = {
    search: string;
}

export default function Table({search}:Props) {
    const userService = new UserService();
    const queryClient = useQueryClient();

    const deleteMutation = useMutation({
        mutationFn: async(id:string) => await userService.delete(id),
        onSuccess: () => toast.success("Deleted user successfully"),
        onError: (error:Error) => toast.error(error.message),
        onSettled: () => queryClient.invalidateQueries({queryKey: ["users"]})
    })
    
    const {data,isPending} = useQuery({queryKey: ["users"],queryFn: async()=> await userService.get()})
    
    if(isPending)
    return (
        <div className='flex py-4'>
            <div className='animate-spin size-6 rounded-full border border-b-orange-400'/>
        </div>
    )

    return (
        <div className="mt-6 overflow-auto rounded-xl shadow">
            <table className="size-full">
                <thead>
                <tr className="bg-gray-700 text-left text-xs font-semibold uppercase tracking-widest text-white">
                    {["#","FirstName","LastName","E-mail","Created At",""].map(item=> <th key={item} className="px-5 py-3">{item}</th>)}
                </tr>
                </thead>
                <tbody className="text-gray-500 divide-y divide-gray-200/80">
                {data?.filter(item=>JSON.stringify(item).toLowerCase().includes(search?.toLowerCase() ?? "")).map((item,index)=>(
                    <tr key={item.id}>
                        <td className="border-gray-200 bg-white px-5 py-5 text-sm">
                            <p className="whitespace-no-wrap">{index+1}</p>
                        </td>
                        <td className="border-gray-200 bg-white px-5 py-5 text-sm">
                            <p className="whitespace-no-wrap">{item.firstName}</p>
                        </td>
                        <td className="border-gray-200 bg-white px-5 py-5 text-sm">
                            <p className="whitespace-no-wrap">{item.lastName}</p>
                        </td>
                        <td className="border-gray-200 bg-white px-5 py-5 text-sm">
                            <p className="whitespace-no-wrap">{item.email}</p>
                        </td>
                        <td className="border-gray-200 bg-white px-5 py-5 text-sm">
                            <p className="whitespace-no-wrap">{(new Date(item.created_at).toLocaleString())}</p>
                        </td>
                        <td className="border-gray-200 bg-white px-5 py-5 text-sm flex gap-1 items-center">
                            <button className='px-2 py-1'>
                                <Pencil className='size-5'/>
                            </button>
                            <button onClick={()=>deleteMutation.mutate(item.id)} className='px-2 py-1'>
                                <TrashSimple className='size-5 text-red-500'/>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
