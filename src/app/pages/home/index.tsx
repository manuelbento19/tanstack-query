import tanstackLogo from './../../../assets/tanstack.png';
import { GithubLogo, LinkedinLogo, MagnifyingGlass, Plus } from '@phosphor-icons/react';

const SOCIAL_MEDIAS = [
  {
    link: "https://github.com/manuelbento19",
    icon: GithubLogo
  },
  {
    link: "https://www.linkedin.com/in/manuel-bento/",
    icon: LinkedinLogo
  }
]

export function Home() {
  return (
    <section className="size-full flex flex-col">
      <header className="w-full shadow-md bg-white">
        <div className="flex justify-between max-w-screen-lg w-full p-4 mx-auto">
          <div className="flex items-center gap-1">
            <img className="size-8" src={tanstackLogo} alt="tanstackLogo" />
            <h2 className="whitespace-nowrap font-medium text-lg text-slate-900">React Query</h2>
          </div>
          <ul className="flex items-center gap-2">
            {SOCIAL_MEDIAS.map(item=>(
              <li key={item.link} className="">
                <a href={item.link} target='_blank' className='inline-flex size-8 cursor-pointer rounded-xl border text-gray-600 hover:text-black hover:shadow'>
                  <item.icon className="size-5 m-auto"/>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <main className='flex-1 size-full overflow-auto'>
        <div className="mx-auto max-w-screen-lg px-2 pt-10 pb-2 flex flex-col">
          <header className="flex items-center justify-between">
            <div className="relative flex items-center w-full max-w-[250px] rounded-md border shadow-lg"> 
              <MagnifyingGlass className="absolute left-2 block size-5 text-gray-400"/>
              <input type="text" className="h-10 w-full pr-3 pl-12 text-sm text-slate-600 rounded-md outline-none focus:ring-2" placeholder="Search..." />
            </div>
            <button className="inline-flex gap-2 items-center justify-center rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 py-3 px-5 text-sm font-medium text-white shadow-xl shadow-gray-400/75 transition-transform duration-200 hover:scale-[1.01]">
              <Plus className='size-4'/>
              New User
            </button>
          </header>
          <div className="mt-6 overflow-auto rounded-xl shadow">
            <table className="size-full">
              <thead>
                <tr className="bg-gray-700 text-left text-xs font-semibold uppercase tracking-widest text-white">
                  {["#","FirstName","LastName","E-mail",""].map(item=> <th key={item} className="px-5 py-3">{item}</th>)}
                </tr>
              </thead>
              <tbody className="text-gray-500 divide-y divide-gray-200/80">
                {Array.from({length: 8}).map((_,index)=>(
                  <tr key={index}>
                    <td className="border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">{index+1}</p>
                    </td>
                    <td className="border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">{"Manuel"}</p>
                    </td>
                    <td className="border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">{"Bento"}</p>
                    </td>
                    <td className="border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">{"manuel.bento@developer.com"}</p>
                    </td>
                    <td className="border-gray-200 bg-white px-5 py-5 text-sm">

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </section>
  )
}