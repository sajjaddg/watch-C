import { Outlet } from "react-router-dom";
import { ReactComponent as Icon } from "../../assets/logo/logo.svg";
import { ReactComponent as Menu } from "../../assets/vector/Menu.svg";
import { Fragment } from "react";
import Search from "../../components/Search/search.component";

const Header = () => {
    return (
        <Fragment>
            <div className="grid grid-cols-5 px-32 py-4 bg-[#192026] ">

                <div className="flex flex-none flex-row items-center space-x-5">
                    <Icon className="h-16 w-16" />
                    <h1 className="font-DMSans text-2xl text-white font-bold">MovieBox</h1>
                </div>
                <Search/>
                <div className="flex flex-auto justify-end flex-row items-center space-x-5">
                    <h2 className=" font-DMSans font-bold text-lg text-white">Sign in</h2>
                    <div className="flex items-center justify-center rounded-full bg-[#BE123C] p-2 w-10 h-10">
                        <Menu className="h-9 w-9" />
                    </div>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Header;