import React from 'react'

const Cards = ({ item }) => {
    return (
        <>
            <div className='mb-10 p-5'>
                <div className="dark:bg-slate-900 dark:text-white dark:dark-border card w-92 h-full bg-base-100 shadow-xl hover:scale-105 duration-100">
                    <figure><img src={item.image} alt="Card_Image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge bg-pink-500 p-3 text-white">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline hover:bg-pink-600 cursor-pointer p-4">${item.price}</div>
                            <div className="badge badge-outline hover:bg-pink-600 cursor-pointer p-4">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards