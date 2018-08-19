import React from 'react'
import {connect} from 'dva';
import ShareCompoents from '../../components/share/Share';
import Head from '../../components/head/Head';

class Share extends React.Component {

  render() {
    return (
      <div style={{backgroundColor: '#fff'}}>
        <Head/>
        <ShareCompoents share={this.props.shares}/>
      </div>
    );
  }
}

// export default Products;
export default connect(({shares}) => ({
  shares,
}))(Share);
