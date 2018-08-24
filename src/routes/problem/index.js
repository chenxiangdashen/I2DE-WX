import React from 'react'
import {connect} from 'dva';
import ProblemCompoents from '../../components/problem';
import Head from '../../components/head';
import style from './index.css';

class Problem extends React.Component {

  constructor(props){
    super(props)

  }

  componentWillMount(){
    let param = this.props.match.params;
    this.props.dispatch({type: 'problem/query', param});
  }

  render() {

    return (
      <div className={style.content}>
        <Head/>
        <ProblemCompoents data={this.props.problem.data}/>
      </div>
    );
  }
}

// export default Products;
export default connect(({problem}) => ({
  problem,
}))(Problem);
