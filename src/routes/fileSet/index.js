import React from 'react'
import {connect} from 'dva';
import FileSetCompoents from '../../components/fileSet';
import Head from '../../components/head';
import style from './index.css';

class FileSet extends React.Component {

  constructor(props){
    super(props)

  }

  componentWillMount(){
    let param = this.props.match.params;
    param.viewName = 'XVT_Part_ViewForm_CommonRightBar_SysView';
    param.ownCorpID = param.cropID;
    this.props.dispatch({type: 'fileSet/queryDetailView', param});
  }

  render() {

    console.log(this.props.fileSet)

    return (
      <div className={style.content}>
        <Head/>
        <FileSetCompoents data={this.props.fileSet}/>
      </div>
    );
  }
}

// export default Products;
export default connect(({fileSet}) => ({
  fileSet,
}))(FileSet);
