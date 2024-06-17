import { useEffect, useState } from "react";
import Cards from "./Cards"
import { Link } from "react-router-dom";
import axios from 'axios';

const Course = () => {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:8080/book");
                console.log(res.data);
                setBook(res.data);
            } catch (error) {
                console.log("Error : ", error);
            }
        }
        getBook();
    }, [])

    return (
        <>
            <div className="max-w-screen-2xl mx-auto container md:px-20 px-4">
                <div className="mt-10 md:mt-12 text-center items-center justify-center">
                    <h1 className="text-2xl md:text-4xl">We are delighted to have you <span className="text-pink-500">here :)</span></h1>
                    <p className="mt-5 ">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, aliquid. sit amet consectetur adipisicing elit. Adipisci aspernatur laboriosam quia officia ducimus ut enim porro, modi debitis molestias nulla laborum. Vitae labore odit sapiente illum voluptatem magnam debitis.</p>
                    <Link to={"/"}><button className="btn bg-pink-500 hover:bg-pink-600 mt-4 mb-3 duration-300">Back</button></Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4">
                    {
                        book.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course