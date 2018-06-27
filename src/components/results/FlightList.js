import * as React from 'react';

import './FlightList.css';
import Typography from '../common/Typography';

const FlightList = ({ flights, origin, destination }) =>
  (
    <div className='FlightList'>
      <div className='FlightListHeader'>
        <Typography size='header'>
          Showing {flights.length} flights from {origin} to {destination}:
        </Typography>
      </div>
      <div className='FlightListItems'>
        {flights.map(flight => (
          <div key={flight.id} className='FlightListItem'>
            <div>
              <div>
                <Typography>{flight.dTime} - {flight.aTime}</Typography>
              </div>
            </div>
            <div>
              <div>Duration</div>
              <div>
                <Typography type='secondary'>
                  {flight.cityFrom} ({flight.flyFrom}) -> {flight.cityTo} ({flight.flyTo})
                </Typography>
              </div>
            </div>
            <div>{flight.price} EUR</div>
          </div>
        ))}
      </div>
    </div>
  );

export default FlightList;
