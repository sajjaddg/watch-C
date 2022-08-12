import { useEffect, useState } from "react"
import { MovieIdByTitle } from "../../utils/MoviesDatabase/Movies"
const SearchInput = (props) => {
    const [search, setSearch] = useState('')

    useEffect(() => {
        const fillSuggestion = async () => {
            console.log(search);
            if (search.length > 3) {
                const { results } = await MovieIdByTitle(search)
                props.setSuggestion(results)
                return
            }
            props.setSuggestion([])

        }
        fillSuggestion()
    }, [search])
    const handleSearchChange = async (e) => {
        setSearch(e.target.value)
    }
    return (
        <div className="col-span-3  w-full ">
            <input className="bg-transparent outline-none w-full text-lg text-white font-DMSans font-medium" onBlur={()=>{props.setSuggestion([])}} value={search} onChange={(e) => { handleSearchChange(e) }} type="text" placeholder="What do you want to watch?" />
        </div>
    )
}

export default SearchInput;