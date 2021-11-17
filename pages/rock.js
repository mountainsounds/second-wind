import Nav from '../components/nav';
import { useState } from 'react';
import Card from '../components/cards/Card';

export default function Rock() {

    return (
        <section id='rockPage' className="hero is-info is-fullheight">
            <Nav />
            <section className="container">
                <Card />
            </section>


        </section >
    )
}

