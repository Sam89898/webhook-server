

@echo off
echo Sending test webhook payload to ngrok endpoint...
curl -X POST https://c8cb-182-235-16-137.ngrok-free.app/webhook -H "Content-Type: application/json" -d '{\"symbol\":\"TEST\",\"price\":123.45}'

pause


