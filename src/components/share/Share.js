import React from 'react';
import { List, InputItem , Toast, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import style from './share.css';
import { injectIntl, FormattedMessage } from 'react-intl';

class Share extends React.Component {

  state = {
    hasError: false,
    value: '',
  }


  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('Please enter 11 digits');
    }
  }
  onChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value,
    });
  }


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
              id='shareForYou'
            />
            <p className={style.text}>
              {data.targetName}
            </p>
          </div>


        <div className={style.input}>
          <InputItem
            className={style.textInput}
            style={{height:55,border:1,borderColor:'#ccc'}}
            type="phone"
            placeholder="input your phone"
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={this.onChange}
            value={this.state.value}
          />
        </div>

        <WhiteSpace />

        <div className={style.input}>
          <Button type="primary">primary</Button>
        </div>
      </div>
    );
  }
}

export default createForm()(injectIntl(Share));
