import React from 'react';

function BookTemplate(props) {
    console.log(props);
    function deleteSelf() {
        props.deleteBook(props.id);
    }
    return (
        <div id="booktemplate">
            <label>{props.ibsn}</label>
            <label>{props.title}</label>
            <label>{props.author}</label>
            <label>{props.category}</label>
            <img src={props.imageurl} alt="default"/>
            <button onClick={deleteSelf}>Delete</button>
        </div>
    )
}

export default BookTemplate;