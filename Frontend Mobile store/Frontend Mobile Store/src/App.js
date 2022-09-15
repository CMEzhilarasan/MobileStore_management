import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import './App.css';
import Cart from './Mobile/components/Cart';
import Home from './Mobile/components/Home';
import ItemCard from './Mobile/components/ItemCard';
import Login from './Mobile/components/Login';
import { default as Items, default as Mobile } from './Mobile/components/Mobile';
import Register from './Mobile/components/Register';
import Services from './Mobile/components/Service';

function App() {
  return (
    <div className="App">
    <Router>
      
      <Switch>
      <CartProvider>
        <Route  exact path="/" component={Home}/>
        <Route exact path="/login"  component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/services"  component={Services}/>
        <Route exact path="/mobile" component={Mobile}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/itemcard" component={ItemCard}/>
        <Route exact path="/items" component={Items}/>
        
       
       </CartProvider> 
      </Switch>   
       
    </Router>
  </div>
);
}

export default App;



