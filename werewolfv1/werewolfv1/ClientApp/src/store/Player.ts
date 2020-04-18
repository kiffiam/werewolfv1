import { Action, Reducer } from 'redux';
import { AppThunkAction } from '.';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface PlayerState {
    id?: number;
    player: Player
}

export interface Player{
    id: number;
    name: string;
    alive: boolean;
    roleString: string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface ClickOnPlayer {
    type: 'CLICK_PLAYER';
    id: number;
    player: Player;
}



// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = ClickOnPlayer;
// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    getPlayer: (id: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.players) {
            fetch(`player/${id}`)
                .then(response => response.json() as Promise<Player>)
                .then(data => {
                    dispatch({ type: 'CLICK_PLAYER', player: data, id: id });
                });
        }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: PlayerState = {
    player: {id:0, name:"", alive:false, roleString:""}, id:0};

export const reducer: Reducer<PlayerState> = (state: PlayerState | undefined, incomingAction: Action): PlayerState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'CLICK_PLAYER':
            return {
                player: action.player,
                id: action.player.id
                /*
                id: action.player.id,
                name: action.player.name,
                alive: action.player.alive,
                roleString:action.player.roleString*/
            };
        default:
            return state;
    }

};
