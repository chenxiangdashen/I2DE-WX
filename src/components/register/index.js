import React from 'react';
import {List, InputItem, Toast, WhiteSpace, Button} from 'antd-mobile';
import {createForm} from 'rc-form';
import style from './index.css';
import {injectIntl, FormattedMessage} from 'react-intl';

class Login extends React.Component {


  constructor(props){
    super(props)
    this.state = {
      hasError: false,
      cellphone: '',
      password: '',
    }
  }



  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('Please enter 11 digits');
    }
  }

  onChange = (cellphone) => {
    if (cellphone.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      cellphone,
    });
  }


  render() {

    const {intl} = this.props;
    return (
      <div className={style.content}>

        <div className={style.head}>
          <FormattedMessage
            id='I2wenwen'
          />
        </div>


        <div className={style.title}>
          <FormattedMessage
            id='loginAndLook'
          />
        </div>


        <div className={style.input}>
          <InputItem
            className={style.textInput}
            style={{height: 46,fontSize:14}}
            type="phone"
            placeholder={intl.messages.phoneCell}
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={this.onChange}
            value={this.state.cellphone}
          />

          <InputItem
            className={style.textInput}
            style={{height: 46,fontSize:14}}
            type="password"
            placeholder={intl.messages.confirmPassword}
            onChange={(value)=>{
              this.setState({
                password:value
              })
            }}
            value={this.state.password}
          />
        </div>

        <WhiteSpace/>
        <WhiteSpace/>

        <div className={style.btn}>
          <Button
            disabled={this.state.hasError || !this.state.cellphone.length > 0 || !this.state.password.length>0}
            type="primary"
            onClick={()=>this.props.onClick(this.state.password,this.state.cellphone)}>
            {intl.messages.login}
          </Button>
        </div>
      </div>
    );
  }
}

export default createForm()(injectIntl(Login));
