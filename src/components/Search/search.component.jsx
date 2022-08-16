import { useState, useContext, useRef, useEffect } from "react";
import { ReactComponent as SearchIcon } from "../../assets/vector/Search.svg";
import { SuggestionsContext } from "../../contexts/suggestions/suggestions.context";
import Suggestions from "../suggestions/suggestions.component";
const Search = () => {

    const [search, setSearch] = useState('')
    const { setQuery, setOpen,query } = useContext(SuggestionsContext)
    const ref = useRef(null)
    useEffect(() => {
        document.addEventListener('click', handleClickOutSide, true)
    }, [])
    const handleClickOutSide = (e) => {
        if (!ref.current?.contains(e.target)) {

            setOpen(false)
        }
        else {
            e.target.querySelector('input')?.focus();
        }
    }
    useEffect(() => {
        if (search.length > 3) {
            setQuery(search)
        } else {
            setQuery('')
        }
    }, [search])
    const handleSearchChange = async (e) => {
        setSearch(e.target.value)

    }

    return (
        <div ref={ref} className="border-2 relative grid grid-cols-4 items-center content-center justify-between  col-span-3 w-full h-14 border-[#D1D5DB] rounded-xl px-3 py-1 ">
            <div className="col-span-3  w-full ">
                <input className="bg-transparent outline-none w-full text-lg text-white font-DMSans font-medium" value={search} onFocus={()=>{if(query){setOpen(true)}}} onChange={(e) => { handleSearchChange(e) }} type="text" placeholder="What do you want to watch?" />
                <Suggestions />
            </div>
            <SearchIcon className="h-5 w-5 justify-self-end" />

        </div>
    )
}
export default Search;