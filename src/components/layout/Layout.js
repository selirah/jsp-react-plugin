import React from 'react';
import { LayoutBackground } from '../Style';
import acc1 from '../../img/accordion-1.png';
import acc2 from '../../img/accordion-2.png';
import acc3 from '../../img/accordion-3.png';
import acc4 from '../../img/accordion-4.png';
import { Card } from './Card';
import { Tabs } from '../tabs/Tabs';
import { List } from '../list/List';

const Layout = () => {
  return (
    <LayoutBackground>
      <div className="layout__box">
        <div className="accordion" id="accordionExample">
          <Card
            title="Collapsible Group Item #1"
            header="headingOne"
            collapse="collapseOne"
            img={acc1}
          >
            <Tabs />
          </Card>
          <Card
            title="Collapsible Group Item #2"
            header="headingTwo"
            collapse="collapseTwo"
            img={acc2}
          >
            <List />
          </Card>
          <Card
            title="Collapsible Group Item #3"
            header="headingThree"
            collapse="collapseThree"
            img={acc3}
          >
            Some placeholder content for the second accordion panel. This panel
            is hidden by default.
          </Card>
          <Card
            title="Collapsible Group Item #4"
            header="headingFour"
            collapse="collapseFour"
            img={acc4}
          >
            Some placeholder content for the second accordion panel. This panel
            is hidden by default.
          </Card>
        </div>
      </div>
    </LayoutBackground>
  );
};

export { Layout };
