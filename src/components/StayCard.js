import React from 'react';
import shoe from '../assets/shoe.png';

export default function StayCard() {
    return (
        <div className="container">
            <div className="card">
                <div className="sneaker">
                    <div className="circle">
                        <img src={shoe} alt="shoe"></img>
                    </div>
                </div>
                <div className="info">
                    <h1 className="title">Cool SX11</h1>
                    <h3>FUTURE-READY EXCEPTIONAL COMFORT FOR TRAINERS</h3>
                <div className="size">
                    <button>7</button>
                    <button className="active">8</button>
                    <button>9</button>
                    <button>11</button>
                </div>
                <div className="purchase">
                    <button>Purchase</button>
                </div>
                </div>
            </div>
        </div>
    )
}
