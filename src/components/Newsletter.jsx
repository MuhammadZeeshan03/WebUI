const Newsletter = () => {
    return (
        <div className="w-full py-16 px-4text-white">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">

                <div className="lg:col-span-2 my-4 text-white">
                    <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold py-2">
                        Want tips & tricks to optimze your flow?</h1>
                    <p>
                        Sign up to our newsletter and stay up to date.
                    </p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full" >
                        <input
                            className="p-3 flex w-full  rounded-md text-black"
                            type="email"
                            placeholder="Enter Email"
                        />
                        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 px-6 my-6 mx-auto py-3 text-black">
                            Notify Me
                        </button>

                    </div>
                    <p className="text-white">We care the protection of your data. Read our

                        <span className="text-[#00df9a]"> privacy Policy</span></p>

                </div>
            </div>
        </div>
    )
}

export default Newsletter
