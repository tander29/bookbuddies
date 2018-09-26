import React from "react";
import { connect } from "react-redux";

import { sendMessage } from "../Redux/Actions/ActSendMessage"

import { Card, Modal, TextArea, Rating, Button, Form, Grid, Image, Icon } from "semantic-ui-react";
import bookbuddyicon from '../images/bookbuddyicon.png';
class Book extends React.Component {

    state = { messageContent: null, modalOpen: false }

    // open or close modal based on current state
    modalSwitchStatus = () => {
        this.setState({ modalOpen: !this.state.modalOpen })
    }

    updateMessageContent = (event) => {
        this.setState({ messageContent: event.target.value })
    }

    sendMessage = () => {
        if (this.state.messageContent) {

            this.modalSwitchStatus()

            this.props.sendMessage(this.state.messageContent)
            this.setState({ messageContent: null })
        }

    }

    handleEnter = (event) => {
        event.key === 'Enter' ? this.sendMessage() : null
    }



    render() {
        const { modalOpen } = this.state
        return (
            <React.Fragment>
                <Card style={{ backgroundColor:'#474B4F', color:'white', padding: '0.5vh' }}>
                    <Grid celled='internally' centered>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Grid>
                                <Grid.Row textAlign='left'>
                                    <div>Title: &nbsp;Pickle-Chiffon Pie</div>
                                </Grid.Row>
                                <Grid.Row>
                                    <div>By: &nbsp; Jolly Roger Bradfield</div>
                                </Grid.Row>
                                </Grid>
                            </Grid.Column>
                            <Grid.Column width={7} stetched='true'>
                                <Image src={bookbuddyicon} />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Icon name='user'></Icon>
                            </Grid.Column>
                            <Grid.Column width={13}>                         
                                <div>User Rating:<Rating id="rating" icon='star' size="large" defaultRating={0} maxRating={5} /></div>
                            </Grid.Column>
                        </Grid.Row>
                        </Grid>
                            <Modal size='large'
                                closeIcon
                                open={modalOpen} onClose={this.modalSwitchStatus}
                                trigger={<Button onClick={this.modalSwitchStatus} size='small' style={{backgroundColor:'#86C232', color:'white' }}>Request Information</Button>}>
                                    <Form style={{ padding: '1vh', backgroundColor:'#474B4F' }}>
                                        <TextArea autoFocus={true} onKeyPress={this.handleEnter} placeholder="Request this book from the user" onChange={this.updateMessageContent} style={{ marginBottom:'1vh' }}></TextArea>
                                        <Button onClick={this.sendMessage} style={{backgroundColor:'#86C232', color:'white' }} >Send Message to Owner</Button>
                                        <Button onClick={this.modalSwitchStatus} floated='right'  >Close</Button>
                                    </Form>
                                    </Modal>                    
                </Card>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return { ...state }
};

function mapDispatchToProps(dispatch) {
    return {
        sendMessage: (messageItem) => {
            dispatch(sendMessage(messageItem))
        }
    }

}

const Connect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Book);
export default Connect;

