import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as PlayersStore from '../store/Players';

// At runtime, Redux will merge together...
type PlayerProps =
    PlayersStore.PlayersState // ... state we've requested from the Redux store
    & typeof PlayersStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ }>; // ... plus incoming routing parameters


class PlayerList extends React.PureComponent<PlayerProps> {
    // This method is called when the component is first added to the document
    public componentDidMount() {
        this.ensureDataFetched();
        
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        //this.ensureDataFetched();
    }
    
    public render() {
        return (
            <React.Fragment>
                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <tbody>
                        {this.props.players.map((player: PlayersStore.Player) =>
                            <tr key={player.id}>
                                <td>{player.id}</td>
                                <td>{player.name}</td>
                                <td>{player.roleString}</td>
                                <td>{String(player.alive)}</td>

                            </tr>
                        )}
                    </tbody>
                </table>
            </React.Fragment>
        );
        
    }

    private ensureDataFetched() {
        this.props.requestPlayers();
    }
}

export default connect(
    (state: ApplicationState) => state.players, // Selects which state properties are merged into the component's props
    PlayersStore.actionCreators // Selects which action creators are merged into the component's props
)(PlayerList as any);
