# footballTeamCMS
BAAS

### 1. Clone repo
```
$ git clone https://github.com/Adeniyikayodee/footballTeamCMS.git
```

### 2. Setup MongoDB
- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - Create .env file in root folder
  - Set DB_URL=mongodb://localhost/....  
- Atlas Cloud MongoDB
  - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - Create .env file in root folder (update this in gitignore folder)
  - Set DB_URL=mongodb+srv://your-db-connection

### 3. Run Backend
```
$ npm install
$ npm start
```
