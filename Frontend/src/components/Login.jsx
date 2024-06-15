import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
    // reference from react-hook-form website
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <div>
                <dialog id="login_modal" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h3 className="font-bold text-lg">Login</h3>
                            {/* Email */}
                            <div className='mt-5 space-y-2'>
                                <span className='font-size-600'>Email</span><br />
                                <input {...register("email", { required: true })} className='w-80 px-3 py-2 rounded-md outline-none' type="email" placeholder='Enter your email' />
                                <br />
                                {/* Client side validation */}
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* Password */}
                            <div className='mt-5 space-y-2'>
                                <span className='font-size-600'>Password</span><br />
                                <input {...register("password", { required: true })} className='w-80 px-3 py-2 rounded-md outline-none' type="password" placeholder='Enter your password' />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='mt-4 flex justify-between items-center'>
                                <button className="btn bg-pink-500 hover:bg-pink-600">Login</button>
                                <p>Not Registered? {" "}
                                    <Link to={"/signup"} className='text-blue-500 cursor-pointer underline'>Signup</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Login