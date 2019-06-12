import React, { Component } from 'react';
import { Button, Input, Row, Col } from 'reactstrap';
import '../styles/forgotpwd.css';

class Forgotpwd extends Component {
	handleSignup = () => {
		this.props.history.push('/signup');
	};
	handleLogin = () => {
		this.props.history.push('/signin');
	};
	render() {
		return (
			<div className='form_forgotpwd'>
				<div className='input'>
					<Input
						type='email'
						name='email'
						id='email'
						placeholder='Email'
						style={{
							height: '100%',
							boxShadow: '0px 12px 6px #DBDBDB',
							border: '2px solid #DBDBDB',
							fontSize: 20,
							borderRadius: 10
						}}
					/>
				</div>
				<div className='button'>
					<Button
						style={{
							height: '100%',
							width: '100%',
							background: '#4D96CC',
							borderRadius: '30px',
							border: 'none'
						}}
					>
						Reset&nbsp;Password
					</Button>
				</div>
				<div className='mt-35'>
					<Row>
						<Col xs='2'>
							<p className='links' onClick={this.handleLogin}>
								Log&nbsp;in
							</p>
						</Col>
						<Col xs={{ size: 2, offset: 8 }}>
							<p className='links' onClick={this.handleSignup} style={{ textAlign: 'right' }}>
								Sign&nbsp;up
							</p>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default Forgotpwd;
