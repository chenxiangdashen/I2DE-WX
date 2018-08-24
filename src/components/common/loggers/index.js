import React from 'react';
import {Icon} from 'antd';
import {injectIntl} from 'react-intl';
import style from './index.css';

import {formatDate} from '../../../utils/common'

class LoggersView extends React.Component {


  constructor(props) {
    super(props)

  }

  _renderIcon(data) {
    if (data.action == 'Solved') {
      return <Icon
        type='huida'
        style={{fontSize: 14, textAlign: 'center', color: '#a4a4a4'}}
      />;
    } else if (data.action == 'Create') {
      return <Icon
        type='wentixiangqingchuangjianwenti'
        style={{fontSize: 16, textAlign: 'center', color: '#a4a4a4'}}
      />;
    } else if (data.action == 'Share') {
      return <Icon
        type='fenxiang1'
        style={{fontSize: 14, textAlign: 'center', color: '#a4a4a4'}}
      />;
    } else if (data.action == 'Cancel') {
      return <Icon
        type='guanbiwenti'
        style={{fontSize: 16, textAlign: 'center', color: '#a4a4a4'}}
      />;
    } else if (data.action == 'Assign') {
      return <Icon
        type='weifenlei2'
        style={{fontSize: 16, textAlign: 'center', color: '#a4a4a4'}}
      />;
    } else if (data.action == 'Confirmed') {
      return <Icon
        type='weifenlei1'
        style={{fontSize: 16, textAlign: 'center', color: '#a4a4a4'}}
      />;
    } else {
      return <Icon
        type='huida'
        style={{fontSize: 14, textAlign: 'center', color: '#a4a4a4'}}
      />;
    }
  }

  render() {

    let {data,intl} = this.props;

    return <div className={style.div_div}>
      {
        data.map((item,i)=>{
          return <div key={i} style={{
            display:'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 14,
            alignItems: 'center',marginTop:4
          }}>
            <div style={{flexDirection: 'row', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
              <div style={{width: 20}}>
                {
                  this._renderIcon(item)
                }
              </div>

              <span style={{color: '#a4a4a4', fontSize: 10, width: 80}}
                   >{item.userName} </span>
              <span style={{color: '#a4a4a4', fontSize: 10}}>{item.message} </span>
            </div>


            <div style={{flexDirection: 'row',display:'flex', alignItems: 'center' }}>
              <span
                style={{color: '#a4a4a4', fontSize: 10}}>{formatDate(item.createDate, 'yyyy/MM/dd hh:mm:ss')}</span>
            </div>
          </div>
        })
      }

      <div style={{display:'flex',paddingBottom: 18, paddingTop: 26, alignItems: 'center',justifyContent:'center', backgroundColor: '#f7f7f7'}}>
        <span style={{fontSize: 12, color: '#C6C6C6'}}>{intl.messages.alreadyInEnd}</span>
      </div>

    </div>
  };
}

export default injectIntl(LoggersView)
