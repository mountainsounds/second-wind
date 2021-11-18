import Nav from '../components/nav';
import { useState } from 'react';
import Card from '../components/cards/Card';
import rockItems from '@/data/rockItems';



export default function Rock() {

    return (
        <section id='rockPage' className='hero is-info' >
            <Nav />
            <div className="cardListContainer is-flex">
                {rockItems.map(data => <Card data={data} />)}
            </div>
        </section >
    )
}


