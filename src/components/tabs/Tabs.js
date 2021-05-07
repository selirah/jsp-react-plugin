import React from 'react';
import { TabsLayout } from '../Style';
import { TabContent } from './TabContent';

const Tabs = () => {
  return (
    <TabsLayout>
      <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
        <a
          className="nav-item nav-link active"
          id="nav-home-tab"
          data-toggle="tab"
          href="#nav-first"
          role="tab"
          aria-controls="nav-first"
          aria-selected="true"
        >
          Night Lines
        </a>
        <a
          className="nav-item nav-link"
          id="nav-profile-tab"
          data-toggle="tab"
          href="#nav-second"
          role="tab"
          aria-controls="nav-second"
          aria-selected="false"
        >
          City Lines
        </a>
        <a
          className="nav-item nav-link"
          id="nav-contact-tab"
          data-toggle="tab"
          href="#nav-third"
          role="tab"
          aria-controls="nav-third"
          aria-selected="false"
        >
          Suburban Lines
        </a>
        <a
          className="nav-item nav-link"
          id="nav-about-tab"
          data-toggle="tab"
          href="#nav-fourth"
          role="tab"
          aria-controls="nav-fourth"
          aria-selected="false"
        >
          Cruise Lines
        </a>
      </div>
      <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
        <TabContent id="nav-first" active={true} show={true} loading={false} />
        <TabContent
          id="nav-second"
          active={false}
          show={false}
          loading={false}
        />
        <TabContent
          id="nav-third"
          active={false}
          show={false}
          loading={false}
        />
        <TabContent
          id="nav-fourth"
          active={false}
          show={false}
          loading={false}
        />
      </div>
    </TabsLayout>
  );
};

export { Tabs };
