import banner from "../../public/banner.png";

const Banner = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mb-12'>

                {/* Left Side */}
                <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1'>
                    <div className="space-y-8 md:space-y-10">
                        <h1 className='text-4xl font-bold'>Hey, Welcome here to learn something {" "}
                            <span className='text-pink-500'>new everyday.</span>
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ex doloribus, cum molestiae asperiores minima quasi minus dolores culpa obcaecati.</p>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Search" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                    </div>
                    <button className="btn mt-4 mb-4 bg-pink-500 hover:bg-pink-600">Learn More</button>
                </div>

                {/* Right side */}
                <div className='w-full md:w-1/2 order-1 md:order-2'>
                <img src={banner} alt="" className="w-90 h-90"/></div>
            </div>
        </>
    )
}

export default Banner