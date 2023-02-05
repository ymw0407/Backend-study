### 1. 도커 단답형 퀴즈
## 1-1) 도커 이미지 빌드하기
# 1-1-1) docker build .
# 1-1-2) docker images

## 1-2) 도커 이미지 실행/제거하기
# 1-2-1) docker run 2e7a05ce7683 (IMAGE_ID)
# 1-2-2) docker ps -a
# 1-2-3) docker stop CONTATINER_ID
# 1-2-4) docker rm CONTAINER_ID
# 1-2-5) docker image rm IMAGE_ID

## 1-3) 도커에서 Node.js 서버 실행하기
# 1-3-1) http://localhost:3000/boards 
# 1-3-2) docker run 2000:3000 2e7a05ce7683 (IMAGE_ID)

## 1-4) 도커 내부에 접속하기
# 1-4-1) docker exec -it 2bd25dc4230a (CONTATINER_ID) /bin/bash
# 1-4-2) 아니요
# 1-4-3) 아니요

### 2. 도커 서술식 퀴즈
## 2-1) 두 도커 파일의 차이점은 무엇인가요?
# File01: 폴더 내 모든 파일 복사 
# File02: 수정된 부분만 설치, 나머지는 기존 파일 복사