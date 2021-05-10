import React from 'react';
import bus from '../../img/front-of-bus.svg';
import { AccordionContent } from './AccordionContent';

const AccordionCard = ({ headerId, collapseId }) => {
  return (
    <div className="card">
      <div className="card-header" id={headerId}>
        <h2 className="mb-0">
          <button
            className="btn btn-link btn-block text-left"
            type="button"
            data-toggle="collapse"
            data-target={`#${collapseId}`}
            aria-expanded="true"
            aria-controls={collapseId}
          >
            <img alt="" src={bus} />
            <h4 className="title">Just One</h4>
            <h4 className="desc">This is the desctiption - Example </h4>
          </button>
        </h2>
      </div>

      <AccordionContent headerId={headerId} collapseId={collapseId}>
        Some placeholder content for the first accordion panel. This panel is
        shown by default, thanks to the <code>.show</code> className.
      </AccordionContent>
    </div>
  );
};

export { AccordionCard };
