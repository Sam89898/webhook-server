#!/bin/bash

# 設定變數
WEBHOOK_URL="http://localhost:3000/webhook"
JSON_DATA='{
  "action": "BUY",
  "symbol": "MNQ",
  "price": 18200,
  "time": "'$(date -u +"%Y-%m-%dT%H:%M:%SZ")'"
}'

# 執行 POST 請求
curl -X POST "$WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d "$JSON_DATA"

echo ""
echo "✅ Webhook 測試已發送"
