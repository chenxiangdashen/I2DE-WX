import IntlMessageFormat from 'intl-messageformat';

import zh from '../locales/zh-CN';

import en from '../locales/en-US';

const MESSAGES = { en, zh };



//const LOCALE = 'zh'; // -> 这里写上你的决定语言的方法，例如可以从cookie判断语言



class Intl {

  constructor(LOCALE){

    this.LOCALE = LOCALE

  }

  set(LOCALE){

    this.LOCALE = LOCALE;

  }

  get(key, defaultMessage, options) {

    let msg = MESSAGES[this.LOCALE][key];

    if (msg == null) {

      if (defaultMessage != null) {

        return defaultMessage;

      }

      return key;

    }

    if (options) {

      msg = new IntlMessageFormat(msg, this.LOCALE);

      return msg.format(options);

    }

    return msg;

  }

}



export default Intl;
