import React from 'react';
import { TabCircle } from './TabCircle';
import { CircleDisplay } from './CircleDisplay';

const data = [
  {
    id: 1,
    name: '2',
  },
  {
    id: 2,
    name: '2A',
  },
  {
    id: 3,
    name: '3',
  },
  {
    id: 4,
    name: '3A',
  },
  {
    id: 5,
    name: '4',
  },
  {
    id: 6,
    name: '4A',
  },
  {
    id: 7,
    name: '5',
  },
  {
    id: 8,
    name: '5A',
  },
  {
    id: 9,
    name: '6',
  },
  {
    id: 10,
    name: '6A',
  },
];

const TabContent = ({ id, show, active, loading }) => {
  const [activeCircle, setActiveCircle] = React.useState(false);
  const [circleId, setCircleId] = React.useState(0);
  const [showDisplayView, setShowDisplayView] = React.useState(false);
  const [wait, setWait] = React.useState(false);
  const [startDate, setStartDate] = React.useState('');
  const [title, setTitle] = React.useState('');

  const onClickDisplay = (data) => {
    setActiveCircle(true);
    setCircleId(data.id);
    setTitle(data.name);
    setShowDisplayView(true);
  };

  const onChangeDate = (date) => {
    setStartDate(date);
  };

  return (
    <div
      className={`tab-pane fade ${show ? 'show' : null} ${
        active ? 'active' : null
      }`}
      id={id}
      role="tabpanel"
      aria-labelledby={`${id}-tab`}
    >
      <div className="tab-pane-content">
        <TabCircle
          active={activeCircle}
          data={data}
          onClickDisplay={onClickDisplay}
          id={circleId}
        />
      </div>
      <CircleDisplay
        startDate={startDate}
        onChangeDate={onChangeDate}
        title={title}
      />
    </div>
  );
};

export { TabContent };
