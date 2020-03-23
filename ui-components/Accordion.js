import { AccordionsStyles } from "../ui-styles/styles";
import cx from "classnames";
const Accordion = ({ type, id, name, className, children, ...rest }) => {
  return (
    <>
      <div class="accordion">
        <input type={type} id={id} name={name} hidden />
        {children}
      </div>
      <AccordionsStyles />
    </>
  );
};

const Header = ({ children, htmlFor }) => (
  <label class="accordion-header" htmlFor={htmlFor}>
    {children}
  </label>
);
const Body = ({ children }) => <div class="accordion-body">{children}</div>;

export const Details = ({ open, children }) => (
  <details class="accordion" open={open}>
    {children}
  </details>
);
const Summary = ({ children }) => (
  <summary class="accordion-header">{children}</summary>
);
Details.Summary = Summary;
Accordion.Header = Header;
Accordion.Body = Body;
export default Accordion;
