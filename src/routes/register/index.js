import React from 'react'
import {connect} from 'dva';
import RegisterCompoents from '../../components/register';
import Head from '../../components/head';
import style from './index.css';

class Login extends React.Component {

  constructor(props){
    super(props)

    this.register=this.register.bind(this)
  }

  register(password,cellphone){


    let value={
      password:password,
      cellphone:cellphone.replace(/\s/g, '')
    }
    console.log(value)
    this.props.dispatch({type: 'register/register',value});
  }

  render() {


    return (
      <div className={style.content}>
        <Head/>
        <RegisterCompoents onClick={this.register}/>
      </div>
    );
  }
}

// export default Products;
export default connect(({login}) => ({
  login,
}))(Login);
