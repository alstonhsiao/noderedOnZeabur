module.exports = {
  uiPort: process.env.PORT || 1880, // 使用環境變數或預設 1880 端口
  httpAdminRoot: '/admin',         // 管理介面路徑
  httpNodeRoot: '/',              // 節點 API 路徑
  userDir: './data',              // 資料儲存目錄
  functionGlobalContext: {}       // 全局上下文
};
