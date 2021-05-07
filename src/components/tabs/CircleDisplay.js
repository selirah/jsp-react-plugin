import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import timetable from '../../img/winter-timetable.png';
import duration from '../../img/duration.png';
import startStop from '../../img/start-stop.png';
import map from '../../img/map.png';
import print from '../../img/print-download-timetable.png';

const CircleDisplay = ({ startDate, onChangeDate, title }) => {
  return (
    <div className="tab-content__display">
      <div className="display-info">
        <div className="display-title">
          <h4>
            Travel Plan: <span>{title}</span>
          </h4>
        </div>
        <div className="display-details">
          <div className="display-details__item">
            <img alt="icon" src={timetable} />
            <span>Timetable</span>
          </div>
          <div className="display-details__item">
            <img alt="icon" src={duration} />
            <span>Duration</span>
          </div>
          <div className="display-details__item">
            <img alt="icon" src={startStop} />
            <span>Start-Stop</span>
          </div>
          <div className="display-details__item">
            <img alt="icon" src={map} />
            <span>Coordinates</span>
          </div>
          <div className="display-details__item">
            <img alt="icon" src={print} />
            <span>Print Timetable</span>
          </div>
        </div>
      </div>
      <div className="display-table">
        <div className="display-table-info">
          <div className="date-title">
            <h4>Select Date:</h4>
          </div>
          <div className="calender">
            <DatePicker
              selected={startDate}
              onChange={(date) => onChangeDate(date)}
              className="date-picker"
              dateFormat="yyyy-MM-dd"
              popperPlacement="auto-start"
            />
          </div>
        </div>
        <div className="display-table-paragraph">
          <p>Info will be displayed here</p>
        </div>
        <div className="table-list">
          <table className="table bordered">
            <thead>
              <th>Time</th>
              <th>Start</th>
              <th>Stop</th>
            </thead>
            <tbody>
              <tr>
                <td>5h A0 6h</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>5h A0 6h</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export { CircleDisplay };
