import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

const Logout = () => {
    const [authUser, setAuthUser] = useAuth();

    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("Users");
            toast.success("Logout Successfully")
            window.location.reload();
        } catch (error) {
            toast.error("Error " + error.message)
        }
    }

    return (
        <div>
            <button className="bg-red-500 text-white m-2 px-3 py-2 rounded-md hover:bg-red-600 duration-300 cursor-pointer" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout