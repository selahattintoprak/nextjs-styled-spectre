import { ButtonsStyles } from "../ui-styles/styles";
import cx from "classnames";
export default ({ kind, size, withLoading, className, children, ...rest }) => {
  let classNames = cx(
    "btn",
    className,
    { [`btn-${kind}`]: kind },
    { [`btn-${size}`]: size },
    { loading: withLoading }
  );
  return (
    <>
      <button className={classNames} {...rest}>
        {children}
      </button>
      <ButtonsStyles />
    </>
  );
};
export const ButtonGroup = ({ block, className, children }) => {
  let classnames = cx("btn-group", className, { "btn-group-block": block });
  return (
    <>
      <div className={classnames}>{children}</div>
      <ButtonsStyles />
    </>
  );
};
