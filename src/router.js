import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import Share from './routes/share/Share';
import Products from './routes/Products';
import {addLocaleData, IntlProvider} from 'react-intl';

import zhCN from './locales/zh-CN';  //导入 i18n 配置文件
import enUS from './locales/en-US';


addLocaleData([zhCN, enUS]);

function RouterConfig({history}) {
  return (
    <IntlProvider locale='en' messages={zhCN}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Share}/>
          <Route path="/products" exact component={Products}/>
        </Switch>
      </Router>
    </IntlProvider>
  );
}

export default RouterConfig;
