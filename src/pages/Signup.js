import React, { Component } from 'react';
import { Button, Input, Row, Col } from 'reactstrap';
import '../styles/signup.css';

class Signup extends Component {
	handleLogin = () => {
		this.props.history.push('/signin');
	};
	handleForgotpwd = () => {
		this.props.history.push('/forgotpwd');
	};
	render() {
		return (
			<div className='form_signup'>
				<div className='input'>
					<Input
						type='text'
						name='username'
						id='username'
						placeholder='Username'
						style={{
							height: '100%',
							boxShadow: '0px 12px 6px #DBDBDB',
							border: '2px solid #DBDBDB',
							fontSize: 20,
							borderRadius: 10
						}}
					/>
				</div>
				<div className='input'>
					<Input
						type='password'
						name='password'
						id='password'
						placeholder='Password'
						style={{
							height: '100%',
							boxShadow: '0px 12px 6px #DBDBDB',
							border: '2px solid #DBDBDB',
							fontSize: 20,
							borderRadius: 10
						}}
					/>
				</div>
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
				<div className='input'>
					<Input
						type='text'
						name='Referral_code'
						id='Referral_code'
						placeholder='Referral code'
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
						Sign up
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
							<p className='links' onClick={this.handleForgotpwd} style={{ textAlign: 'right' }}>
								Forgot
							</p>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default Signup;
