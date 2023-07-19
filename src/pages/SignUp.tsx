
import { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { createUser } from '../redux/features/userSlice';
import { Link, useNavigate } from 'react-router-dom';

interface LoginFormInputs {
    email: string;
    password: string;
}

const SignUp = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>();

    const { user, isLoading } = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        console.log(user);
        if (!user.email == null && !isLoading) {
            navigate('/')
        }

    }, [user.email, isLoading, navigate, user])


    const handelFormSubmit = async (data: LoginFormInputs) => {
        dispatch(createUser({ email: data.email, password: data.password }))
        console.log(data);

    }


    return (
        <div className=' bg-base-100'>
            <h2 className='text-2xl text-center mt-5 font-bold text-success'>CREACT  ACCOUNT</h2>
            <div className='grid justify-items-center mt-5'>
                <form className='bg-base-300 border-black rounded-lg p-10' onSubmit={handleSubmit(handelFormSubmit)}>
                    <div className='grid'>
                        <label className='text-2xl inline-block' htmlFor="email">Email</label>

                        {errors.email && <p>{errors.email.message}</p>}
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


                    <div className='grid mt-6'>
                        <label className='text-2xl' htmlFor="password">Password</label>
                        {errors.password && <p>{errors.password.message}</p>}
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
                    <Link to="/login">
                        <p>Already Have An account</p>
                    </Link>
                    <div className='mt-8 mx-auto text-center'>
                        <button className=" btn btn-success">Create Account</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default SignUp;