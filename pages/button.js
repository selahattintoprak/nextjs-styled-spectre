import Button, {ButtonGroup} from "../ui-components/Button";
import { UtilitiesStyles, IconsStyles } from "../ui-styles/styles";
export default () => (
  <>
    <Button>default</Button>
    <Button kind="primary">primary</Button>
    <Button kind="link">link</Button>
    <Button kind="success">success</Button>
    <Button kind="error">error</Button>
    <Button size="lg">lg</Button>
    <Button size="sm">sm</Button>
    <Button size="block">block</Button>
    <Button kind="primary" size="lg">
      <i className="icon icon-arrow-left"></i> large
    </Button>
    <Button kind="primary">
      <i className="icon icon-arrow-left"></i> normal
    </Button>
    <Button kind="primary" size="sm">
      <i className="icon icon-arrow-left"></i> small
    </Button>
    <Button kind="action">
      <i className="icon icon-arrow-left"></i>
    </Button>
    <Button kind="action" className=" s-circle">
      <i className="icon icon-arrow-left"></i>
    </Button>
    <Button className="disabled" tabIndex="-1">
      disabled Button
    </Button>
    <Button disabled tabIndex="-1">
      disabled Button
    </Button>
    <Button withLoading>Button</Button>
    <Button kind="primary" withLoading>
      primary Button
    </Button>
    <ButtonGroup block>
      <Button>first Button</Button>
      <Button>second Button</Button>
      <Button>third Button</Button>
    </ButtonGroup>
    <UtilitiesStyles />
    <IconsStyles />
  </>
);
