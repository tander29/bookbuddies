import React from "react";
import { connect } from "react-redux";
import { Card, Modal, TextArea, Rating } from "semantic-ui-react";
import { sendMessage } from "../Redux/Actions/ActSendMessage"
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
                <Card style={{ backgroundColor: "#EDF5E1" }}>
                    <div>Title of book</div>
                    <div>Author of book</div>
                    <div>book cover image</div>
                    <div> user icon</div>
                    <div>Rating goes here:<Rating id="rating" icon='star' size="large" defaultRating={0} maxRating={5} /></div>

                    <Modal size='large'
                        closeIcon
                        open={modalOpen} onClose={this.modalSwitchStatus}
                        trigger={<button onClick={this.modalSwitchStatus}>Request Information</button>}>
                        <TextArea autoFocus={true} onKeyPress={this.handleEnter} placeholder="Request this book from the user" onChange={this.updateMessageContent}></TextArea>
                        <button onClick={this.sendMessage} >Send Message to Owner</button>
                        <button onClick={this.modalSwitchStatus}>Close</button>
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

