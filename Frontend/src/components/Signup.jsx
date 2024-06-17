import { Link, useLocation, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from "react-hot-toast";

const Signup = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    // reference from react-hook-form website
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password,
        }
        await axios.post("http://localhost:8080/user/signup", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success("Signup successfull");
                    navigate(from, { replace: true });
                }
                localStorage.setItem("Users", JSON.stringify(res.data))
            }).catch((error) => {
                // alert("Signup Error : ", error)
                if (error.response) {
                    console.log(error)
                    toast.error("Signup Error : " + error.response.data.message)
                }
            })
    };


    return (
        <div className="flex h-screen justify-center items-center">
            <div className="w-[600px]">
                <div className="modal-box shadow-xl">
                    <form>
                        {/* if there is a button in form, it will close the modal */}
                        <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                    </form>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="font-bold text-lg">Sign up</h3>
                        {/* Name */}
                        <div className='mt-5 space-y-2'>
                            <span className='font-size-600'>Name</span><br />
                            <input {...register("name", { required: true })} className='w-80 px-3 py-2 rounded-md outline-none' type="text" placeholder='Enter your name' />
                            {/* Client side validation */}
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/* Email */}
                        <div className='mt-5 space-y-2'>
                            <span className='font-size-600'>Email</span><br />
                            <input {...register("email", { required: true })} className='w-80 px-3 py-2 rounded-md outline-none' type="email" placeholder='Enter your email' />
                            {/* Client side validation */}
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/* Password */}
                        <div className='mt-5 space-y-2'>
                            <span className='font-size-600'>Password</span><br />
                            <input {...register("password", { required: true })} className='w-80 px-3 py-2 rounded-md outline-none' type="password" placeholder='Enter your password' />
                            {/* Client side validation */}
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        <div className='mt-4 flex justify-between items-center'>
                            <button className="btn bg-pink-500 hover:bg-pink-600">Signup</button>
                            <p>Already Registered? {" "}
                                <Link to={"/"} className='text-blue-500 cursor-pointer underline'>Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup