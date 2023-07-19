import React from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/features/userSlice';


interface LoginFormInputs {
    email: string;
    password: string;
}


const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>();

    const navigate = useNavigate()
    const { user, isLoading } = useAppSelector((state) => state.user)

    const dispatch = useAppDispatch()


    React.useEffect(() => {
        console.log(user);
        if (user.email != null) {
            navigate('/')
        }

    }, [user.email])


    const handelFormSubmit = (data: LoginFormInputs) => {
        console.log(data)
        dispatch(loginUser({ email: data.email, password: data.password }))
    }

    return (
        <div className=' bg-base-100'>
            <h2 className='text-2xl text-black text-center mt-5 font-bold'>LOG IN</h2>
            <div className='grid justify-items-center mt-5'>
                <form className='bg-base-300 border-black rounded-lg p-10'
                    onSubmit={handleSubmit(handelFormSubmit)}>
                    <div className='grid'>
                        <label className='text-2xl inline-block' htmlFor="email">Email</label>
                        <input
                            className='border-2  w-96 border-black p-2 rounded-md text-lg '
                            type="email"
                            placeholder='Enter Your Email'
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            {...register('email', { required: 'Email is required' })}
                        />
                    </div>
                    {errors.email && <p>{errors.email.message}</p>}

                    <div className='grid mt-6'>
                        <label className='text-2xl' htmlFor="password">Password</label>
                        <input
                            className='border-2 w-96 border-black p-2 rounded-md text-lg '

                            id="password"
                            placeholder="your password"
                            type="password"
                            autoCapitalize="none"
                            autoComplete="password"
                            {...register('password', { required: 'Password is required' })}
                        />
                    </div>
                    <Link to='/sign-up' className='underline py-2'>Create Account</Link>
                    {errors.password && <p>{errors.password.message}</p>}

                    <div className='mt-8 mx-auto text-center'>
                        <button className=" btn btn-success px-10">Login</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;