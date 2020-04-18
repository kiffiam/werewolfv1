import { Action, Reducer } from 'redux';
import { AppThunkAction } from '.';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface PlayersState {
    isLoading: boolean;
    players: Player[];
}

export interface Player {
    id: number;
    name: string;
    alive: boolean;
    roleString: string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface ReceivePlayersAction {
    type: 'RECEIVE_PLAYERS';
    players: Player[];
}



// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = ReceivePlayersAction;
// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestPlayers: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.players) {
            fetch(`namelist`)
                .then(response => response.json() as Promise<Player[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_PLAYERS', players: data });
                });
        }
    }

};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: PlayersState = { players: [], isLoading: false };

export const reducer: Reducer<PlayersState> = (state: PlayersState | undefined, incomingAction: Action): PlayersState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'RECEIVE_PLAYERS':
            return {
                players: action.players,
                isLoading: false
            };
        default:
            return state;
    }
    
};
