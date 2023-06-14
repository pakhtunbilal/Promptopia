"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {signIn,signOut,useSession,getProviders} from 'next-auth/react'
import Provider from "./Provider"

const Nav = () => {

  const {data : session} = useSession()

  const [providers, setProviders]=useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false)

  useEffect(()=>{
    const setUpProviders = async ()=>{
      const response = await getProviders()
      setProviders(response)
    }
    setUpProviders();
  }, [])

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href='/' className="flex gap-2 flex-center">
        <Image src='/assets/images/logo.svg'
        alt="promptopia logo"
        width={30}
        height={30}
        className="object-contain" />
        <p className="logo_text">Promptopia</p>
      </Link>

    {/* Desktop navigation */}
    <div className="sm:flex hidden">

      {session?.user? 
      (<div className="flex gap-3 md:gap-5">
        <Link href="create-prompt" className="black_btn">
        Create Post
        </Link>
        <button type="button" onClick={signOut} className="outline_btn">
        SignOut
        </button>
        <Image src={session?.user.image}
        alt="profile logo"
        width={37}
        height={37}
        className="rounded-full" />
      </div>)
       : 
       <>
          {providers &&
          Object.values(providers).map((Provider) => (
              <button
              type="button"
              key={Provider.name}
              onClick={() => signIn(Provider.id)}
              className="black_btn" >
                SignIn
              </button>
          )) }
       </>
       }
    </div>

       {/* Mobile navigation */}
       <div className="sm:hidden flex relative">
        {session?.user? 
        (<div className="flex">
          <Image src={session?.user.image}
        alt="profile logo"
        width={37}
        height={37}
        className="rounded-full"
        onClick={()=>{setToggleDropdown((prev)=> (!prev) )}} />
        {toggleDropdown && (
          <div className="dropdown">
            <Link
            href='/profile'
            className="dropdown-link"
            onClick={ () => setToggleDropdown(false)} >
              My Profile
            </Link>
            <Link
            href='/create-prompt'
            className="dropdown-link"
            onClick={ () => setToggleDropdown(false)} >
              Create Prompt
            </Link>
            <button type="button"
            onClick={()=>{
              setToggleDropdown(false)
              signOut()
            }}
            className="mt-5 w-full black_btn" >
              SignOut
            </button>
          </div>
        )}
        </div>)
         : (<>{providers &&
          Object.values(providers).map((Provider) => (
              <button
              type="button"
              key={Provider.name}
              onClick={() => signIn(Provider.id)}
              className="black_btn" >
                SignIn
              </button>
          )) } </>)}

       </div>

    </nav>
  )
}

export default Nav