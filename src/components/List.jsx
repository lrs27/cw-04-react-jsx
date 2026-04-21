import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <ul>
                {this.props.items.map((item, index) => (
                    <li key={index}>
                        {item.name} — <em>{item.type}</em>
                    </li>
                ))}
            </ul>
        );
    }
}

export default List;
