import React from 'react';


function Details (props) {
    const { event } = props
    return(
        <div>
           {event.title}
        </div>
    )
}

export default Details;