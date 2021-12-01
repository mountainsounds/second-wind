import Nav from '@/components/navigation/Nav';
import { useState } from 'react';
import Card from '@/components/cards/Card';
import rockItems from '@/data/rockItems';



export default function Rock() {

    return (
        <section id='rockPage' className='hero is-info' >
            <Nav />
            <div className="cardListContainer is-flex">
                {rockItems.map((data, i) => <Card key={i} data={data} />)}
            </div>
        </section >
    )
}


