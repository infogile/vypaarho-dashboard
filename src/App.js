import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Main } from "./layouts";
import { Product as ProductView, Inventory as InventoryView } from "./views";
import QRCode from "qrcode.react";
import { Provider } from "react-redux";
import store from "./store";

class Header extends React.Component {
  render() {
    return <h1>I Am header</h1>;
  }
}

class Landing extends React.Component {
  render() {
    return (
      <Main>
        <h1>jldi aane vala h Landing Page and dashboard</h1>
      </Main>
    );
  }
}
class Product extends React.Component {
  render() {
    return (
      <Main>
        <ProductView />
      </Main>
    );
  }
}
class Inventory extends React.Component {
  render() {
    return (
      <Main>
        <InventoryView />
      </Main>
    );
  }
}

class Listing extends React.Component {
  render() {
    return (
      <Main>
        <h1>bhut jld aane vale h appki selling list</h1>
      </Main>
    );
  }
}
class Order extends React.Component {
  render() {
    return (
      <Main>
        <h1>jldi aane vale h orders</h1>
      </Main>
    );
  }
}
class Profile extends React.Component {
  render() {
    return <h1>{this.props.match.params.handle}</h1>;
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/listing" component={Listing} />
            <Route exact path="/orders" component={Order} />
            <Route exact path="/inventory" component={Inventory} />
            <Route exact path="/genqr" component={GenQr} />
            {/* <Route exact path="/profile/:handle" component={Profile} /> */}
            {/* <Switch>
              <PrivateRouter exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRouter
                exact
                path="/edit-profile"
                component={EditProfile}
              />
            </Switch> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

class GenQr extends React.Component {
  render() {
    return (
      <>
        <svg
          width="192"
          height="192"
          viewBox="0 0 192 192"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g xmlns="http://www.w3.org/2000/svg" id="svg_8">
            <rect
              id="svg_1"
              height="192"
              width="192"
              y="5.4375"
              x="0"
              stroke-width="0"
              stroke="#000"
              fill="#fff"
            />
            <text
              text-anchor="start"
              font-family="Helvetica, Arial, sans-serif"
              font-size="10"
              id="svg_3"
              y="24.4375"
              x="20"
              stroke-width="0"
              stroke="#000"
              fill="#000000"
            >
              QWERTYUIOPASDFGHJKLZXCVBNM
            </text>

            <g>
              <QRCode
                stroke="#000"
                id="svg_6"
                height="142"
                width="142"
                y="37.43749"
                x="25"
                stroke-width="0"
                fill="#fff"
                value="https://iitsuraj.github.io"
                renderAs="svg"
                imageSettings={{
                  src: "https://iitsuraj.github.io/img/suraj.png",
                  height: 30,
                  width: 30,
                }}
                size="142"
              />
            </g>
            <text
              text-anchor="start"
              font-family="Helvetica, Arial, sans-serif"
              font-size="10"
              id="svg_4"
              y="108.4375"
              x="0"
              stroke-width="0"
              stroke="#000"
              fill="#000000"
              transform="rotate(90, 15, 100) "
            >
              GREEN
            </text>
            <text
              text-anchor="start"
              font-family="Helvetica, Arial, sans-serif"
              font-size="10"
              id="svg_2"
              y="108.4375"
              x="171"
              stroke-width="0"
              stroke="#000"
              fill="#000000"
              transform="rotate(90, 175, 107)"
            >
              XXL
            </text>
          </g>
        </svg>
        <svg
          width="192"
          height="192"
          viewBox="0 0 192 192"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g xmlns="http://www.w3.org/2000/svg" id="svg_8">
            <rect
              id="svg_1"
              height="192"
              width="192"
              y="5.4375"
              x="0"
              stroke-width="0"
              stroke="#000"
              fill="#fff"
            />
            <text
              text-anchor="start"
              font-family="Helvetica, Arial, sans-serif"
              font-size="10"
              id="svg_3"
              y="24.4375"
              x="20"
              stroke-width="0"
              stroke="#000"
              fill="#000000"
            >
              QWERTYUIOPASDFGHJKLZXCVBNM
            </text>

            <g>
              <QRCode
                stroke="#000"
                id="svg_6"
                height="142"
                width="142"
                y="37.43749"
                x="25"
                stroke-width="0"
                fill="#fff"
                value="https://iitsuraj.github.io"
                renderAs="svg"
                imageSettings={{
                  src: "https://iitsuraj.github.io/img/suraj.png",
                  height: 30,
                  width: 30,
                }}
                size="142"
              />
            </g>
            <text
              text-anchor="start"
              font-family="Helvetica, Arial, sans-serif"
              font-size="10"
              id="svg_4"
              y="108.4375"
              x="0"
              stroke-width="0"
              stroke="#000"
              fill="#000000"
              transform="rotate(90, 15, 100) "
            >
              GREEN
            </text>
            <text
              text-anchor="start"
              font-family="Helvetica, Arial, sans-serif"
              font-size="10"
              id="svg_2"
              y="108.4375"
              x="171"
              stroke-width="0"
              stroke="#000"
              fill="#000000"
              transform="rotate(90, 175, 107)"
            >
              XXL
            </text>
          </g>
        </svg>
        <svg
          width="192"
          height="192"
          viewBox="0 0 192 192"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g xmlns="http://www.w3.org/2000/svg" id="svg_8">
            <rect
              id="svg_1"
              height="192"
              width="192"
              y="5.4375"
              x="0"
              stroke-width="0"
              stroke="#000"
              fill="#fff"
            />
            <text
              text-anchor="start"
              font-family="Helvetica, Arial, sans-serif"
              font-size="10"
              id="svg_3"
              y="24.4375"
              x="20"
              stroke-width="0"
              stroke="#000"
              fill="#000000"
            >
              QWERTYUIOPASDFGHJKLZXCVBNM
            </text>

            <g>
              <QRCode
                stroke="#000"
                id="svg_6"
                height="142"
                width="142"
                y="37.43749"
                x="25"
                stroke-width="0"
                fill="#fff"
                value="https://iitsuraj.github.io"
                renderAs="svg"
                imageSettings={{
                  src: "https://iitsuraj.github.io/img/suraj.png",
                  height: 30,
                  width: 30,
                }}
                size="142"
              />
            </g>
            <text
              text-anchor="start"
              font-family="Helvetica, Arial, sans-serif"
              font-size="10"
              id="svg_4"
              y="108.4375"
              x="0"
              stroke-width="0"
              stroke="#000"
              fill="#000000"
              transform="rotate(90, 15, 100) "
            >
              GREEN
            </text>
            <text
              text-anchor="start"
              font-family="Helvetica, Arial, sans-serif"
              font-size="10"
              id="svg_2"
              y="108.4375"
              x="171"
              stroke-width="0"
              stroke="#000"
              fill="#000000"
              transform="rotate(90, 175, 107)"
            >
              XXL
            </text>
          </g>
        </svg>
        <svg
          width="192"
          height="192"
          viewBox="0 0 192 192"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g xmlns="http://www.w3.org/2000/svg" id="svg_8">
            <rect
              id="svg_1"
              height="192"
              width="192"
              y="5.4375"
              x="0"
              stroke-width="0"
              stroke="#000"
              fill="#fff"
            />
            <text
              text-anchor="start"
              font-family="Helvetica, Arial, sans-serif"
              font-size="10"
              id="svg_3"
              y="24.4375"
              x="20"
              stroke-width="0"
              stroke="#000"
              fill="#000000"
            >
              QWERTYUIOPASDFGHJKLZXCVBNM
            </text>

            <g>
              <QRCode
                stroke="#000"
                id="svg_6"
                height="142"
                width="142"
                y="37.43749"
                x="25"
                stroke-width="0"
                fill="#fff"
                value="https://iitsuraj.github.io"
                renderAs="svg"
                imageSettings={{
                  src: "https://iitsuraj.github.io/img/suraj.png",
                  height: 30,
                  width: 30,
                }}
                size="142"
              />
            </g>
            <text
              text-anchor="start"
              font-family="Helvetica, Arial, sans-serif"
              font-size="10"
              id="svg_4"
              y="108.4375"
              x="0"
              stroke-width="0"
              stroke="#000"
              fill="#000000"
              transform="rotate(90, 15, 100) "
            >
              GREEN
            </text>
            <text
              text-anchor="start"
              font-family="Helvetica, Arial, sans-serif"
              font-size="10"
              id="svg_2"
              y="108.4375"
              x="171"
              stroke-width="0"
              stroke="#000"
              fill="#000000"
              transform="rotate(90, 175, 107)"
            >
              XXL
            </text>
          </g>
        </svg>
        <svg
          width="192"
          height="192"
          viewBox="0 0 192 192"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g xmlns="http://www.w3.org/2000/svg" id="svg_8">
            <rect
              id="svg_1"
              height="192"
              width="192"
              y="5.4375"
              x="0"
              stroke-width="0"
              stroke="#000"
              fill="#fff"
            />
            <text
              text-anchor="start"
              font-family="Helvetica, Arial, sans-serif"
              font-size="10"
              id="svg_3"
              y="24.4375"
              x="20"
              stroke-width="0"
              stroke="#000"
              fill="#000000"
            >
              QWERTYUIOPASDFGHJKLZXCVBNM
            </text>

            <g>
              <QRCode
                stroke="#000"
                id="svg_6"
                height="142"
                width="142"
                y="37.43749"
                x="25"
                stroke-width="0"
                fill="#fff"
                value="https://iitsuraj.github.io"
                renderAs="svg"
                imageSettings={{
                  src: "https://iitsuraj.github.io/img/suraj.png",
                  height: 30,
                  width: 30,
                }}
                size="142"
              />
            </g>
            <text
              text-anchor="start"
              font-family="Helvetica, Arial, sans-serif"
              font-size="10"
              id="svg_4"
              y="108.4375"
              x="0"
              stroke-width="0"
              stroke="#000"
              fill="#000000"
              transform="rotate(90, 15, 100) "
            >
              GREEN
            </text>
            <text
              text-anchor="start"
              font-family="Helvetica, Arial, sans-serif"
              font-size="10"
              id="svg_2"
              y="108.4375"
              x="171"
              stroke-width="0"
              stroke="#000"
              fill="#000000"
              transform="rotate(90, 175, 107)"
            >
              XXL
            </text>
          </g>
        </svg>
      </>
    );
  }
}

export default App;
