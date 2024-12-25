import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export const ProjectInfo = ({ children, pos_respon }) => {
  //
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion
        open={open === 1}
        className="mb-2 rounded-lg border border-gray-500 px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 text-lg text-gray-700 transition-colors ${
            open === 1 ? "text-gray-950 font-semibold underline" : ""
          }`}
        >
          Tech Stacks
        </AccordionHeader>
        <AccordionBody className="flex flex-wrap gap-x-5 pt-0 text-base font-normal">
          {children}
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        className="mb-2 rounded-lg border border-gray-500 px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 text-lg text-gray-700 transition-colors ${
            open === 2 ? "text-gray-950 font-semibold underline" : ""
          }`}
        >
          Position & Responsibility
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          {pos_respon}
        </AccordionBody>
      </Accordion>
    </>
  );
};
