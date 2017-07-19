import React from "react"
import BootstrapHead from "../components/BootstrapHead"
import Layout from "../components/MyLayout.js"
import {
  Button,
  ButtonToolbar,
  ButtonGroup,
  Panel,
  DropdownButton,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
  SplitButton,
  Dropdown,
  Glyphicon,
  Clearfix,
  Modal,
  Tooltip,
  Nav,
  NavItem,
  NavDropdown,
  Navbar,
  FormGroup,
  FormControl,
  Breadcrumb,
  Tabs,
  Tab,
  Row,
  Col,
  Pagination,
  Pager,
  Grid,
  Jumbotron,
  PageHeader,
  ListGroup,
  ListGroupItem,
  Table,
  Well,
  Checkbox,
  Radio,
  ControlLabel,
  Form,
  InputGroup,
  HelpBlock,
  Image,
  Thumbnail,
  Carousel,
  Media,
  Label,
  Alert,
  ProgressBar
} from "react-bootstrap"

const wellStyles = { maxWidth: 400, margin: "0 auto 10px" }

const dummySentences = [
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  "Donec hendrerit tempor tellus.",
  "Donec pretium posuere tellus.",
  "Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.",
  "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "Nulla posuere.",
  "Donec vitae dolor.",
  "Nullam tristique diam non turpis.",
  "Cras placerat accumsan nulla.",
  "Nullam rutrum.",
  "Nam vestibulum accumsan nisl."
]

