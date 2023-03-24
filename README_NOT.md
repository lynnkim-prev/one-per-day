# one-per-day
Omega-3 900mg One Per Day
Triple Strength

Yo! I can edit readme! I'm the owner!
This will be my sandbox!
****
## 20230321
1. create SSH key for Github account
2. connect Github with SourceTree
3. create master
4. create develop
5. create feat/LW-1000
6. merge feat/LW-1000 to develop
7. merge develop to master

How fun~ 
****

## 20230322
Let's create an angular app!
뭐지?? 왜 마스터로가냥

1. 깃헙에서 리모트 리포 만들기: `Git clone remote repository `
2. 로컬에서 앵귤러 앱 만들기: `ng new --directory .`
3. 자스민 rpm package 에러: `npm install --save --legacy-peer-deps` 로 구버전 호환가능하게 package.json 업데이트 + 구버전 설치

###### **_**소스트리 SSH 키 에러시**_**
1. 터미널:
   * ▶ cd ~/.ssh
   * ▶ rm lynn-prev-GitHub.pub
   * ▶ rm lynnkim-prev-GitHub
2. 소스트리:
   * /세팅/Accounts에서 기존 GitHub 유저 지우고 새 유저 생성
   * Connect Account
   * SSH Key: Generate key
   * 생성된 SSH Key 복사
3. 깃헙:
   * Add new SSH keys https://github.com/settings/ssh/new
   * 소스트리에서 복사한 SSH Key 집어넣기
   * 연결된 상태가 되면 키 아이콘이 초록색으로 뜬다.
4. 터미널:
   * config에 등록됐는지 확인 
   * ▶ cd ~/.ssh
   * ▶ vi config 

## 20230323
위 방법대로 하면 재부팅하면 또 다시 소스트리에 publickey 에러가 난다. 


