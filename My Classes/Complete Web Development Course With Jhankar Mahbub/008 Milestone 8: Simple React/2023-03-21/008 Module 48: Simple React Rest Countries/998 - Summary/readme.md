
### Netlify Deploy 
- cmd - project - nmp run build
- netlify - sites - drag build(folder created by npm run build in your project)

### update project 
- netlify - project - deploys
- cmd - project - nmp run build
- netlify - sites - drag build(folder created by npm run build in your project)

### Surge Deploy 
- cmd - project - cd build
- surge (collect domain name)
- cd .. for project folder
- echo domain name > public\CNAME

### update surge deploy
- cmd - project - nmp run build
- cmd - project - cd build
- surge
