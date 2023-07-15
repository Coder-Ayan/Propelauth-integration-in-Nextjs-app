"use client"

import Image from "next/image"
import { useRef } from "react"
import { useUser } from "@propelauth/nextjs/client";
import { useLogoutFunction } from "@propelauth/nextjs/client";
import { useRedirectFunctions } from "@propelauth/nextjs/client";

const AuthDropdown = () => {
    const { loading, user } = useUser()
    const logout = useLogoutFunction()
    const { redirectToAccountPage } = useRedirectFunctions()

    const Dropdown = useRef()
    const toggleDropdown = () => {
        if (Dropdown.current.classList.contains('hidden', 'opacity-0', 'scale-95')) {
            Dropdown.current.classList.remove('hidden', 'opacity-0', 'scale-95')
            Dropdown.current.classList.add('opacity-100', 'scale-100')
        }
        else if (Dropdown.current.classList.contains('opacity-100', 'scale-100')) {
            Dropdown.current.classList.remove('opacity-100', 'scale-100')
            Dropdown.current.classList.add('hidden', 'opacity-0', 'scale-95')
        }
    }
    return (
        <>
            {loading && <p>Loading User...</p>}
            {user && !loading && <div className="relative inline-block text-left" >
                <Image onClick={toggleDropdown} src={user.pictureUrl} alt={user.firstName} height={100} width={100} className="cursor-pointer rounded-full border-2 border-gray-600" />
                <div ref={Dropdown} className="absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition transform hidden opacity-0 scale-95" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                    <div className="py-1" role="none">
                        <div onClick={redirectToAccountPage} className="text-gray-700 block cursor-pointer px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabIndex={-1} id="menu-item-0">My Account</div>
                    </div>
                    <div className="py-1" role="none">
                        <div onClick={logout} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer" role="menuitem" tabIndex={-1} id="menu-item-6">Logout</div>
                    </div>
                </div>
            </div >
            }
        </>
    )
}

export default AuthDropdown