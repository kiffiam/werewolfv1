import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as PlayerStore from '../store/Player';

// At runtime, Redux will merge together...
type PlayerProps =
    PlayerStore.PlayerState // ... state we've requested from the Redux store
    & typeof PlayerStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{id:string}>; // ... plus incoming routing parameters


class PlayerIdentity extends React.PureComponent<PlayerProps> {
    // This method is called when the component is first added to the document
    public componentDidMount() {
        this.props.getPlayer(parseInt(this.props.match.params.id));
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        //this.ensureDataFetched();
    }

    public render() {
        return (
            <React.Fragment>
                <div>
                    <h1>{this.props.player.roleString}</h1>
                </div>
            </React.Fragment>
        );

    }

    /*private ensureDataFetched() {
        this.props.getPlayer();
    }*/
}

export default connect(
    (state: ApplicationState) => state.player, // Selects which state properties are merged into the component's props
    PlayerStore.actionCreators // Selects which action creators are merged into the component's props
)(PlayerIdentity as any);
