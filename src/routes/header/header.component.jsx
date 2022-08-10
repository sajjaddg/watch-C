import { Container,LogoIcon ,SearchIcon , SerachInput , MenuIcon ,MenuBox, LogoBox , LogoText ,SignInBox, SearchBox , SignInButton} from "./header.styles";
const Header = () => {
    return (
        <Container>
            <LogoBox>
                <LogoIcon/>
                <LogoText>MovieBox</LogoText>
            </LogoBox>
            <SearchBox>
                <SerachInput type="text" placeholder="What do you want to watch?"/>
                <SearchIcon />
            </SearchBox>
            <SignInBox>
                <SignInButton>Sign in</SignInButton>
                <MenuBox>
                   <MenuIcon/>
                </MenuBox>
            </SignInBox>
        </Container>
    )
}
export default Header;