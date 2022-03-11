/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {useHistory} from 'react-router-dom'
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Footer() {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const hist = useHistory()
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <>  
            <div className="mt-10"></div>
            <div className="fixed bottom-0 footer-bg w-full py-3 flex justify-between text-footer text-base">
                <div className="flex mx-5">
                    <p className="bg-green-0">
                    © {new Date().getFullYear()} powered by me
                    </p>
                </div>
                <div className="flex mx-6">
                    <p onClick={()=>hist.push("/about")} className="bg-green-0 cursor-pointer">
                        About
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer
