import React from 'react';

const AccordionContent = ({ headerId, collapseId, children }) => {
  return (
    <div
      id={collapseId}
      className="collapse"
      aria-labelledby={headerId}
      data-parent="#accordionList"
    >
      <div className="card-body">{children}</div>
    </div>
  );
};

export { AccordionContent };
