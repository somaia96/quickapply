import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="bg-red">
            <div className="py-2 container flex flex-wrap md:flex-nowrap justify-between items-center">
                <div className="flex items-center flex-1 justify-start space-x-1">
                    <img className="w-8" src="images/logo.png" alt="logo" />
                    <Link to={"/"} >
                        <h2 className="text-xl font-semibold text-secondary">
                            QuickApply
                        </h2>
                    </Link>
                </div>

                <div className="flex flex-1 justify-end items-center space-x-3">
                    <ul className="flex items-center justify-center space-x-5 text-secondary">
                        <li>
                            <Link to={"/"} >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"} >
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"} >
                                Community
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"} >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"} >
                                Pricing
                            </Link>
                        </li>
                    </ul>
                    <Link className="gap-1 text-xs text-white items-center hover:bg-primary/90 rounded-sm flex px-5 py-2 bg-primary" to={"/signin"} >
                        Register Now <ArrowRight width={14} />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
