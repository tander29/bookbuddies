import React from "react";
import { connect } from "react-redux";
import { Card, Modal, TextArea, Rating, Button, Form, Grid } from "semantic-ui-react";
class Book extends React.Component {

    state = { messageContent: null, modalOpen: false }

    // open or close modal based on current state
    modalSwitchStatus = () => {
        console.log(this.state.modalOpen)
        this.setState({ modalOpen: !this.state.modalOpen })
    }

    updateMessageContent = (event) => {


        console.log(event.target.value)

        this.setState({ messageContent: event.target.value })
    }

    sendMessage = () => {
        if (this.state.messageContent) {
            console.log('this is the message you sent', this.state.messageContent)
            this.modalSwitchStatus()
            this.setState({ messageContent: null })
        }

    }



    render() {
        const { modalOpen } = this.state
        return (
            <React.Fragment>
                <Card style={{ backgroundColor:'#474B4F', color:'white', padding: '0.5vh' }}>
                    <Grid celled>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <div>Title of book</div>
                                <div>Author of book</div>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <div>book cover image</div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <div> user icon</div>
                            </Grid.Column>
                            <Grid.Column width={13}>                         
                                <div>Rating goes here:<Rating id="rating" icon='star' size="large" defaultRating={0} maxRating={5} /></div>
                            </Grid.Column>
                        </Grid.Row>
                        </Grid>
                                <Modal size='large'
                                    closeIcon
                                    open={modalOpen} onClose={this.modalSwitchStatus}
                                    trigger={<Button onClick={this.modalSwitchStatus} size='small' style={{backgroundColor:'#86C232', color:'white' }}>Send Message</Button>}>
                                        <Form style={{ padding: '1vh', backgroundColor:'#474B4F' }}>
                                            <TextArea autoFocus={true} placeholder="Request this book from the user" onChange={this.updateMessageContent} style={{ marginBottom:'1vh' }}></TextArea>
                                            <Button onClick={this.sendMessage} style={{backgroundColor:'#86C232', color:'white' }} >Send Message</Button>
                                            <Button onClick={this.modalSwitchStatus} floated='right' negative >Close</Button>
                                        </Form>
                                </Modal>
                            
                    

                </Card>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {}
};

function mapDispatchToProps(dispatch) {
    return {}

}

const Connect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Book);
export default Connect;