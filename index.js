const express = require('express');
const app = express();

// 设置301重定向
app.use((req, res) => {
  res.redirect(301, 'http://QuickConnect.cn/li470598498' + req.originalUrl);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});