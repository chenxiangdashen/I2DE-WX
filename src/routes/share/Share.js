import React from 'react'
import {connect} from 'dva';
import ShareCompoents from '../../components/share/Share';
import Head from '../../components/head/Head';

class Share extends React.Component {

  render() {

    console.log(this)

    return (
      <div style={{flex: 1, backgroundColor: '#fff'}}>
        <Head/>
        <ShareCompoents/>
      </div>
    );
  }
}

// export default Products;
export default connect(({shares}) => ({
  shares,
}))(Share);
