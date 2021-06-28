import './App.css';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link 
} from "react-router-dom";
import styled from 'styled-components';
import { useState, useEffect} from 'react';
import { db } from './firebase';
import Login from './Login';

function App() {

  const [cartItems, setCartItems ] = useState([]);

    const getCartItems = () => {
        db.collection('cartItems').onSnapshot((snapshot) => {
            const tempItems = snapshot.docs.map((doc) =>({
                id: doc.id,
                product: doc.data()
            }))

            setCartItems(tempItems);
        });
    }

    useEffect(() => {
        getCartItems();
    }, []) // we put an empty array with use effect because we want this to run at the initialization of the component. 
            // ...if we passed a variable, it would run whenever there are changes in the variable.

// App --> Cart --> CartItems


console.log(cartItems);

  return (
    <Router>
        <Container>
          <Header cartItems={cartItems} />
          <Switch>

          <Route path="/login">
              <Login />  
            </Route>
            <Route path="/cart">
              <Cart cartItems={cartItems} />  
            </Route>

            <Route path="/">
              <Home />
            </Route>

          </Switch>
        </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: #EAEDED;
`