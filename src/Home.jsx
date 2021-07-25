import React from 'react';
import { NavLink } from 'react-router-dom';
const Home=()=>{
    return(
        <>
        <h1 class="display-3">Welcome to the sweet shop....</h1>
        <p class="mb-5">The Sweet Shop will be a famous name in the era of Sweets due to its Quality, Purity and Neatness. So dive into the world of Sweets and pay us money!!!</p>
        <h1 class="display-3 text-warning">Our Products....</h1>
        <div class="card-deck text-center mb-3">
            <div class="card">
                <img src="https://www.smbkashuchirawa.com/img/laddu.jpg" alt=""/>
                <div class="card-body">
                    <p class="card-title text-dark">Laddu</p>
                </div>
            </div>
            <div class="card">
                <img src="https://www.smbkashuchirawa.com/img/peda.jpg" alt=""/>
                <div class="card-body">
                    <p class="card-text text-dark">Mawa Peda</p>
                </div>
            </div>
            <div class="card">
                <img src="https://www.smbkashuchirawa.com/img/kaju%20katli.jpg" alt=""/>
                <div class="card-body">
                    <p class="card-text text-dark">Kaju Katli</p>
                </div>
            </div>
            <div class="card">
                <img src="https://www.smbkashuchirawa.com/img/klakand.jpg" alt=""/>
                <div class="card-body">
                    <p class="card-text text-dark">Kalakand</p>
                </div>
            </div>
        </div>
        <NavLink class="btn btn-outline-warning mb-5" to="/Products">More Products</NavLink>
        </>
    );
}
export default Home;