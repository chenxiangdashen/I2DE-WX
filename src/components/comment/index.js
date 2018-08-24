import React from 'react';
import {Icon} from 'antd';
import {injectIntl} from 'react-intl';
import styles from './index.css';

class CommentView extends React.Component {


  constructor(props) {
    super(props)

  }



  render() {

    let {data={},columns=[] , intl} = this.props;


    return <div className={styles.div_div}>
      {
        columns.map((row,i)=>{
          let value = data[0][row.field];
          return <div key={i} className={styles.row}>
            <span className={styles.proText}>{row.title}</span>

            <div style={{flexDirection:'row',alignItems:'center'}}>
              <span style={{color:'#7e7e7e',marginRight:10}}>{value}</span>

            </div>
          </div>
        })
      }

    </div>
  };
}

export default injectIntl(CommentView)
