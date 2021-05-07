import React from 'react';

const Card = ({ title, collapse, header, img, children }) => {
  return (
    <div className="card">
      <div
        className="card-header"
        id={header}
        style={{ backgroundImage: `url(${img})` }}
      >
        <h2 className="mb-0">
          <button
            className="btn btn-link btn-block collapsed"
            type="button"
            data-toggle="collapse"
            data-target={`#${collapse}`}
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            {title}
          </button>
        </h2>
      </div>

      <div
        id={collapse}
        className="collapse"
        aria-labelledby={header}
        data-parent="#accordionExample"
      >
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export { Card };
