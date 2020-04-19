import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as PlayerStore from '../store/Player';
//import './PlayerIdentityAnim.css';
import werewolf from '../werewolf.png';


// At runtime, Redux will merge together...
type PlayerProps =
    PlayerStore.PlayerState // ... state we've requested from the Redux store
    & typeof PlayerStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ }>; // ... plus incoming routing parameters


class PlayerIdentityAnim extends React.PureComponent<PlayerProps> {
    // This method is called when the component is first added to the document

    public componentDidMount() {
        
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        
    }

    public render() {
        return (
            <React.Fragment>
                <div>
                    <img src={werewolf} alt="werewolf" height="200px" width="200px" />
                    <button className="btn btn-primary btn-lg m-2">OK</button>
                </div>
            </React.Fragment>
        );

    }
}

export default connect(
    (state: ApplicationState) => state.player, // Selects which state properties are merged into the component's props
    PlayerStore.actionCreators // Selects which action creators are merged into the component's props
)(PlayerIdentityAnim as any);

