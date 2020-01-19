import React from 'react';

function SupportList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li><a>{number}</a></li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

export default SupportList;