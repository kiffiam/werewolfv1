"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).
exports.actionCreators = {
    getPlayer: function (id) { return function (dispatch, getState) {
        // Only load data if it's something we don't already have (and are not already loading)
        var appState = getState();
        if (appState && appState.players) {
            fetch("player/" + id)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dispatch({ type: 'CLICK_PLAYER', player: data, id: id });
            });
        }
    }; }
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
var unloadedState = {
    player: { id: 0, name: "", alive: false, roleString: "" }, id: 0
};
exports.reducer = function (state, incomingAction) {
    if (state === undefined) {
        return unloadedState;
    }
    var action = incomingAction;
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
//# sourceMappingURL=Player.js.map