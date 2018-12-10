import React, { Component } from 'react';
import fire from './../config/Fire';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardDeck, CardHeader, CardFooter, Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
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
            open: false
        };
        this.logout = this.logout.bind(this);
        this.toggleDelete = this.toggleDelete.bind(this);
        this.toggleLogout = this.toggleLogout.bind(this);       
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);
        this.onSetOpen = this.onSetOpen.bind(this);
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
                <div className="VideoCards">        
                    <CardDeck>
                        <Card className="Video_Card">
                            <CardHeader>Surveillance Camera</CardHeader>
                                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width={450}/>
                            <CardBody>
                                <CardTitle>Camera No. 1</CardTitle>
                                <CardText>Live Now</CardText>
                                <Button onClick={this.toggleDelete}>Delete</Button>
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
                                <Button onClick={this.toggleDelete}>Delete</Button>
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
                                <Button onClick={this.toggleDelete}>Delete</Button>
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
                <div className="TableRow">
                    <div className="Table">
                        <Table dark responsive>
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
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="Table">
                        <Table dark responsive>
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
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </div> 
                </Sidebar>
            </div>
                
        );

    }

}

export default Home;