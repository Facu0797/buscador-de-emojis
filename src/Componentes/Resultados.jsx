import React from 'react';
import { buscarEmoji } from '../helppers/buscarEmoji';
import Emoji from './Emoji';

const Resultados = ({emoji, darkMode}) => {

    const arrayEmojis = buscarEmoji(emoji);

    return ( 
        <section className="container results">
            {arrayEmojis && arrayEmojis.map((item) => (
                <Emoji 
                    key={item.title}
                    titulo={item.title}
                    emoji={item.symbol}
                    darkMode={darkMode}
                />     
            ))}
        </section>
    );
}
 
export default Resultados;