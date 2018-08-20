import React from 'react'
import {connect} from 'dva';
import ProblemCompoents from '../../components/problem';
import Head from '../../components/head';
import style from './index.css';

class Problem extends React.Component {

  constructor(props){
    super(props)

  }

  l
  render() {

    console.log(this.props.problem)

    return (
      <div className={style.content}>
        <Head/>
        <ProblemCompoents data={this.props.problem}/>
      </div>
    );
  }
}

// export default Products;
export default connect(({problem}) => ({
  problem,
}))(Problem);
