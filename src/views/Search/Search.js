import { useState } from "react";
import './Search.mod.css';

export default function Search ({ onSubmit }) {
    const [value, setValue] = useState('');

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        
        if (value.trim() === '') {
            return;
        }
        
        onSubmit(value)
        setValue('')
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <input
                    className="input"
                    type="text"
                    name="value"
                    value={value}
                    onChange={handleChange}
                    placeholder="Search movies"
                />
                <button className="search-btn" type="submit"> Search </button>
            </form>
        </>
    )
}