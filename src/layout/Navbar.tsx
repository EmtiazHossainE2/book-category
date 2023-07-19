import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { setUser } from '../redux/features/userSlice';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const { user } = useAppSelector(state => state.user)

    const dispatch = useAppDispatch()

    const logout = async () => {
        await signOut(auth)
            .then(() => {
                dispatch(setUser(null))
            })
    }

    return (
        <div className=' shadow-md z-50 w-full relative top-0 left-0'>
            {/* <div className=' md:flex justify-between items-center bg-gray-900 text-white'> */}
            <div className='flex justify-between lg:px-10  bg-gray-900 text-white'>

                <div className='py-4'>
                    <Link to='/'>
                        <span className="text-2xl py-4 ml-2 lg:ml-8 text-success font-bold">Book<span className='text-white'>Shop</span></span>
                    </Link>
                </div>


                {/* mobile icon  */}
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer lg:hidden'>
                    <div><AiOutlineMenu /></div>
                </div>



                <div className=' px-0 '>
                    <ul className={`  lg:flex  justify-between lg:pr-5 lg:items-end lg:py-0  lg:pb-0 pb-8 absolute lg:static bg-gray-900 lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0  transition-all duration-500 ease-in ${open ? 'top-[60px]' : 'top-[-480px]'}`}>
                        <div className="lg:flex lg:justify-between">

                            <li className={`relative group md:ml-3 text-xl md:my-0 py-4 transition-all duration-500 ease-in`}>
                                <Link onClick={() => setOpen(!open)} to="/" className='text-lg text-gray-200 p-2 group-hover:border-b-2 border-b-red-500 translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-800'>
                                    HOME
                                </Link>
                            </li>

                            <li onClick={() => setOpen(!open)} className={`relative group md:ml-3 text-xl md:my-0 py-4 transition-all duration-500 ease-in`}>
                                <Link to="/all-books" className='text-lg text-gray-200 p-2 group-hover:border-b-2 border-b-red-500 translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-800'>
                                    ALL BOOKS
                                </Link>
                            </li>
                            <li onClick={() => setOpen(!open)} className={`relative group md:ml-3 text-xl md:my-0 py-4 transition-all duration-500 ease-in`}>
                                <Link to="/about" className='text-lg text-gray-200 p-2 group-hover:border-b-2 border-b-red-500 translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-800'>
                                    ABOUT
                                </Link>
                            </li>


                            {user.email != null ?
                                <>
                                    <li onClick={() => setOpen(!open)} className='md:ml-3 md:my-0  py-4 transition-all duration-500 ease-in '>
                                        <Link to="/wishlist" className='text-lg text-gray-200 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-400'>
                                            WishList
                                        </Link>
                                    </li>
                                    <li onClick={() => setOpen(!open)} className='md:ml-3 md:my-0  py-4 transition-all duration-500 ease-in '>
                                        <Link to="/plan-to-read" className='text-lg text-gray-200 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-400'>
                                            Riding List
                                        </Link>
                                    </li>

                                    <li style={{ cursor: 'pointer' }} onClick={logout} className='md:ml-3 md:my-0 pointer px-2 py-4 transition-all duration-500 ease-in '>
                                        <span className='text-lg text-gray-200 p-2 px-3  border rounded-md hover:text-red-600 font-semibold transition-all duration-400'>
                                            LOG OUT
                                        </span>
                                    </li>
                                </>
                                :
                                <>
                                    <li onClick={() => setOpen(!open)} className='md:ml-3 md:my-0  py-4 transition-all duration-500 ease-in '>
                                        <Link to="/login" className='text-lg text-gray-200 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-400'>
                                            SIGN IN
                                        </Link>
                                    </li>

                                    <li onClick={() => setOpen(!open)} className='md:ml-3 md:my-0  py-4 transition-all duration-500 ease-in '>
                                        <Link to="/sign-up" className='text-lg text-gray-200 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-400'>
                                            SIGN UP
                                        </Link>
                                    </li>
                                </>
                            }
                        </div>
                    </ul>
                </div>
            </div >
        </div >
    );
};

export default Navbar;