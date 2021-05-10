import React from 'react';
import { AccordionCard } from './AccordionCard';

const Accordion = () => {
  return (
    <div className="accordion-layout">
      <div className="accordion" id="accordionList">
        <AccordionCard headerId="listOne" collapseId="collapseListOne" />
        <AccordionCard headerId="listTwo" collapseId="collapseListTwo" />
        <AccordionCard headerId="listThree" collapseId="collapseListThree" />
        <AccordionCard headerId="listFour" collapseId="collapseListFour" />
        <AccordionCard headerId="listFive" collapseId="collapseListFive" />
        <AccordionCard headerId="listSix" collapseId="collapseListSix" />
        <AccordionCard headerId="listSeven" collapseId="collapseListSeven" />
        <AccordionCard headerId="listEight" collapseId="collapseListEight" />
        <AccordionCard headerId="listNine" collapseId="collapseListNine" />
        <AccordionCard headerId="listTen" collapseId="collapseListTen" />
        <AccordionCard headerId="list11" collapseId="collapseList11" />
        <AccordionCard headerId="list12" collapseId="collapseList12" />
        <AccordionCard headerId="list13" collapseId="collapseList13" />
        <AccordionCard headerId="list14" collapseId="collapseList14" />
        <AccordionCard headerId="list15" collapseId="collapseList15" />
      </div>
    </div>
  );
};

export { Accordion };
