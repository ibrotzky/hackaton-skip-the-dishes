import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducer from './redux/reducers'
import { Provider } from 'react-redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk, logger))
)

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker()
