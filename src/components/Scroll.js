import React from "react";

const Scroll = (props) => {
    return (
        // double curly brackets
        // outer: JS expression
        // inner: retirn on object having CSS styles
        <div style={{ overflowY: 'scroll', border: '1px solid white', height: '750px'}}>
            {props.children}
        </div>
    )
}

export default Scroll