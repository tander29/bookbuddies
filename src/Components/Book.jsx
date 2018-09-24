import React from "react";
import { connect } from "react-redux";
import { Card, Modal, TextArea, Rating } from "semantic-ui-react";
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
                <Card style={{ backgroundColor: "#EDF5E1" }}>
                    <div>Title of book</div>
                    <div>Author of book</div>
                    <div>book cover image</div>
                    <div> user icon</div>
                    <div>Rating goes here:<Rating id="rating" icon='star' size="large" defaultRating={0} maxRating={5} /></div>

                    <Modal size='large'
                        closeIcon
                        open={modalOpen} onClose={this.modalSwitchStatus}
                        trigger={<button onClick={this.modalSwitchStatus}>Send Message</button>}>
                        <TextArea autoFocus={true} placeholder="Request this book from the user" onChange={this.updateMessageContent}></TextArea>
                        <button onClick={this.sendMessage}>Send Message</button>
                        <button onClick={this.modalSwitchStatus}>Close</button>
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