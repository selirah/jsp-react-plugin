import React from 'react';
import { PlannerBackground } from '../Style';
import { Spinner } from '../Spinner';

const Planner = () => {
  return (
    <PlannerBackground>
      <h2>Travel Planner</h2>
      <div className="planner__box">
        <div className="planner__box--inputbox">
          <input type="text" placeholder="Enter starting point station" />
          <span className="location-icon">
            <i className="fa fa-location-arrow"></i>
          </span>
        </div>

        <div className="planner__box--inputbox">
          <input type="text" placeholder="Enter final station" />
        </div>
        <div className="planner__box--inputbox">
          <button className="btn btn-primary">
            <i className="fa fa-map-marked-alt"></i>
          </button>
        </div>
      </div>
      {/* <Spinner /> */}
    </PlannerBackground>
  );
};

export { Planner };
