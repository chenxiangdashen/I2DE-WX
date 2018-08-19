import React from 'react';
import { List, InputItem , Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { createForm } from 'rc-form';
import style from './share.css';
import { injectIntl, FormattedMessage } from 'react-intl';

class Share extends React.Component {

  render() {

    let data = this.props.share.data;
    return (
      <div className={style.content}>

          <div className={style.head}>
            <FormattedMessage
              id='I2wenwen'
            />
          </div>


          <div className={style.title}>
            <span>{data.senderName}</span>
            <FormattedMessage
              id='I2wenwen'
            />
          </div>
      </div>
    );
  }
}

export default createForm()(injectIntl(Share));
