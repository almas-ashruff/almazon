import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RoomIcon from '@material-ui/icons/Room';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { 
    Link 
} from 'react-router-dom';



function Header({ signOut, user, cartItems }) {


    const getCount = () => {
        let count = 0;
        // Loop through all items in the cart
        cartItems.forEach((item) => {  
            count += item.product.quantity; 
        })
        return count;
    }


    return (

        <Container>
            <Link to="/">
                <HeaderLogo>
                    <img src={'https://i.imgur.com/85Pw4mQ.png'}/> 
                    {/* amazon logo */}
                </HeaderLogo>
  
            </Link>


            <HeaderOptionAddress>
                <RoomIcon />
                <HeaderOption>
                    <OptionLineOne>
                        Hello
                    </OptionLineOne>
                    <OptionLineTwo>
                        Select your address
                    </OptionLineTwo>
                </HeaderOption>
                
            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type="text" />
                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>
            </HeaderSearch> 

            <HeaderNavItems>
                <HeaderOption>
                    <OptionLineOne>
                        Hello, {user.name}
                    </OptionLineOne>
                    <OptionLineTwo>
                        Account & Lists
                    </OptionLineTwo>
                </HeaderOption>

                <HeaderOption>
                    <OptionLineOne>
                        Returns
                    </OptionLineOne>
                    <OptionLineTwo>
                        & Orders
                    </OptionLineTwo>
                </HeaderOption>
            
                
                <HeaderOptionCart>
                    <Link to="/cart">
                        <ShoppingCartIcon />
                        <CartCount>
                            {getCount()}
                        </CartCount>
                    </Link>
                </HeaderOptionCart>  
                <SignOut>
                    <ExitToAppIcon onClick={signOut}/> 
                </SignOut>
                
            </HeaderNavItems>    
        </Container>

    )
}

export default Header

const Container = styled.div`
    height: 60px;
    background-color: #0F1111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
`
const HeaderLogo = styled.div`
    img {
        width: 150px;
        margin-left: 5px;
    }
    
`

const HeaderOptionAddress = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`
const OptionLineOne = styled.div`

`

const OptionLineTwo = styled.div`
    font-weight: 700;
`
const HeaderSearch = styled.div`
    margin-left: 4px;
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px; 
    overflow: hidden;
    background-color: white;
    :focus-within {
        box-shadow: 0 0 0 3px #F90;
    }
`

const HeaderSearchInput = styled.input`
    flex-grow: 1;
    border: 0;
    :focus {
         outline: none;
    }
`

const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    width: 45px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;    
`

const HeaderNavItems = styled.div`
    display: flex;
`


const HeaderOption = styled.div`
    padding: 10px 10px 10px 10px;
`


const HeaderOptionCart = styled.div`
    display: flex;

    a {
        display: flex;
        align-items: center;
        padding-right: 10px;
        color: white;
        text-decoration : none;
    }
    :hover{
        transform: scale(1.1);
    }

`

const CartCount = styled.div`
    padding-left: 4px;
    font-weight:700;
    color: #f08804;
`

const SignOut = styled.div`
    display: grid;
    place-items: center;
    cursor: pointer;
    margin-left: 4px;
    :hover{
        transform: scale(1.1);
    }
`