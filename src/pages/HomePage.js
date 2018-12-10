import React, { Component } from 'react';
import fire from './../config/Fire';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardDeck, CardHeader, CardFooter, Button, Modal, ModalHeader, ModalBody, ModalFooter, Table,
    ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input } from 'reactstrap';
import ReactPlayer from 'react-player';
import Sidebar from "react-sidebar";
import SidebarContent from "./../sidebar/sidebar_content";

const styles = {
    contentHeaderMenuLink: {
      textDecoration: "none",
      color: "white",
      padding: 8
    },
    content: {
      padding: "16px"
    }
  };
  
  const mql = window.matchMedia(`(min-width: 800px)`);

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalDelete: false,
            modalLogout: false,
            docked: mql.matches,
            open: false,
            dropdownOpen: false,
            modalCameraID: false,
            modalSensorID: false
        };
        this.logout = this.logout.bind(this);
        this.toggleDelete = this.toggleDelete.bind(this);
        this.toggleLogout = this.toggleLogout.bind(this);       
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);
        this.onSetOpen = this.onSetOpen.bind(this);
        this.toggleEnterCamera = this.toggleEnterCamera.bind(this);
        this.toggleEnterSensor = this.toggleEnterSensor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
    }

    componentWillUnmount() {
        mql.removeListener(this.mediaQueryChanged);
    }

    onSetOpen(open) {
        this.setState({ open });
    }

    mediaQueryChanged() {
        this.setState({
        docked: mql.matches,
        open: false
    });
    }

    toggleOpen(ev) {
        this.setState({ open: !this.state.open });

        if (ev) {
            ev.preventDefault();
        }
    }
    logout() {
        fire.auth().signOut();
    }
    toggleDelete() {
        this.setState({
          modalDelete: !this.state.modalDelete
        });
    }
    toggleLogout() {
        this.setState({
          modalLogout: !this.state.modalLogout
        });
    }
    toggleDropdown() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
    }
    toggleEnterCamera() {
        this.setState({
          modalCameraID: !this.state.modalCameraID
        });
    }
    toggleEnterSensor() {
        this.setState({
          modalSensorID: !this.state.modalSensorID
        });
    }

    handleChange(e) {
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    handleSubmit(e) {
        e.preventDefault();
        const err = this.validateForm
        var firestore = fire.firestore();
        if(err)
        {
            firestore.settings({
                timestampsInSnapshots: true
            })
            fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(
            (user)=>{
                if(user){
                const userRef = firestore.collection("users").add({
                    cameraID: this.state.cameraid,
                    email: this.state.email
                    });
                }
            })
            .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            // ...
            });
        }
        
    }

    render() {
        const sidebar = <SidebarContent />;
        const contentHeader = (
            <span>
              {!this.state.docked && (
                <a
                  onClick={this.toggleOpen}
                  href="#"
                  style={styles.contentHeaderMenuLink}
                >
                  =
                </a>
              )}
              <span> Responsive React Sidebar</span>
            </span>
          );
      
          const sidebarProps = {
            sidebar,
            docked: this.state.docked,
            open: this.state.open,
            onSetOpen: this.onSetOpen
          };
        return (
            <div className="Dashboard">   
                <Sidebar {...sidebarProps}>
                <div className="DashboardHeader">
                    <h7 className="Dashboard_HeaderText">Dashboard</h7>
                    <Button color="danger" className="LogoutButton" onClick={this.toggleLogout}>Logout</Button>
                </div>
                
                <Modal isOpen={this.state.modalLogout} toggle={this.toggleLogout} className={this.props.className}>
                    <ModalHeader toggle={this.toggleLogout}>Logout</ModalHeader>
                    <ModalBody>
                        Are you sure you want to Log Out?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.logout}>Logout</Button>{' '}
                        <Button color="secondary" onClick={this.toggleLogout}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <Button color="primary" className="AddCameraButton" onClick={this.toggleEnterCamera}>Add Camera</Button>
                <Modal isOpen={this.state.modalCameraID} toggle={this.modalCameraID} className={this.props.className}>
                    <ModalHeader toggle={this.toggleEnterCamera}>Add Camera</ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.handleSubmit}>
                            Enter the Camera ID in order to add the camera
                            <Input onChange={this.handleChange}></Input>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleSubmit}>Add</Button>{' '}
                        <Button color="secondary" onClick={this.toggleEnterCamera}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <div className="VideoCards">        
                    <CardDeck>
                        <Card className="Video_Card">
                            <CardHeader>Surveillance Camera</CardHeader>
                                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width={450}/>
                            <CardBody>
                                <CardTitle>Camera No. 1</CardTitle>
                                <CardText>Live Now</CardText>
                                <Button color="danger" onClick={this.toggleDelete}>Delete</Button>
                                <Modal isOpen={this.state.modalDelete} toggle={this.toggleDelete} className={this.props.className}>
                                    <ModalHeader toggle={this.toggleDelete}>Delete Camera</ModalHeader>
                                    <ModalBody>
                                        Are you sure you want to delete the Camera?
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" onClick={this.toggleDelete}>Delete</Button>{' '}
                                        <Button color="secondary" onClick={this.toggleDelete}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </CardBody>
                            <CardFooter>Last Updated Now.</CardFooter>
                        </Card>
                        <Card className="Video_Card">
                            <CardHeader>Surveillance Camera</CardHeader>
                                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width={450}/>
                            <CardBody>
                                <CardTitle>Camera No. 2</CardTitle>
                                <CardText>Live Now</CardText>
                                <Button color="danger" onClick={this.toggleDelete}>Delete</Button>
                                <Modal isOpen={this.state.modalDelete} toggle={this.toggleDelete} className={this.props.className}>
                                    <ModalHeader toggle={this.toggleDelete}>Delete Camera</ModalHeader>
                                    <ModalBody>
                                        Are you sure you want to delete the Camera?
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" onClick={this.toggleDelete}>Delete</Button>{' '}
                                        <Button color="secondary" onClick={this.toggleDelete}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </CardBody>
                            <CardFooter>Last Updated Now.</CardFooter>
                        </Card>
                        <Card className="Video_Card">
                            <CardHeader>Surveillance Camera</CardHeader>
                                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width={450}/>
                            <CardBody>
                                <CardTitle>Camera No. 3</CardTitle>
                                <CardText>Live Now</CardText>
                                <Button color="danger" onClick={this.toggleDelete}>Delete</Button>
                                <Modal isOpen={this.state.modalDelete} toggle={this.toggleDelete} className={this.props.className}>
                                    <ModalHeader toggle={this.toggleDelete}>Delete Camera</ModalHeader>
                                    <ModalBody>
                                        Are you sure you want to delete the Camera?
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" onClick={this.toggleDelete}>Delete</Button>{' '}
                                        <Button color="secondary" onClick={this.toggleDelete}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </CardBody>
                            <CardFooter>Last Updated Now.</CardFooter>
                        </Card>
                    </CardDeck>
                </div> 
                <Button color="primary" className="AddSensorButton" onClick={this.toggleEnterSensor}>Add Sensors</Button>
                <Modal isOpen={this.state.modalSensorID} toggle={this.modalSensorID} className={this.props.className}>
                    <ModalHeader toggle={this.toggleEnterSensor}>Add Sensors</ModalHeader>
                    <ModalBody>
                        Enter the Sensor ID
                        <Input></Input>
                        Enter the Sensor Location
                        <Input></Input>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleEnterSensor}>Add</Button>{' '}
                        <Button color="secondary" onClick={this.toggleEnterSensor}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <div className="TableRow">
                    <div className="Table">
                        <Card body inverse style={{ backgroundColor: '#090E2E', borderColor: '#333' }}>
                            <CardHeader className="TableName">Motion Sensors</CardHeader>
                            <CardBody>                             
                                <Table dark responsive>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Location</th>
                                        <th>Time Added</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            
                            </CardBody>
                        </Card>
                    </div>
                    <div className="Table">
                        <Card body inverse style={{ backgroundColor: '#090E2E', borderColor: '#333' }}>
                            <CardHeader className="TableName">Events</CardHeader>
                            <CardBody>                             
                                <Table dark responsive>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Location</th>
                                        <th>Time Added</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            
                            </CardBody>
                        </Card>
                    </div>
                </div> 
                </Sidebar>
            </div>
                
        );

    }

}

export default Home;