import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {

    const [isVisible, setIsVisible] = useState(false)
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    };

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }


    return (
        <nav className='flex items-center justify-between flex-wrap bg-red-400 p-6 fixed w-full'>
            <div className='flex items-center flex-shrink-0 text-pink-200 mr-6'>
                <Link to='/' className='font-semibold text-xl tracking-tight'>Car Logs</Link>
            </div>
            <div className='block'>
                <button onClick={dropDown} className='flex items-center px-3 py-2 text-red-200 border rounded border-red-400 hover:text-pink-200 hover:border-pink-200'>
                    <i className="fa-solid fa-circle-chevron-down"></i>
                </button>
            </div>
            { isVisible ? (
            <div className='w-full flex flex-grow items-center justify-center'>
                <div className="text-sm lg:flex-grow">
                    <Button className='p-3 m-5 bg-red-400 justify-center rounded-xl'>

                        <div>
                            <Link to='/' onClick= {clicked} className='flex place-itmes-center mt-4 lg:inline-block 
                            lg:mt-0 text-red-200 hover:text-pink-400 mr-4'>
                                Home
                            </Link>
                        </div>

                    </Button>
                    <Button className='p-3 m-5 bg-red-400 justify-center rounded-xl'>
                        
                        <div>
                            <Link to='/About' onClick= {clicked} className='flex place-itmes-center mt-4 lg:inline-block 
                            lg:mt-0 text-red-200 hover:text-pink-200 mr-4'>
                                About
                            </Link>
                        </div>

                    </Button>
                    <Button className='p-3 m-5 bg-red-400 justify-center rounded-xl'>
                        
                        <div>
                            <Link to='/dashboard' onClick= {clicked} className='flex place-itmes-center mt-4 lg:inline-block 
                            lg:mt-0 text-red-200 hover:text-pink-200 mr-4'>
                                Dashboard
                            </Link>
                        </div>

                    </Button>
                    {
                        !isAuthenticated?
                        <Button className='p-3 m-5 bg-red-400 justify-center rounded-xl'>
                        
                            <div>
                                <Link to='/dashboard' onClick= {signInOnClick} className='flex place-itmes-center mt-4 lg:inline-block 
                                lg:mt-0 text-red-200 hover:text-pink-200 mr-4'>
                                    Login
                                </Link>
                            </div>

                        </Button>
                        :
                        <Button className='p-3 m-5 bg-red-400 justify-center rounded-xl'>
                            
                            <div>
                                <Link to='/dashboard' onClick= {signOutOnClick} className='flex place-itmes-center mt-4 lg:inline-block 
                                lg:mt-0 text-red-200 hover:text-pink-200 mr-4'>
                                    Sign Out
                                </Link>
                            </div>

                        </Button>
                    }
                </div>
            </div>
            ) : (
            <></>
            ) }
        </nav>
    )  
}

export default Navbar