/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Hero(props) {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
    const login = props.login
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <>
            <div className="mt-5 relative overflow-hidden mx-auto">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8  mx-auto sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-40 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl">
                                    <span className="text-footer block my-2 text-green-300 xl:block">Spacer,</span>
                                    <span className="text-footer block my-2 text-green-400 xl:block">Repetition Schedule Generator.</span>
                                </h1>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start ">
                                    <div onClick={login} className="rounded-md cursor-pointer py-1 my-auto">
                                        <div className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-hero-button md:py-4 md:text-lg md:px-10">
                                            <p>Login with Google</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
