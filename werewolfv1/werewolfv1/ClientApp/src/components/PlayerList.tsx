import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, Route } from 'react-router';
import { ApplicationState } from '../store';
import * as PlayersStore from '../store/Players';
import { History } from 'history';
import PlayerIdentity from './PlayerIdentity';
import { Link } from 'react-router-dom';
import * as PlayerStore from '../store/Player';
import { NavLink } from 'reactstrap';
import { routerActions } from 'connected-react-router';

// At runtime, Redux will merge together...
type PlayerProps =
    PlayersStore.PlayersState // ... state we've requested from the Redux store
    & typeof PlayersStore.actionCreators & typeof PlayerStore.actionCreators  // ... plus action creators we've requested
    & RouteComponentProps<{  }>; // ... plus incoming routing parameters


class PlayerList extends React.PureComponent<PlayerProps> {
    // This method is called when the component is first added to the document
    public componentDidMount() {
        this.ensureDataFetched();
        
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        //this.ensureDataFetched();
    }
    
    /*public render() {
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
        
    }*/

    public render() {
        return (
            <React.Fragment>
                {this.props.players.map((player: PlayersStore.Player) =>
                    <Link key={player.id} to={'player/' + player.id}>
                    <button 
                        className="btn btn-secondary btn-sm m-2"
                        >
                        {player.name}
                        </button>
                    </Link>
                    )}
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
