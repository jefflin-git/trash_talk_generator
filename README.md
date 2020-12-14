# 幹話產生器
採用 Node.js 和 Express 打造的幹話產生器，使用者可以在此站上一鍵產生幹話

## 專案畫面
![](https://i.imgur.com/WgLVPVR.png)
## 功能描述 (features)
- 使用者可以在工程師、設計師、或創業家中選擇一個對象（三選一)
- 使用者按下【產生幹話】後，旁邊的 textbox 就會出現一句幹話

## 環境建置(prerequisites)
- Node.js v10.15.0
- Express v4.17.1
- Express-handlebars v5.2.0

## 安裝與執行步驟 (installation and execution)
- 提醒: 以下動作需使用 terminal 或 Git Bash 指令
1. 將專案cline到本地環境
   ```
   git clone https://github.com/jefflin-git/restaurant_list.git
   ```
2. 進入專案資料夾
   ```
   cd restaurant_list
   ```
3. 至 package.json 檔案裝查看需安裝的npm套件，並搭配以下指令安裝
   ```
   npm install
   ```
4. 安裝 nodemon 套件
   - 提醒: 若先前在本地開發環境中以`npm install -g nodemon` 指令安裝過可跳至下步驟
6. 啟動伺服器，執行 app.js 檔案
   - 使用 `nodemon app.js` 或 `npm run dev` 執行
   - 看到回應 `Express is listening on localhost:3000  at Time: (當地時間)` 代表成功執行
7. 開啟任一瀏覽器瀏覽器輸入 http://localhost:3000 開始使用

## 專案開發人員 (contributor)
> Jeff Lin