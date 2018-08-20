import React from 'react'
import {connect} from 'dva';
import ShareCompoents from '../../components/share';
import Head from '../../components/head';
import style from './index.css';

class Share extends React.Component {

  constructor(props){
    super(props)

    this.checkExistence=this.checkExistence.bind(this)
  }

  checkExistence(value){
    console.log(value)
    value=value.replace(/\s/g, '')
    this.props.dispatch({type: 'shares/checkExistence',value:value});
  }

  render() {

    console.log(this)

    return (
      <div className={style.content}>
        <Head/>
        <ShareCompoents onClick={this.checkExistence} share={this.props.shares}/>
      </div>
    );
  }
}

// export default Products;
export default connect(({shares}) => ({
  shares,
}))(Share);
