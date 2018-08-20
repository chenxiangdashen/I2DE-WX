import React from 'react'
import {connect} from 'dva';
import LoginCompoents from '../../components/login';
import Head from '../../components/head';
import style from './index.css';

class Login extends React.Component {

  constructor(props){
    super(props)

    this.logining=this.logining.bind(this)
  }

  logining(password,cellphone){


    let value={
      password:password,
      cellphone:cellphone.replace(/\s/g, '')
    }
    console.log(value)
    this.props.dispatch({type: 'login/loigning',value});
  }

  render() {

    console.log(this)

    return (
      <div className={style.content}>
        <Head/>
        <LoginCompoents onClick={this.logining}/>
      </div>
    );
  }
}

// export default Products;
export default connect(({login}) => ({
  login,
}))(Login);
