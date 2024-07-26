import tanstackLogo from './../../../assets/tanstack.png';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

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
        <div className="flex justify-between max-w-[1200px] w-full p-4 mx-auto">
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
      <main className='flex-1'>

      </main>
    </section>
  )
}
