"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).
exports.actionCreators = {
    requestPlayers: function () { return function (dispatch, getState) {
        // Only load data if it's something we don't already have (and are not already loading)
        var appState = getState();
        if (appState && appState.players) {
            fetch("namelist")
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dispatch({ type: 'RECEIVE_PLAYERS', players: data });
            });
        }
    }; }
    /*,getPlayer: (id: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.players) {
            fetch(`player/${id}`)
                .then(response => response.json() as Promise<Player>)
                .then(data => {
                    dispatch({ type: 'CLICK_PLAYER', player: data });
                });
        }
    }*/
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
var unloadedState = { players: [], isLoading: false };
exports.reducer = function (state, incomingAction) {
    if (state === undefined) {
        return unloadedState;
    }
    var action = incomingAction;
    switch (action.type) {
        case 'RECEIVE_PLAYERS':
            return {
                players: action.players,
                isLoading: false
            };
        /*case 'CLICK_PLAYER':
            return {
                id: action.player.id,
                name: action.player.name,
                alive: action.player.alive,
                roleString: action.player.roleString
            };*/
        default:
            return state;
    }
};
//# sourceMappingURL=Players.js.map