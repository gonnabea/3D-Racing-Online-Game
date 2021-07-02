# Crazy-Racing

## 간략 소개

- 웹 브라우저와 안드로이드를 지원하는 3D 실시간 멀티플레이 온라인 레이싱 게임입니다.

- 프로젝트의 Nest.js 백엔드 부분입니다.

- 예상 제작기간: 3 ~ 4 개월

## 특징

- 실시간 3D 온라인 레이싱 게임
- 자동차의 핸들을 실제 조작하는 것같은 경험 제공
- VR환경 지원
- 다양한 플랫폼 지원 (웹, 응용 프로그램, 안드로이드 지원)
- 최소 1000명 이상의 동시 접속 유저를 수용

## 사용 기술

- [x] Nest.js
- [x] TypeScript
- [x] Fastify (오버헤드가 적은 빠른 웹서버를 위함)
- [x] JWT
- [x] GraphQL
- [x] MongoDB
- [x] TypeGoose
- [ ] Websocket (for TCP)
- [ ] WebRTC or netcode.io (for UDP)
- [ ] Jest
- [ ] Mailgun
- [ ] AWS or Oracle Cloud Free Tier

## 기능

- [x] JWT 로그인 / 로그아웃
- [ ] 소셜 로그인
- [ ] 이메일로 회원가입
- [ ] 실시간 1:1, N:N 채팅
- [ ] 1:1 채팅 시 유저에게 알림
- [ ] 유저 아바타 등록 & 변경
- [ ] 운영진 계정: 회원 삭제 기능, 강제 방 삭제 기능
- [ ] 유저 모델: 선택한 자동차, 선택한 캐릭터, 방장 여부, 접속하고 있는 방
- [ ] E2E & Unit Testing
- [ ] 메인 로비용 실시간 소켓 통신
- [ ] N:N 게임방 만들기, 접속하기 CRUD
- [ ] 유저 강퇴하기

### Models

- 유저 : 채팅룸 = N:N
- 채팅룸 : 게임룸 = 1:1
- 유저 : 게임룸 = 1:N
- 채팅룸 : 채팅 = 1:N

### References

- https://poki.com/en/g/rally-point-5

- https://www.youtube.com/watch?v=D1lGGvO0eEs <- OpenCV로 자동차 핸들 구현

- https://www.youtube.com/watch?v=HQFreqPb3dg <- DB 선택 기준 참고
