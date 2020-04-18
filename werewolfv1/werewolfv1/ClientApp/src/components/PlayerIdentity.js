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
var PlayerStore = require("../store/Player");
var PlayerIdentity = /** @class */ (function (_super) {
    __extends(PlayerIdentity, _super);
    function PlayerIdentity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // This method is called when the component is first added to the document
    PlayerIdentity.prototype.componentDidMount = function () {
        this.props.getPlayer(parseInt(this.props.match.params.id));
    };
    // This method is called when the route parameters change
    PlayerIdentity.prototype.componentDidUpdate = function () {
        //this.ensureDataFetched();
    };
    PlayerIdentity.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", null,
                React.createElement("h1", null, this.props.player.roleString))));
    };
    return PlayerIdentity;
}(React.PureComponent));
exports.default = react_redux_1.connect(function (state) { return state.player; }, // Selects which state properties are merged into the component's props
PlayerStore.actionCreators // Selects which action creators are merged into the component's props
)(PlayerIdentity);
//# sourceMappingURL=PlayerIdentity.js.map