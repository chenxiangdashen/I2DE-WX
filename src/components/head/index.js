import React from 'react';
import style from './index.css'
import { injectIntl, FormattedMessage } from 'react-intl';

class Head extends React.Component {


  render (){
    return <div className={style.content}>
          <div className={style.left}>
            <div className={style.head}>
            </div>
            <div>
              <FormattedMessage
                id='I2wenwen'
              />

            </div>
          </div>

            <div><a href="" className={style.btn}>
              <FormattedMessage
                id='open'
             />
            </a></div>
     </div>
  }
}


export default injectIntl(Head);
