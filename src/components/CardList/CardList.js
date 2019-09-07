import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

const CardList = (props) => {
    return (
        
        <div className="card-list">
           {props.monsters.map(monster => 
            <Card key={monster.id} monster={monster} />
            )} 
        </div>
    )
}

export default CardList;