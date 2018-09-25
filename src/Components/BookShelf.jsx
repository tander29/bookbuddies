import React from "react";
import { connect } from "react-redux";
import Book from "./Book.jsx";
import { Button, Modal, Grid} from "semantic-ui-react";

export class BookShelf extends React.Component {
    render() {
        return (
            <Grid columns={3} stackable style={{ padding:'auto' }}>
            
                <Grid.Row>
                    <Grid.Column>
                        <Book className="bookStyling"></Book>
                    </Grid.Column>
                    <Grid.Column>
                        <Book className="bookStyling"></Book>
                    </Grid.Column>
                    <Grid.Column>
                        <Book className="bookStyling"></Book>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Book className="bookStyling"></Book>
                    </Grid.Column>
                    <Grid.Column>
                        <Book className="bookStyling"></Book>
                    </Grid.Column>
                    <Grid.Column>
                        <Book className="bookStyling"></Book>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
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
)(BookShelf);
export default Connect;