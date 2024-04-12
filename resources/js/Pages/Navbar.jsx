import React, { useState } from 'react';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import Logo from '../../../public/images/logo.png';


export default function Navbar({ auth }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <nav className="bg-paleta-3 z-50 inset-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-full flex h-16">
                    <div className="w-full flex items-center justify-evenly text-white">
                        <div className="flex flex-shrink-0 items-center gap-[10px] ">
                            <img className="h-8 w-auto" src={Logo} alt="PETMANIA" />
                            <h1>PETMANIA</h1>
                        </div>
                        <div className="hidden sm:flex gap-[10px] text-white">
                            <NavLink href={route('homepage')} active={route().current('homepage')}>
                                Home
                            </NavLink>

                            <NavLink href={route('homepage')} active={false}>
                                Sobre
                            </NavLink>
                            <NavLink href={route('agenda.index')} active={route().current('agenda.index')}>
                                Agenda
                            </NavLink>
                            <NavLink href={route('services')} active={route().current('services')}>
                                Serviços
                            </NavLink>
                            <NavLink href={route('homepage')} active={false}>
                                Contato
                            </NavLink>

                            {(auth.user && auth.user.role == "admin" ) && (
                                <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                    Dashboard
                                </NavLink>
                            )}

                        </div>
                        {!auth.user && (

                            <div className="hidden sm:flex gap-[10px] text-white">

                                <NavLink href={route('login')} active={route().current('login')}>
                                    Login
                                </NavLink>
                                <NavLink href={route('register')} active={route().current('register')}>
                                    Register
                                </NavLink>
                            </div>
                        )}

                    </div>

                    {auth.user && (
                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            <div className="ms-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Ver Perfil</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    )}

                    <div className="-me-2 flex items-center sm:hidden text-white">
                        <button
                            onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path
                                    className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>


            <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden text-white'}>
                <div className="pt-2 pb-3 space-y-1 text-white">
                    <ResponsiveNavLink href={route('homepage')} active={route().current('homepage')}>
                        Home
                    </ResponsiveNavLink>

                    <ResponsiveNavLink href={route('about')} active={route().current('about')}>
                        Sobre
                    </ResponsiveNavLink>
                    <ResponsiveNavLink href={route('agenda.index')} active={route().current('agenda.index')}>
                        Agenda
                    </ResponsiveNavLink>
                    <ResponsiveNavLink href={route('contacts')} active={route().current('contacts')}>
                        Contato
                    </ResponsiveNavLink>
                    <ResponsiveNavLink href={route('login')} active={route().current('login')}>
                        Login
                    </ResponsiveNavLink>
                    <ResponsiveNavLink href={route('register')} active={route().current('register')}>
                        Register
                    </ResponsiveNavLink>
                </div>
                {auth.user && (
                    <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>

                        <div className="pt-4 pb-1 border-t border-gray-200">
                            <div className="px-4">
                                <div className="font-medium text-base text-white">{auth.user.name}</div>
                                <div className="font-medium text-sm text-white">{auth.user.email}</div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route('profile.edit')} active={route().current('profile.edit')}>Profile</ResponsiveNavLink>
                                <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
        
    );
}