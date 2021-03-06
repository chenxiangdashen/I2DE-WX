import dva from 'dva';
import './index.css';
import './common.less';

// 1. Initialize
// const app = dva();

const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/products').default);
app.model(require('./models/share').default);
app.model(require('./models/login').default);
app.model(require('./models/problem').default);
app.model(require('./models/fileSet').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
