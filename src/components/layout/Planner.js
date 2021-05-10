import React from 'react';
import { useDispatch } from 'react-redux';
import { PlannerBackground } from '../Style';
import appActions from '../../store/app/actions';
import { Spinner } from '../Spinner';

const { saveAddressInput } = appActions;

const Planner = () => {
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({ from: '', to: '' });

  const handleChnage = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = () => {
    dispatch(saveAddressInput(values));
  };

  return (
    <PlannerBackground>
      <h2>Travel Planner</h2>
      <div className="planner__box">
        <div className="planner__box--inputbox">
          <input
            type="text"
            name="from"
            placeholder="Enter starting point station"
            onChange={handleChnage}
          />
          <span className="location-icon">
            <i className="fa fa-location-arrow"></i>
          </span>
        </div>

        <div className="planner__box--inputbox">
          <input
            type="text"
            placeholder="Enter final station"
            name="to"
            onChange={handleChnage}
          />
        </div>
        <div className="planner__box--inputbox">
          <button className="btn btn-primary" onClick={onSubmit}>
            <i className="fas fa-map-marked-alt"></i>
          </button>
        </div>
      </div>
      {/* <Spinner /> */}
    </PlannerBackground>
  );
};

export { Planner };
