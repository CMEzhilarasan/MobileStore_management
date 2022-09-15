import React, {useState} from 'react';
import './Home.css';
import './items.css';
import { Link } from 'react-router-dom'
import Itemcard from './ItemCard';
import data from './Data';


const Items = () => {
    const[filter, setFilter]=useState('');
    const searchText = (event) => {
        setFilter(event.target.value);
    }
   let dataSearch = data.productData.filter(item =>{
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
   });
    return (
        <>
            <div>
                <nav class="navbar navbar-light" style={{ backgroundColor: "grey" }}>
                    <span class="navbar-brand mb-0 h1" style={{ color: "lightyellow" }}><h4>Mobile Store</h4></span>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item1 active">
                            <Link class="nav-link" to="/" style={{ color: "lightyellow" }}><h6>Home</h6></Link>
                        </li>
                    </ul>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item2 active">
                            <Link class="nav-link" to="/itemcard" style={{ color: "lightyellow" }}><h6>Mobiles</h6></Link>
                        </li>
                    </ul>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item2 active">
                            <Link class="nav-link" to="/cart" style={{ color: "lightyellow" }}><h6>Cart</h6></Link>
                        </li>
                    </ul>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item3 active">
                            <Link class="nav-link" to="/register" style={{ color: "lightyellow" }}><h6>Register</h6></Link>
                        </li>
                    </ul>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item4 active">
                            <Link class="nav-link" to="/login" style={{ color: "lightyellow" }}><h6>Login</h6></Link>
                        </li>
                    </ul>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item4 active">
                            <Link class="nav-link" to="/services" style={{ color: "lightyellow" }}><h6>Service</h6></Link>
                        </li>
                    </ul>
                </nav>
            </div>
            
            <section className="py-4 container">
                <div className="row justify-content">
                    <div className="col-12 mb-5">
                        <div className="mb-2 col-5 mx-auto">
                            <div align="center">
                            <i class="fa fa-search" aria-hidden="true"></i>
                            <label className="form-lable h4"></label>
                            
                            <input
                                type="text"
                                class="box"
                                size="38"
                                placeholder="Search"
                                className="from-control"
                                value={filter}
                                onChange={searchText.bind(this)}
                            />
                            
                            </div>
                        </div>
                    </div>
                    
                    {dataSearch.map((item, index) => {
                        return (
                            <Itemcard
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                                price={item.price}
                                item={item}
                                key={index}
                            />
                        )
                    })}

                </div>
            </section>
        </>

    );
};
export default Items;