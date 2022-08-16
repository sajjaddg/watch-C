
import { createContext, useEffect, useState } from "react";
import { SearchByTitle } from "../../utils/MoviesDatabase";
const SuggestionsContext = createContext({
    query: '',
    setQuery: () => { },
    results: [],
    results: () => { },
    open: false,
    setOpen: () => { },
})

const SuggestionsProvider = ({ children }) => {
    const [results, setResults] = useState([])
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState('')
    useEffect(() => {
       if(query===''){
        setOpen(false)
        setResults([])
        return
       }
        const help = async () => {
            setOpen(true)
            const data = await SearchByTitle(query)
            setResults(data)
        };
        if (query) {
            help()
            
        }
    }, [query])
    
    const values = {
        results,
        setResults,
        open,
        setOpen,
        query,
        setQuery
    }
    return (
        <SuggestionsContext.Provider value={values}>
            {children}
        </SuggestionsContext.Provider>
    )
}
export { SuggestionsProvider, SuggestionsContext }