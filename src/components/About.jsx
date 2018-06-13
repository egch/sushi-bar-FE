import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div>

                <Grid>
                    <Col sm={8}>
                        <Image src="images/sushi.jpg" className="about" rounded />
                        <h3>Sushi Bar</h3>
                        <p> Sistema di gestione di un baracchino del sushi virtuale in cui ogni cliente può consultare il menù online.</p>
                        <p> Una volta registrato può effettuare l'ordine, indicare il tavolo a cui esssere servito e pagare il conto.</p>
                        <p> Una volta pagato il conto al cuoco compare la comanda da cucinare e servire al cliente la sua cena/pranzo.</p>
                        <br></br>
                        <br></br>
                        <p> Un amministratore del locale ha a disposizione una dashboard per gestire gli utenti, personalizzare e comporre il menù con i prezzi delle portate, supervisionare il lavoro del cuoco.</p>
                    </Col>
                </Grid>
            </div>
        )
    }
}
