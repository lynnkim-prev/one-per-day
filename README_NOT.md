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
~~위 방법대로 하면 재부팅하면 또 다시 소스트리에 publickey 에러가 난다.~~
찾았다. 
호스트가: github.com, 유저: git으로 되어있어야 한다. 
https://stackoverflow.com/a/69764024

#### 터미널: 
* ▶ vi ./.ssh/config
  * Host github.com
  * HostName github.com
  * User git
  * PreferredAuthentications publickey
  * IdentityFile /Users/lynnkim/.ssh/lynnkim-prev-GitHub
  * UseKeychain yes
  * AddKeysToAgent yes

#### 스타일 셋업:
* ▶ ng add @angular/material 
* ▶ npm install bootstrap
* `src/styles.scss`
  * @import "~bootstrap/dist/css/bootstrap.css";

#### NgRx 셋업: https://ngrx.io/guide/store/install
* ▶ ng add @ngrx/store@latest
* ▶ ng add @ngrx/store@latest --no-minimal
* ▶ ng add @ngrx/effects@latest
* ▶ ng add @ngrx/router-store@latest
* ▶ ng add @ngrx/entity@latest
* ▶ ng add @ngrx/component-store@latest // 이거 기존 프로젝트에서도 안쓰는건데 일단 궁금해서 설치해봄~ store랑 뭐가 다를까?
* ▶ ng add @ngrx/store-devtools
* ▶ npm install ngrx-store-localstorage --save

배고파서 오늘은 소코마데다
내일은 치맥이다 

## 20230325~20230326
https://random-data-api.com/api/coffee/random_coffee?size=50

~~@ngrx/schematics 설치 (커멘드로 스토어 만들기위해 설치함)
▶ ng add @ngrx/schematics@latest~~
스키마 ngrx.io 도큐먼트 + 프로젝트 따르는게 더 깔끔.

coffee-list-cont 보일러 플레이트 만듦. 

## 20230327 ~ 28

할 일: 
- 10개씩 페이지네이션 구현하기. (0)
- NgRx 스토어 만들기. 정리할 겸 유튜브 인도 선생님 강좌 보면서 따라해봐야겠다 - 이펙트로 api async API 리스폰스 스테이트에 등록하기 (+ 에러핸들러). 
이펙트 만들기 귀찮아서 안하는중 ㅜㅜ 일단 목데이터 넣어서 데스크탑이랑 모바일 UI는 했음. 룹돌려서 컴포넌트에서 뽑으면 될거같기도 한데 굳이 그렇게까진 안할란다.. 이게 더 straightforward 하기도 하고 그렇게 돌려놓으면 나중에 가독성떨어짐
- 오늘도 30분만 잡고 하자고 했는데 계속 했다. 

## 20230419~20
NgRx 스토어 만듦. 스테이트 액션 리듀서 이펙트 만들었다. API 콜하는 서비스 만들었고 http클라이언트 모듈 집어넣었다.  
No provider에러 콘솔에 나와서 http 서비스 root에 프로바이드하고 앱단에 모듈 임포트 안된거 눈치챘어야됐는데.. 아무튼 다 잘 된다 이제. 클린업은 천천히 하면 된다. 누구 보여줄게 아니니까.  
귀찮아서 영혼없이 했는데 시간이 지나니까 머리가 돌아서 그런지 빨리빨리 했다. 
그래도 정리가 필요하다. 복습하면서 말로 설명하는 연습을 해야겠다. 오늘도 30분 한다고 하고 계속 했군.. 멈춰!





