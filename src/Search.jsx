import React from "react";

function Search({ setText }) {
    return (
        <div className="search-country-container">
            <input
                type="text"
                placeholder="ВВЕДИТЕ НАЗВАНИЕ СЕТИ, АДРЕС, ГОРОД ИЛИ НАЗВАНИЕ АПТЕКИ"
                onChange={(event) => setText(event)}
            />
        </div>
    );
}

export default Search;
