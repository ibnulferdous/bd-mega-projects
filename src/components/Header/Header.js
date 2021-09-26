import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1 className="uppercase">Mega Projects Monitor</h1>
            <p>TheBangladesh government has allocated one-fourth of this year's development budget to 10 mega projects notwithstanding their unimpressive implementation rate. By definition, megaprojects are large-scale, complex ventures. These projects usually cost millions of dollars and are transformational in nature impacting millions of people.</p>
            <div>
                <h2 className="uppercase">Total Projects: 10</h2>
                <h2 className="uppercase">Total Estimated Cost: $40.77 Billion</h2>
            </div>
        </header>
    );
};

export default Header;