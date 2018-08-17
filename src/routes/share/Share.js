import React from 'react'
import {connect} from 'dva';
import ShareCompoents from '../../components/ShareCompoents';

const Share = ({dispatch, shares}) => {




  return (
    <div>
      <h2>List of Products</h2>
      <ShareCompoents shares={shares}/>
    </div>
  );
};

// export default Products;
export default connect(({shares}) => ({
  shares,
}))(Share);
