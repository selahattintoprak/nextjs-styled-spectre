import brandScss from "./brand.scss";
import { LabelsStyles } from "../../ui-styles/styles";
export default () => (
  <>
    <div className="docs-brand">
      <a className="docs-logo" href="index.html">
        <img src="spectre-logo.svg" alt="Spectre.css CSS Framework"/>
        <h2>SPECTRE</h2>
        <small className="label label-secondary text-bold">DOCS</small>
      </a>
    </div>
    <LabelsStyles/>
    <style jsx global>
      {brandScss}
    </style>
  </>
);