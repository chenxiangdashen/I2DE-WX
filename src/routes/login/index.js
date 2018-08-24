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
    let commitData ={
      value:value,
      param:this.props.match.params
    }
    this.props.dispatch({type: 'login/loigning', commitData});
  }

  render() {

    console.log(this.props.match.params)

    return (
      <div className={style.content}>
        <Head/>
        <LoginCompoents onClick={this.logining} data={this.props.match.params || {}}/>
      </div>
    );
  }
}

// export default Products;
export default connect(({login}) => ({
  login,
}))(Login);
