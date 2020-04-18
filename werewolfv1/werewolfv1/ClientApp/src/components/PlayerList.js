"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var PlayersStore = require("../store/Players");
var PlayerList = /** @class */ (function (_super) {
    __extends(PlayerList, _super);
    function PlayerList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // This method is called when the component is first added to the document
    PlayerList.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    // This method is called when the route parameters change
    PlayerList.prototype.componentDidUpdate = function () {
        //this.ensureDataFetched();
    };
    PlayerList.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("table", { className: 'table table-striped', "aria-labelledby": "tabelLabel" },
                React.createElement("tbody", null, this.props.players.map(function (player) {
                    return React.createElement("tr", { key: player.id },
                        React.createElement("td", null, player.id),
                        React.createElement("td", null, player.name),
                        React.createElement("td", null, player.roleString),
                        React.createElement("td", null, String(player.alive)));
                })))));
    };
    PlayerList.prototype.ensureDataFetched = function () {
        this.props.requestPlayers();
    };
    return PlayerList;
}(React.PureComponent));
exports.default = react_redux_1.connect(function (state) { return state.players; }, // Selects which state properties are merged into the component's props
PlayersStore.actionCreators // Selects which action creators are merged into the component's props
)(PlayerList);
//# sourceMappingURL=PlayerList.js.map