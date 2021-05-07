import React from 'react';

const TabCircle = ({ active, data, onClickDisplay, id }) => {
  return data.map((d) => (
    <div
      className={`tab-pane__circle ${active && d.id === id ? 'active' : ''}`}
      onClick={() => onClickDisplay(d)}
      key={d.id}
    >
      <h4>{d.name}</h4>
    </div>
  ));
};

export { TabCircle };
