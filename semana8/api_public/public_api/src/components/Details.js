import React from 'react';


function Details (props) {
    const { event } = props
    return(
        <div>
          <h2><strong>{event.title}</strong></h2>
          <p>{event.event_date_utc}</p>
          <p>{event.flight_number}</p>
          <p>{event.details}</p>
        </div>
    )
}

export default Details;