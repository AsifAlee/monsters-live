import React from 'react';
import './card-list.style.css';
import Card from '../card/card.component';

const CardList = (props) => {
    console.log("monsters passed to cardlist are:", props.monsters);
    return (<div className='card-list'>
        {

            props.monsters.map(singleMonster =>
                <Card key={singleMonster.id} singleMonster={singleMonster} />
            )
        }

    </div>)
}
export default CardList;