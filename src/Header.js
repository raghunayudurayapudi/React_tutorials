import React from 'react';

const Header = (props) => {
    return (
        <header className={props.className}>
            Welcome To My tutorial {props.name}
        </header>
    );
}

export default Header;