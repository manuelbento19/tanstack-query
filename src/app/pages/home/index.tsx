import tanstackLogo from './../../../assets/tanstack.png';
import { GithubLogo, LinkedinLogo, MagnifyingGlass, Plus } from '@phosphor-icons/react';
import Table from './partials/table';
import { UserModal } from '../../components/modal/user';
import { ChangeEvent, useState } from 'react';

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
  const [showAddModal,setShowAddModal] = useState(false);
  const [search,setSearch] = useState(()=>{
    const url = new URL(window.location.href);
    return url.searchParams.get("search") || "" 
  })

  const openModal = () => setShowAddModal(true);
  const closeModal = () => setShowAddModal(false);
  
  const onSearchUpdate = (event:ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const url = new URL(window.location.href);
    
    if(value){
      url.searchParams.set("search",value)
    }
    else{
      url.searchParams.delete("search")
    }

    window.history.pushState({},"",url.toString());
    setSearch(value);
  } 

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
              <input value={search} onChange={onSearchUpdate} type="text" className="h-10 w-full pr-3 pl-12 text-sm text-slate-600 rounded-md outline-none focus:ring-2" placeholder="Search..." />
            </div>
            <button onClick={openModal} className="inline-flex gap-2 items-center justify-center rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 py-3 px-5 text-sm font-medium text-white shadow-xl shadow-gray-400/75 transition-transform duration-200 hover:scale-[1.01]">
              <Plus className='size-4'/>
              New User
            </button>
          </header>
          <Table search={search}/>
        </div>
      </main>
      {showAddModal && <UserModal.Create close={closeModal}/>}
    </section>
  )
}