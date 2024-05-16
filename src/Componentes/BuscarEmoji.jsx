import React, { useState } from 'react';

const BuscarEmoji = ({setEmoji, setDarkMode, darkMode}) => {

    const [input,setInput] = useState("");
    const [error,setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input === "") {
            setError(true)
            setTimeout(() => setError(false), 1500);
            return;
        }
        setEmoji(input);
        setInput("");
    }

    const handleClick = () => {
        setEmoji("");
    }

    const handleDarkMode = () => {
        setDarkMode(current => !current);
    }
    
    return ( 
        <section className={`form ${darkMode ? "dark-mode" : ""}`}>
            <form onSubmit={handleSubmit}>
                <input value={input} onChange={(e) => {setInput(e.target.value)}} type="text" placeholder='Some emoji word...'/>
                <button onClick={handleClick} className='button' type='button'>All</button>
                <div onClick={handleDarkMode} className="toggle-box">
                    <div className="toggle-circle"></div>
                </div>
            </form>
            {error && <p className='error'>El campo esta vacio</p>}
        </section>
    );
}
 
export default BuscarEmoji;