let TestPage = function() {
  return (
    <Layout title="Components">
      <BootstrapHead />
      <Panel header="Button styles">
        <ButtonToolbar>
          {/* Standard button */}
          <Button>Default</Button>

          {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
          <Button bsStyle="primary">Primary</Button>

          {/* Indicates a successful or positive action */}
          <Button bsStyle="success">Success</Button>

          {/* Contextual button for informational alert messages */}
          <Button bsStyle="info">Info</Button>

          {/* Indicates caution should be taken with this action */}
          <Button bsStyle="warning">Warning</Button>

          {/* Indicates a dangerous or potentially negative action */}
          <Button bsStyle="danger">Danger</Button>

          {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
          <Button bsStyle="link">Link</Button>
        </ButtonToolbar>
      </Panel>
      <Panel header="Button sizes">
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large">
            Large button
          </Button>
          <Button bsSize="large">Large button</Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button bsStyle="primary">Default button</Button>
          <Button>Default button</Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="small">
            Small button
          </Button>
          <Button bsSize="small">Small button</Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="xsmall">
            Extra small button
          </Button>
          <Button bsSize="xsmall">Extra small button</Button>
        </ButtonToolbar>
      </Panel>
      <Panel header="Block level buttons">
        <div className="well" style={wellStyles}>
          <Button bsStyle="primary" bsSize="large" block>
            Block level button
          </Button>
          <Button bsSize="large" block>
            Block level button
          </Button>
        </div>
      </Panel>
      <Panel header="Active buttons">
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large" active>
            Primary button
          </Button>
          <Button bsSize="large" active>
            Button
          </Button>
        </ButtonToolbar>
      </Panel>
      <Panel header="Button tags">
        <ButtonToolbar>
          <Button href="#">Link</Button>
          <Button>Button</Button>
        </ButtonToolbar>
      </Panel>
      <Panel header="Disabled buttons">
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large" disabled>
            Primary button
          </Button>
          <Button bsSize="large" disabled>
            Button
          </Button>
        </ButtonToolbar>
      </Panel>
      <Panel header="Button group">
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Panel>
      <Panel header="Button toolbar">
        <ButtonToolbar>
          <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button>5</Button>
            <Button>6</Button>
            <Button>7</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button>8</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Panel>
      <Panel header="Button sizes">
        <div>
          <ButtonToolbar>
            <ButtonGroup bsSize="large">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
          </ButtonToolbar>

          <ButtonToolbar>
            <ButtonGroup>
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
          </ButtonToolbar>

          <ButtonToolbar>
            <ButtonGroup bsSize="small">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
          </ButtonToolbar>

          <ButtonToolbar>
            <ButtonGroup bsSize="xsmall">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
      </Panel>
      <Panel header="Nested buttons">
        <ButtonGroup>
          <Button>1</Button>
          <Button>2</Button>
          <DropdownButton title="Dropdown" id="bg-nested-dropdown">
            <MenuItem eventKey="1">Dropdown link</MenuItem>
            <MenuItem eventKey="2">Dropdown link</MenuItem>
          </DropdownButton>
        </ButtonGroup>
      </Panel>
      {/* <Panel>
        <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]}>
          <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>
          <ToggleButton value={2}>Checkbox 3</ToggleButton>

          <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>
        </ToggleButtonGroup>
      </Panel> */}
      {/* <Panel>
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
          <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>
          <ToggleButton value={2}>Radio 3</ToggleButton>

          <ToggleButton value={3}>Radio 3</ToggleButton>
        </ToggleButtonGroup>
      </Panel> */}
      <Panel header="Vertical buttons">
        <ButtonGroup vertical>
          <Button>Button</Button>
          <Button>Button</Button>
          <DropdownButton title="Dropdown" id="bg-vertical-dropdown-1">
            <MenuItem eventKey="1">Dropdown link</MenuItem>
            <MenuItem eventKey="2">Dropdown link</MenuItem>
          </DropdownButton>
          <Button>Button</Button>
          <Button>Button</Button>
          <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
            <MenuItem eventKey="1">Dropdown link</MenuItem>
            <MenuItem eventKey="2">Dropdown link</MenuItem>
          </DropdownButton>
          <DropdownButton title="Dropdown" id="bg-vertical-dropdown-3">
            <MenuItem eventKey="1">Dropdown link</MenuItem>
            <MenuItem eventKey="2">Dropdown link</MenuItem>
          </DropdownButton>
        </ButtonGroup>
      </Panel>
      <Panel header="Full width buttons">
        <ButtonGroup vertical block>
          <Button>Full width button</Button>
          <Button>Full width button</Button>
        </ButtonGroup>
      </Panel>
      <Panel header="Justified buttons">
        <ButtonGroup justified>
          <Button href="#">Left</Button>
          <Button href="#">Middle</Button>
          <DropdownButton title="Dropdown" id="bg-justified-dropdown">
            <MenuItem eventKey="1">Dropdown link</MenuItem>
            <MenuItem eventKey="2">Dropdown link</MenuItem>
          </DropdownButton>
        </ButtonGroup>
      </Panel>
      <Panel header="Button dropdowns">
        <div>
          <ButtonToolbar>
            <DropdownButton
              bsSize="large"
              title="Large button"
              id="dropdown-size-large"
            >
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">Separated link</MenuItem>
            </DropdownButton>
          </ButtonToolbar>

          <ButtonToolbar>
            <DropdownButton title="Default button" id="dropdown-size-medium">
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">Separated link</MenuItem>
            </DropdownButton>
          </ButtonToolbar>

          <ButtonToolbar>
            <DropdownButton
              bsSize="small"
              title="Small button"
              id="dropdown-size-small"
            >
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">Separated link</MenuItem>
            </DropdownButton>
          </ButtonToolbar>

          <ButtonToolbar>
            <DropdownButton
              bsSize="xsmall"
              title="Extra small button"
              id="dropdown-size-extra-small"
            >
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">Separated link</MenuItem>
            </DropdownButton>
          </ButtonToolbar>
        </div>
      </Panel>
      <Panel header="No caret button">
        <ButtonToolbar>
          <DropdownButton
            bsStyle="default"
            title="No caret"
            noCaret
            id="dropdown-no-caret"
          >
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
      </Panel>
      <Panel header="Button dropups">
        <div>
          <ButtonToolbar>
            <SplitButton title="Dropup" dropup id="split-button-dropup">
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">Separated link</MenuItem>
            </SplitButton>
          </ButtonToolbar>

          <ButtonToolbar>
            <SplitButton
              bsStyle="primary"
              title="Right dropup"
              dropup
              pullRight
              id="split-button-dropup-pull-right"
            >
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">Separated link</MenuItem>
            </SplitButton>
          </ButtonToolbar>
        </div>
      </Panel>
      <Panel header="Button dropdown right">
        <SplitButton
          title="Dropdown right"
          pullRight
          id="split-button-pull-right"
        >
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </SplitButton>
      </Panel>
      <Panel header="Custom dropdowns">
        <ButtonToolbar>
          <Dropdown id="dropdown-custom-1">
            <Dropdown.Toggle>
              <Glyphicon glyph="star" />
              Pow! Zoom!
            </Dropdown.Toggle>
            <Dropdown.Menu className="super-colors">
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3" active>
                Active Item
              </MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">Separated link</MenuItem>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown id="dropdown-custom-2">
            <Button bsStyle="info">mix it up style-wise</Button>
            <Dropdown.Toggle bsStyle="success" />
            <Dropdown.Menu className="super-colors">
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3" active>
                Active Item
              </MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">Separated link</MenuItem>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonToolbar>
      </Panel>
      {/* <Panel>
        <Clearfix>
          <ul className="dropdown-menu open">
            <MenuItem header>Header</MenuItem>
            <MenuItem>link</MenuItem>
            <MenuItem divider />
            <MenuItem header>Header</MenuItem>
            <MenuItem>link</MenuItem>
            <MenuItem disabled>disabled</MenuItem>
            <MenuItem title="See? I have a title.">link with title</MenuItem>
            <MenuItem eventKey={1} href="#someHref" onSelect={null}>
              link that alerts
            </MenuItem>
          </ul>
        </Clearfix>
      </Panel> */}
      {/* <Panel>
        <div className="static-modal">
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>One fine body...</Modal.Body>

            <Modal.Footer>
              <Button>Close</Button>
              <Button bsStyle="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </Panel> */}
      {/* <Panel>
        <div>
          <Tooltip placement="right" className="in" id="tooltip-right">
            Tooltip right
          </Tooltip>

          <Tooltip placement="top" className="in" id="tooltip-top">
            Tooltip top
          </Tooltip>

          <Tooltip placement="left" className="in" id="tooltip-left">
            Tooltip left
          </Tooltip>

          <Tooltip placement="bottom" className="in" id="tooltip-bottom">
            Tooltip bottom
          </Tooltip>
        </div>
      </Panel> */}
      <Panel header="Pill Navs">
        <Nav bsStyle="pills" activeKey={1} onSelect={null}>
          <NavItem eventKey={1} href="/home">
            NavItem 1 content
          </NavItem>
          <NavItem eventKey={2} title="Item">
            NavItem 2 content
          </NavItem>
          <NavItem eventKey={3} disabled>
            NavItem 3 content
          </NavItem>
        </Nav>
      </Panel>
      <Panel header="Tab Navs">
        <Nav bsStyle="tabs" activeKey="1" onSelect={null}>
          <NavItem eventKey="1" href="/home">
            NavItem 1 content
          </NavItem>
          <NavItem eventKey="2" title="Item">
            NavItem 2 content
          </NavItem>
          <NavItem eventKey="3" disabled>
            NavItem 3 content
          </NavItem>
          <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
            <MenuItem eventKey="4.1">Action</MenuItem>
            <MenuItem eventKey="4.2">Another action</MenuItem>
            <MenuItem eventKey="4.3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4.4">Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Panel>
      <Panel header="Stacked Navs">
        <Nav bsStyle="pills" stacked activeKey={1} onSelect={null}>
          <NavItem eventKey={1} href="/home">
            NavItem 1 content
          </NavItem>
          <NavItem eventKey={2} title="Item">
            NavItem 2 content
          </NavItem>
          <NavItem eventKey={3} disabled>
            NavItem 3 content
          </NavItem>
        </Nav>
      </Panel>
      <Panel header="Justified Navs">
        <div>
          <Nav bsStyle="tabs" justified activeKey={1} onSelect={null}>
            <NavItem eventKey={1} href="/home">
              NavItem 1 content
            </NavItem>
            <NavItem eventKey={2} title="Item">
              NavItem 2 content
            </NavItem>
            <NavItem eventKey={3} disabled>
              NavItem 3 content
            </NavItem>
          </Nav>
          <br />
          <Nav bsStyle="pills" justified activeKey={1} onSelect={null}>
            <NavItem eventKey={1} href="/home">
              NavItem 1 content
            </NavItem>
            <NavItem eventKey={2} title="Item">
              NavItem 2 content
            </NavItem>
            <NavItem eventKey={3} disabled>
              NavItem 3 content
            </NavItem>
          </Nav>
        </div>
      </Panel>
      <Panel header="Navbar">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
      </Panel>
      <Panel header="Responsive Navbar">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Link
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link
              </NavItem>
              <NavDropdown
                eventKey={3}
                title="Dropdown"
                id="basic-nav-dropdown"
              >
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Link Right
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link Right
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Panel>
      <Panel header="Navbar Forms">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Brand</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>{" "}
              <Button type="submit">Submit</Button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
      </Panel>
      <Panel header="Navbar links">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Brand</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Text>
              Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
            </Navbar.Text>
            <Navbar.Text pullRight>Have a great day!</Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </Panel>
      <Panel header="Breadcrumbs">
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
      </Panel>
      <Panel header="Tabs">
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Tab 1">
            Tab 1 content
          </Tab>
          <Tab eventKey={2} title="Tab 2">
            Tab 2 content
          </Tab>
          <Tab eventKey={3} title="Tab 3" disabled>
            Tab 3 content
          </Tab>
        </Tabs>
      </Panel>
      <Panel header="Tabs with Dropdown">
        <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={12}>
              <Nav bsStyle="tabs">
                <NavItem eventKey="first">Tab 1</NavItem>
                <NavItem eventKey="second">Tab 2</NavItem>
                <NavDropdown eventKey="3" title="Dropdown">
                  <MenuItem eventKey="3.1">Action</MenuItem>
                  <MenuItem eventKey="3.2">Another action</MenuItem>
                  <MenuItem eventKey="3.3">Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="3.4">Separated link</MenuItem>
                </NavDropdown>
              </Nav>
            </Col>
            <Col sm={12}>
              <Tab.Content animation>
                <Tab.Pane eventKey="first">Tab 1 content</Tab.Pane>
                <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>
                <Tab.Pane eventKey="3.1">Tab 3.1 content</Tab.Pane>
                <Tab.Pane eventKey="3.2">Tab 3.2 content</Tab.Pane>
                <Tab.Pane eventKey="3.3">Tab 3.3 content</Tab.Pane>
                <Tab.Pane eventKey="3.4">Tab 3.4 content</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Panel>
      <Panel header="Custom Tabs">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={4}>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="first">Tab 1</NavItem>
                <NavItem eventKey="second">Tab 2</NavItem>
              </Nav>
            </Col>
            <Col sm={8}>
              <Tab.Content animation>
                <Tab.Pane eventKey="first">Tab 1 content</Tab.Pane>
                <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Panel>
      <Panel header="Pagination">
        <div>
          <Pagination
            bsSize="large"
            items={10}
            activePage={1}
            onSelect={null}
          />
          <br />

          <Pagination
            bsSize="medium"
            items={10}
            activePage={2}
            onSelect={null}
          />
          <br />

          <Pagination
            bsSize="small"
            items={10}
            activePage={3}
            onSelect={null}
          />
        </div>
      </Panel>
      <Panel header="Advanced Pagination">
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          items={20}
          maxButtons={5}
          activePage={4}
          onSelect={null}
        />
      </Panel>
      <Panel header="Pagers">
        <Pager>
          <Pager.Item href="#">Previous</Pager.Item>{" "}
          <Pager.Item href="#">Next</Pager.Item>
        </Pager>
      </Panel>
      <Panel header="Aligned Pagers">
        <Pager>
          <Pager.Item previous href="#">
            &larr; Previous Page
          </Pager.Item>
          <Pager.Item next href="#">
            Next Page &rarr;
          </Pager.Item>
        </Pager>
      </Panel>
      <Panel header="Basic Grid">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <code>
                &lt;{"Col xs={12} md={8}"} /&gt;
              </code>
            </Col>
            <Col xs={6} md={4}>
              <code>
                &lt;{"Col xs={6} md={4}"} /&gt;
              </code>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={6} md={4}>
              <code>
                &lt;{"Col xs={6} md={4}"} /&gt;
              </code>
            </Col>
            <Col xs={6} md={4}>
              <code>
                &lt;{"Col xs={6} md={4}"} /&gt;
              </code>
            </Col>
            <Col xsHidden md={4}>
              <code>
                &lt;{"Col xsHidden md={4}"} /&gt;
              </code>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={6} xsOffset={6}>
              <code>
                &lt;{"Col xs={6} xsOffset={6}"} /&gt;
              </code>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col md={6} mdPush={6}>
              <code>
                &lt;{"Col md={6} mdPush={6}"} /&gt;
              </code>
            </Col>
            <Col md={6} mdPull={6}>
              <code>
                &lt;{"Col md={6} mdPull={6}"} /&gt;
              </code>
            </Col>
          </Row>
        </Grid>
      </Panel>
      <Panel header="Incorrect Grid">
        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={3}>
              <code>
                &lt;{"Col sm={6} md={3}"} /&gt;
              </code>
              <br />
              {dummySentences.slice(0, 6).join(" ")}
            </Col>
            <Col sm={6} md={3}>
              <code>
                &lt;{"Col sm={6} md={3}"} /&gt;
              </code>
              <br />
              {dummySentences.slice(0, 4).join(" ")}
            </Col>
            <Col sm={6} md={3}>
              <code>
                &lt;{"Col sm={6} md={3}"} /&gt;
              </code>
              <br />
              {dummySentences.slice(0, 6).join(" ")}
            </Col>
            <Col sm={6} md={3}>
              <code>
                &lt;{"Col sm={6} md={3}"} /&gt;
              </code>
              <br />
              {dummySentences.slice(0, 2).join(" ")}
            </Col>
          </Row>
        </Grid>
      </Panel>
      <Panel header="Clearfix Grid">
        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={3}>
              <code>
                &lt;{"Col sm={6} md={3}"} /&gt;
              </code>
              <br />
              {dummySentences.slice(0, 6).join(" ")}
            </Col>
            <Col sm={6} md={3}>
              <code>
                &lt;{"Col sm={6} md={3}"} /&gt;
              </code>
              <br />
              {dummySentences.slice(0, 4).join(" ")}
            </Col>
            <Clearfix visibleSmBlock>
              <code>
                &lt;{"Clearfix visibleSmBlock"} /&gt;
              </code>
            </Clearfix>
            <Col sm={6} md={3}>
              <code>
                &lt;{"Col sm={6} md={3}"} /&gt;
              </code>
              <br />
              {dummySentences.slice(0, 6).join(" ")}
            </Col>
            <Col sm={6} md={3}>
              <code>
                &lt;{"Col sm={6} md={3}"} /&gt;
              </code>
              <br />
              {dummySentences.slice(0, 2).join(" ")}
            </Col>
          </Row>
        </Grid>
      </Panel>
      <Panel header="Jumbotron">
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button bsStyle="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </Panel>
      <Panel header="PageHeader">
        <PageHeader>
          Example page header <small>Subtext for header</small>
        </PageHeader>
      </Panel>
      <Panel header="List group">
        <ListGroup>
          <ListGroupItem>Item 1</ListGroupItem>
          <ListGroupItem>Item 2</ListGroupItem>
          <ListGroupItem>...</ListGroupItem>
        </ListGroup>
      </Panel>
      <Panel header="Linked list group">
        <ListGroup>
          <ListGroupItem href="#link1">Link 1</ListGroupItem>
          <ListGroupItem href="#link2">Link 2</ListGroupItem>
          <ListGroupItem onClick={null}>Trigger an alert</ListGroupItem>
        </ListGroup>
      </Panel>
      <Panel header="Styled list group">
        <ListGroup>
          <ListGroupItem href="#" active>
            Link 1
          </ListGroupItem>
          <ListGroupItem href="#">Link 2</ListGroupItem>
          <ListGroupItem href="#" disabled>
            Link 3
          </ListGroupItem>
        </ListGroup>
      </Panel>
      <Panel header="Colored list group">
        <ListGroup>
          <ListGroupItem bsStyle="success">Success</ListGroupItem>
          <ListGroupItem bsStyle="info">Info</ListGroupItem>
          <ListGroupItem bsStyle="warning">Warning</ListGroupItem>
          <ListGroupItem bsStyle="danger">Danger</ListGroupItem>
        </ListGroup>
      </Panel>
      <Panel header="List group with header">
        <ListGroup>
          <ListGroupItem header="Heading 1">Some body text</ListGroupItem>
          <ListGroupItem header="Heading 2" href="#">
            Linked item
          </ListGroupItem>
          <ListGroupItem header="Heading 3" bsStyle="danger">
            Danger styling
          </ListGroupItem>
        </ListGroup>
      </Panel>
      <Panel header="Table">
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Panel>
      <Panel header="Panel alternatives">
        <div>
          <Panel header="Panel Title">Panel content</Panel>

          <Panel header="Panel Title" bsStyle="primary">
            Panel content
          </Panel>

          <Panel header="Panel Title" bsStyle="success">
            Panel content
          </Panel>

          <Panel header="Panel Title" bsStyle="info">
            Panel content
          </Panel>

          <Panel header="Panel Title" bsStyle="warning">
            Panel content
          </Panel>

          <Panel header="Panel Title" bsStyle="danger">
            Panel content
          </Panel>
        </div>
      </Panel>
      {/* <Panel>
        <Panel collapsible defaultExpanded header="Panel heading">
          Some default panel content here.
          <ListGroup fill>
            <ListGroupItem>Item 1</ListGroupItem>
            <ListGroupItem>Item 2</ListGroupItem>
            <ListGroupItem>&hellip;</ListGroupItem>
          </ListGroup>
          Some more panel content here.
        </Panel>
      </Panel> */}
      <Panel header="Well">
        <Well>Look I'm in a well!</Well>
      </Panel>
      <Panel header="Form controls">
        <form>
          <Checkbox checked readOnly>
            Checkbox
          </Checkbox>
          <Radio checked readOnly>
            Radio
          </Radio>

          <FormGroup>
            <Checkbox inline>1</Checkbox> <Checkbox inline>2</Checkbox>{" "}
            <Checkbox inline>3</Checkbox>
          </FormGroup>
          <FormGroup>
            <Radio name="radioGroup" inline>
              1
            </Radio>{" "}
            <Radio name="radioGroup" inline>
              2
            </Radio>{" "}
            <Radio name="radioGroup" inline>
              3
            </Radio>
          </FormGroup>

          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select</option>
              <option value="other">...</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId="formControlsSelectMultiple">
            <ControlLabel>Multiple select</ControlLabel>
            <FormControl componentClass="select" multiple>
              <option value="select">select (multiple)</option>
              <option value="other">...</option>
            </FormControl>
          </FormGroup>

          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Textarea</ControlLabel>
            <FormControl componentClass="textarea" placeholder="textarea" />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Static text</ControlLabel>
            <FormControl.Static>email@example.com</FormControl.Static>
          </FormGroup>

          <Button type="submit">Submit</Button>
        </form>
      </Panel>
      <Panel header="Inline forms">
        <Form inline>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Name</ControlLabel>{" "}
            <FormControl type="text" placeholder="Jane Doe" />
          </FormGroup>{" "}
          <FormGroup controlId="formInlineEmail">
            <ControlLabel>Email</ControlLabel>{" "}
            <FormControl type="email" placeholder="jane.doe@example.com" />
          </FormGroup>{" "}
          <Button type="submit">Send invitation</Button>
        </Form>
      </Panel>
      <Panel header="Horizontal forms">
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">Sign in</Button>
            </Col>
          </FormGroup>
        </Form>
      </Panel>
      <Panel header="Input groups">
        <form>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>@</InputGroup.Addon>
              <FormControl type="text" />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <FormControl type="text" />
              <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>$</InputGroup.Addon>
              <FormControl type="text" />
              <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <InputGroup>
              <FormControl type="text" />
              <InputGroup.Addon>
                <Glyphicon glyph="music" />
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <InputGroup>
              <InputGroup.Button>
                <Button>Before</Button>
              </InputGroup.Button>
              <FormControl type="text" />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <FormControl type="text" />
              <DropdownButton
                componentClass={InputGroup.Button}
                id="input-dropdown-addon"
                title="Action"
              >
                <MenuItem key="1">Item</MenuItem>
              </DropdownButton>
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>
                <input type="radio" aria-label="..." />
              </InputGroup.Addon>
              <FormControl type="text" />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>
                <input type="checkbox" aria-label="..." />
              </InputGroup.Addon>
              <FormControl type="text" />
            </InputGroup>
          </FormGroup>
        </form>
      </Panel>
      <Panel header="Input sizes">
        <form>
          <FormGroup bsSize="large">
            <FormControl type="text" placeholder="Large text" />
          </FormGroup>
          <FormGroup>
            <FormControl type="text" placeholder="Normal text" />
          </FormGroup>
          <FormGroup bsSize="small">
            <FormControl type="text" placeholder="Small text" />
          </FormGroup>
        </form>
      </Panel>
      <Panel header="Form validation">
        <form>
          <FormGroup
            controlId="formValidationSuccess1"
            validationState="success"
          >
            <ControlLabel>Input with success</ControlLabel>
            <FormControl type="text" />
            <HelpBlock>Help text with validation state.</HelpBlock>
          </FormGroup>

          <FormGroup
            controlId="formValidationWarning1"
            validationState="warning"
          >
            <ControlLabel>Input with warning</ControlLabel>
            <FormControl type="text" />
          </FormGroup>

          <FormGroup controlId="formValidationError1" validationState="error">
            <ControlLabel>Input with error</ControlLabel>
            <FormControl type="text" />
          </FormGroup>

          <FormGroup controlId="formValidationNull" validationState={null}>
            <ControlLabel>Input with no validation state</ControlLabel>
            <FormControl type="text" />
          </FormGroup>

          <FormGroup
            controlId="formValidationSuccess2"
            validationState="success"
          >
            <ControlLabel>Input with success and feedback icon</ControlLabel>
            <FormControl type="text" />
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup
            controlId="formValidationWarning2"
            validationState="warning"
          >
            <ControlLabel>Input with warning and feedback icon</ControlLabel>
            <FormControl type="text" />
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup controlId="formValidationError2" validationState="error">
            <ControlLabel>Input with error and feedback icon</ControlLabel>
            <FormControl type="text" />
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup
            controlId="formValidationSuccess3"
            validationState="success"
          >
            <ControlLabel>
              Input with success and custom feedback icon
            </ControlLabel>
            <FormControl type="text" />
            <FormControl.Feedback>
              <Glyphicon glyph="music" />
            </FormControl.Feedback>
          </FormGroup>

          <FormGroup
            controlId="formValidationWarning3"
            validationState="warning"
          >
            <ControlLabel>Input group with warning</ControlLabel>
            <InputGroup>
              <InputGroup.Addon>@</InputGroup.Addon>
              <FormControl type="text" />
            </InputGroup>
            <FormControl.Feedback />
          </FormGroup>

          <Form componentClass="fieldset" horizontal>
            <FormGroup controlId="formValidationError3" validationState="error">
              <Col componentClass={ControlLabel} xs={3}>
                Input with error
              </Col>
              <Col xs={9}>
                <FormControl type="text" />
                <FormControl.Feedback />
              </Col>
            </FormGroup>

            <FormGroup
              controlId="formValidationSuccess4"
              validationState="success"
            >
              <Col componentClass={ControlLabel} xs={3}>
                Input group with success
              </Col>
              <Col xs={9}>
                <InputGroup>
                  <InputGroup.Addon>@</InputGroup.Addon>
                  <FormControl type="text" />
                </InputGroup>
                <FormControl.Feedback />
              </Col>
            </FormGroup>
          </Form>

          <Form componentClass="fieldset" inline>
            <FormGroup
              controlId="formValidationWarning4"
              validationState="warning"
            >
              <ControlLabel>Input with warning</ControlLabel>{" "}
              <FormControl type="text" />
              <FormControl.Feedback />
            </FormGroup>{" "}
            <FormGroup controlId="formValidationError4" validationState="error">
              <ControlLabel>Input group with error</ControlLabel>{" "}
              <InputGroup>
                <InputGroup.Addon>@</InputGroup.Addon>
                <FormControl type="text" />
              </InputGroup>
              <FormControl.Feedback />
            </FormGroup>
          </Form>

          <Checkbox validationState="success">Checkbox with success</Checkbox>
          <Radio validationState="warning">Radio with warning</Radio>
          <Checkbox validationState="error">Checkbox with error</Checkbox>

          {/* This requires React 15's <span>-less spaces to be exactly correct. */}
          <FormGroup validationState="success">
            <Checkbox inline>Checkbox</Checkbox>{" "}
            <Checkbox inline>with</Checkbox> <Checkbox inline>success</Checkbox>
          </FormGroup>
        </form>
      </Panel>
      <Panel header="Shaped images">
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Image src="http://via.placeholder.com/171x180" rounded />
            </Col>
            <Col xs={6} md={4}>
              <Image src="http://via.placeholder.com/171x180" circle />
            </Col>
            <Col xs={6} md={4}>
              <Image src="http://via.placeholder.com/171x180" thumbnail />
            </Col>
          </Row>
        </Grid>
      </Panel>
      <Panel header="Responsive image">
        <Image src="http://via.placeholder.com/171x180" responsive />
      </Panel>
      <Panel header="Image thumbnails">
        <Grid>
          <Row>
            <Col xs={6} md={3}>
              <Thumbnail
                href="#"
                alt="171x180"
                src="http://via.placeholder.com/171x180"
              />
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail
                href="#"
                alt="171x180"
                src="http://via.placeholder.com/171x180"
              />
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail
                href="#"
                alt="171x180"
                src="http://via.placeholder.com/171x180"
              />
            </Col>
          </Row>
        </Grid>
      </Panel>
      <Panel header="Divider thumbnails">
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src="http://via.placeholder.com/242x200" alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="http://via.placeholder.com/242x200" alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="http://via.placeholder.com/242x200" alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </Panel>
      <Panel header="Carousel">
        <Carousel>
          <Carousel.Item>
            <img
              width={900}
              height={500}
              alt="900x500"
              src="http://via.placeholder.com/900x500"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width={900}
              height={500}
              alt="900x500"
              src="http://via.placeholder.com/900x500"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width={900}
              height={500}
              alt="900x500"
              src="http://via.placeholder.com/900x500"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Panel>
      <Panel header="Media objects">
        <div>
          <Media>
            <Media.Left>
              <img
                width={64}
                height={64}
                src="http://via.placeholder.com/64x64"
                alt="Image"
              />
            </Media.Left>
            <Media.Body>
              <Media.Heading>Media Heading</Media.Heading>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>
          <Media>
            <Media.Left>
              <img
                width={64}
                height={64}
                src="http://via.placeholder.com/64x64"
                alt="Image"
              />
            </Media.Left>
            <Media.Body>
              <Media.Heading>Media Heading</Media.Heading>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </p>
              <Media>
                <Media.Left>
                  <img
                    width={64}
                    height={64}
                    src="http://via.placeholder.com/64x64"
                    alt="Image"
                  />
                </Media.Left>
                <Media.Body>
                  <Media.Heading>Nested Media Heading</Media.Heading>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.
                  </p>
                </Media.Body>
              </Media>
            </Media.Body>
          </Media>
          <Media>
            <Media.Body>
              <Media.Heading>Media Heading</Media.Heading>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </p>
            </Media.Body>
            <Media.Right>
              <img
                width={64}
                height={64}
                src="http://via.placeholder.com/64x64"
                alt="Image"
              />
            </Media.Right>
          </Media>
          <Media>
            <Media.Left>
              <img
                width={64}
                height={64}
                src="http://via.placeholder.com/64x64"
                alt="Image"
              />
            </Media.Left>
            <Media.Body>
              <Media.Heading>Media Heading</Media.Heading>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </p>
            </Media.Body>
            <Media.Right>
              <img
                width={64}
                height={64}
                src="http://via.placeholder.com/64x64"
                alt="Image"
              />
            </Media.Right>
          </Media>
        </div>
      </Panel>
      <Panel header="Aligned Media">
        <div>
          <Media>
            <Media.Left align="top">
              <img
                width={64}
                height={64}
                src="http://via.placeholder.com/64x64"
                alt="Image"
              />
            </Media.Left>
            <Media.Body>
              <Media.Heading>Top aligned media</Media.Heading>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </p>

              <p>
                Donec sed odio dui. Nullam quis risus eget urna mollis ornare
                vel eu leo. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
              </p>
            </Media.Body>
          </Media>
          <Media>
            <Media.Left align="middle">
              <img
                width={64}
                height={64}
                src="http://via.placeholder.com/64x64"
                alt="Image"
              />
            </Media.Left>
            <Media.Body>
              <Media.Heading>Middle aligned media</Media.Heading>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </p>

              <p>
                Donec sed odio dui. Nullam quis risus eget urna mollis ornare
                vel eu leo. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
              </p>
            </Media.Body>
          </Media>
          <Media>
            <Media.Left align="bottom">
              <img
                width={64}
                height={64}
                src="http://via.placeholder.com/64x64"
                alt="Image"
              />
            </Media.Left>
            <Media.Body>
              <Media.Heading>Bottom aligned media</Media.Heading>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </p>

              <p>
                Donec sed odio dui. Nullam quis risus eget urna mollis ornare
                vel eu leo. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
              </p>
            </Media.Body>
          </Media>
        </div>
      </Panel>
      <Panel header="Media List">
        <div>
          <Media.List>
            <Media.ListItem>
              <Media.Left>
                <img
                  width={64}
                  height={64}
                  src="http://via.placeholder.com/64x64"
                  alt="Image"
                />
              </Media.Left>
              <Media.Body>
                <Media.Heading>Media heading</Media.Heading>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis.
                </p>

                <Media>
                  <Media.Left>
                    <img
                      width={64}
                      height={64}
                      src="http://via.placeholder.com/64x64"
                      alt="Image"
                    />
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>Nested media heading</Media.Heading>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin commodo. Cras purus
                      odio, vestibulum in vulputate at, tempus viverra turpis.
                    </p>

                    <Media>
                      <Media.Left>
                        <img
                          width={64}
                          height={64}
                          src="http://via.placeholder.com/64x64"
                          alt="Image"
                        />
                      </Media.Left>
                      <Media.Body>
                        <Media.Heading>Nested media heading</Media.Heading>
                        <p>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin commodo. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra
                          turpis.
                        </p>
                      </Media.Body>
                    </Media>
                  </Media.Body>
                </Media>

                <Media>
                  <Media.Left>
                    <img
                      width={64}
                      height={64}
                      src="http://via.placeholder.com/64x64"
                      alt="Image"
                    />
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>Nested media heading</Media.Heading>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin commodo. Cras purus
                      odio, vestibulum in vulputate at, tempus viverra turpis.
                    </p>
                  </Media.Body>
                </Media>
              </Media.Body>
            </Media.ListItem>
          </Media.List>
        </div>
      </Panel>
      <Panel header="Glyphicons">
        <div>
          <ButtonToolbar>
            <ButtonGroup>
              <Button>
                <Glyphicon glyph="align-left" />
              </Button>
              <Button>
                <Glyphicon glyph="align-center" />
              </Button>
              <Button>
                <Glyphicon glyph="align-right" />
              </Button>
              <Button>
                <Glyphicon glyph="align-justify" />
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
          <ButtonToolbar>
            <ButtonGroup>
              <Button bsSize="large">
                <Glyphicon glyph="star" /> Star
              </Button>
              <Button>
                <Glyphicon glyph="star" /> Star
              </Button>
              <Button bsSize="small">
                <Glyphicon glyph="star" /> Star
              </Button>
              <Button bsSize="xsmall">
                <Glyphicon glyph="star" /> Star
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
      </Panel>
      <Panel header="Label sizes">
        <div>
          <h1>
            Label <Label>New</Label>
          </h1>
          <h2>
            Label <Label>New</Label>
          </h2>
          <h3>
            Label <Label>New</Label>
          </h3>
          <h4>
            Label <Label>New</Label>
          </h4>
          <h5>
            Label <Label>New</Label>
          </h5>
          <p>
            Label <Label>New</Label>
          </p>
        </div>
      </Panel>
      <Panel header="Small labels">
        <div>
          <Label bsStyle="default">Default</Label>&nbsp;
          <Label bsStyle="primary">Primary</Label>&nbsp;
          <Label bsStyle="success">Success</Label>&nbsp;
          <Label bsStyle="info">Info</Label>&nbsp;
          <Label bsStyle="warning">Warning</Label>&nbsp;
          <Label bsStyle="danger">Danger</Label>
        </div>
      </Panel>
      <Panel header="Alert message">
        <Alert bsStyle="warning">
          <strong>Holy guacamole!</strong> Best check yo self, you're not
          looking too good.
        </Alert>
      </Panel>
      <Panel header="Progress bar">
        <ProgressBar now={60} />
      </Panel>
      <Panel header="Progress bar with label">
        <ProgressBar now={60} label="60%" />
      </Panel>
      <Panel header="Progress bar styles">
        <div>
          <ProgressBar bsStyle="success" now={40} />
          <ProgressBar bsStyle="info" now={20} />
          <ProgressBar bsStyle="warning" now={60} />
          <ProgressBar bsStyle="danger" now={80} />
        </div>
      </Panel>
      <Panel header="Progress bar striped styles">
        <div>
          <ProgressBar striped bsStyle="success" now={40} />
          <ProgressBar striped bsStyle="info" now={20} />
          <ProgressBar striped bsStyle="warning" now={60} />
          <ProgressBar striped bsStyle="danger" now={80} />
        </div>
      </Panel>
      <Panel header="Progress bar animated">
        <ProgressBar active now={45} />
      </Panel>
      <Panel header="Progress bar stacked">
        <ProgressBar>
          <ProgressBar striped bsStyle="success" now={35} key={1} />
          <ProgressBar bsStyle="warning" now={20} key={2} />
          <ProgressBar active bsStyle="danger" now={10} key={3} />
        </ProgressBar>
      </Panel>
    </Layout>
  )
}

export default TestPage
