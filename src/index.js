import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css"
import App from "./App";

import thunk from "redux-thunk";
import { createStore, applyMiddleware ,compose} from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers/rootReducer"

import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(
  rootReducer,
  composeWithDevTools(
    compose(
      applyMiddleware(thunk.withExtraArgument())
    )
  )
);

ReactDOM.render(
 <Provider store = {store}>
    <App />
    </Provider>,
  
  document.getElementById('root')
);


