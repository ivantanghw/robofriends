import React from 'react';
import Card from './Card.js'

const CardList = ({ robots }) => {
    // Below 3 rows are Error testing
    // if (true) {
    //     throw new Error('NOOOOOOO!')
    // }
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                    <Card 
                    key={robots[i].id} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}
                    />
                    )   
                })
            }
        </div>
    )
};

export default CardList;