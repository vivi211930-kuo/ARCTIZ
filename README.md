# ARCTIZ 板材大師

「ARCTIZ 板材大師」是高端家具板材與室內裝飾材料的領先品牌。品牌致力於將極致工藝與永續環保結合，為現代室內設計提供兼具耐用性與視覺美感的板材解決方案。

## 本地開發指南

### 系統需求
- Node.js (建議 v20 或以上版本)

### 安裝步驟

1. 安裝依賴套件：
   ```bash
   npm install
   ```

2. 啟動開發伺服器：
   ```bash
   npm run dev
   ```

3. 建立生產版本打包：
   ```bash
   npm run build
   ```

## 自動部署 (GitHub Pages)

本專案已設定 GitHub Actions 工作流程。當程式碼推送至 `main` 分支時，系統將會自動進行打包編譯，並發布至 GitHub Pages 環境。
