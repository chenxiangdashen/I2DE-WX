import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import Share from './routes/share';
import Products from './routes/Products';
import Login from './routes/login';
import Register from './routes/register';
import Problem from './routes/problem';
import FileSet from './routes/fileSet';
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
          <Route path="/register" exact component={Register}/>
          <Route path="/login/:objectID/:cropID/:cellPhone/:type/:basePartID" exact component={Login}/>
          <Route path="/problem/:objectID/:cropID" exact component={Problem}/>
          <Route path="/fileSet/:partID/:cropID/:basePartID" exact component={FileSet}/>
        </Switch>
      </Router>
    </IntlProvider>
  );
}

export default RouterConfig;
