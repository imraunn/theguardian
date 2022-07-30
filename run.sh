pip3 install -r requirements.txt
npm install
NODE_ENV=production pm2 start server.js --name 'TheGuardianProject'