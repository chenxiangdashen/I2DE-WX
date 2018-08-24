import React from 'react';
import {Icon} from 'antd';
import {injectIntl} from 'react-intl';
import style from './index.css';
import Avatar from '../avater'

class DiscusserView extends React.Component {


  constructor(props) {
    super(props)

  }


  render() {
    let {data, intl} = this.props;

    let discusser = data.participantList.concat(data.shareList);

    let color = '#B6B9BD';


    return <div>
      <div className={style.div_div}>
        <Icon
          type="canyuzhe"
          style={{fontSize: 21, color: color,}}/>
        <div className={style.div_content}>
          <span style={{color: color, fontSize: 14}}>{intl.messages.participant}</span>
        </div>
      </div>


      <div style={{
        backgroundColor:'#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8,
        display: 'flex',
        height: 45,
        flex: 1,
      }}>

        {
          discusser.length > 0 ?
            discusser.map((obj, i) => {
              if (i <= 23) {
                return <div key={i} style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: i == 0 ? 5 : -8
                }}>
                  <Avatar
                    width={22}
                    height={22} borderRadius={11} fontSize={12} text={obj.user.firstName}/>
                </div>
              }
            }) : <div>
              <div style={{paddingRight: 28, marginLeft: 35}}>
                <span
                  style={{
                    fontSize: 14,
                    color: '#c0c4c8'
                  }}>{intl.messages.noParticipants}</span>
              </div>
            </div>
        }
      </div>
    </div>

  };
}

export default injectIntl(DiscusserView)
