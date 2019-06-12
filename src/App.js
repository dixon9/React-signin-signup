import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Forgotpwd from './pages/Forgotpwd';

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' component={Signin} />
				<Route exact path='/signin' component={Signin} />
				<Route exact path='/signup' component={Signup} />
				<Route exact path='/forgotpwd' component={Forgotpwd} />
			</Switch>
		);
	}
}

export default App;
