import { Outlet } from "react-router-dom";
import { ReactComponent as Icon } from "../../assets/logo/logo.svg";
import { ReactComponent as Search } from "../../assets/vector/Search.svg";
import { ReactComponent as Menu } from "../../assets/vector/Menu.svg";
import { Fragment, useState } from "react";
import SearchInput from "../../components/Search/searchInput.component";

const Header = () => {
    const [suggestion, setSuggestion] = useState([])
    return (
        <Fragment>
            <div className="grid grid-cols-5 px-32 py-4 bg-[#192026] ">
                <div className="flex flex-none flex-row items-center space-x-5">
                    <Icon className="h-16 w-16" />
                    <h1 className="font-DMSans text-2xl text-white font-bold">MovieBox</h1>
                </div>

                <div className="border-2 relative grid grid-cols-4 items-center content-center justify-between  col-span-3 w-full h-14 border-[#D1D5DB] rounded-xl px-3 py-1 ">
                    <SearchInput setSuggestion={setSuggestion} />
                    <Search className="h-5 w-5 justify-self-end" />
                    <div className="col-span-4 absolute  w-full px-3 py-1 rounded-lg bg-[#192026] rounded-t-none" style={{ top: '120%' }}>
                        {suggestion && suggestion.map((item, index) => {
                            return (
                                <p className="text-lg font-DMSans font-bold text-white" key={index}>
                                    {item.title}
                                </p>
                            )
                        })}
                    </div>
                </div>
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