import tw from "tailwind-styled-components/dist/tailwind";
import { ReactComponent as Icon } from "../../assets/logo/logo.svg";
import { ReactComponent as Search } from "../../assets/vector/Search.svg";
import { ReactComponent as Menu } from "../../assets/vector/Menu.svg";
export const Container = tw.div`
    flex 
    justify-between 
    flex-row 
    px-32 
    py-4 
    bg-[#192026] 
    items-centere
`
export const LogoBox = tw.div`
    flex  
    flex-none 
    flex-row 
    items-center 
    space-x-5
`
export const LogoIcon = tw(Icon)`
    h-16 
    w-16
`
export const LogoText = tw.h1`
font-DMSans text-2xl text-white font-bold
`
export const SearchBox = tw.div`
border-2  flex-auto ml-32  w-96 h-14 border-[#D1D5DB] rounded-xl px-2 py-1 flex flex-row items-center justify-between
`
export const SerachInput = tw.input`
bg-transparent outline-none w-full text-lg text-white font-DMSans font-medium
`
export const SignInBox = tw.div`
flex  flex-auto justify-end flex-row items-center space-x-5
`
export const SignInButton = tw.h2`
font-DMSans font-bold text-lg text-white
`
export const SearchIcon = tw(Search)`
    h-5 
    w-5
`
export const MenuBox = tw.div`
flex items-center justify-center rounded-full bg-[#BE123C] p-2 w-10 h-10
`
export const MenuIcon = tw(Menu)`
    h-9 
    w-9
`