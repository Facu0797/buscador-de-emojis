import React, { useState } from 'react';

const Emoji = ({titulo, emoji, darkMode}) => {

    const [copiar, setCopiar] = useState(false);

    const handleCopiar = () => {
        navigator.clipboard.writeText(emoji);
        setCopiar(true);
        setTimeout(() => setCopiar(false), 1500);
    }

    return ( 
        <article className={`card-emoji ${darkMode ? "dark-mode" : ""}`} onClick={handleCopiar}>
            <p className="emoji-icon">{emoji}</p>
            <h4>{titulo}</h4>
            {copiar ? <p className='copied'>Copiado</p> : null}
        </article>
    );
}
 
export default Emoji;