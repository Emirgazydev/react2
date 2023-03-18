import React from 'react';
import {arr} from './Information'

const Hero = () => {
    return <section id="hero">
        <div className="container">
            <div className="hero">
                <h1>Вкусные ресепты</h1> {
                arr.map((el) => <div>
                        <h3 className="name">{el.name}</h3>
                        <p className="ingredient">{el.ingredients.map(el => (
                            <p className="name2">{el.name} {el.amount} {el.measurement}</p>
                        ))}</p>
                        <h1 className="instruct">Инструкция по приготовлению</h1>
                        <h4 className="steps">{el.steps}</h4>
                    </div>
                )
            }
            </div>
        </div>
    </section>;
};

export default Hero;