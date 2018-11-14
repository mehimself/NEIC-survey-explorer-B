# DATAKUBEN Web App
Web application for DATAKUBENs web developments.
## Quick start

```bash
# Clone project code 
git clone https://github.com/mehimself/datakuben.git

# goto dir
cd datakuben

# install with npm or yarn
npm install

# start the develop server
npm start

# install as service

# pull and update production server
sudo systemctl stop datakuben --now
git pull
npm run deploy:prod
sudo systemctl start datakuben --now
```
