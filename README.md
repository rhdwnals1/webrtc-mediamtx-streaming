# WebRTC MediaMTX Streaming Dashboard

실시간 멀티뷰 스트리밍 대시보드입니다. YouTube 임베드와 WebRTC 스트림을 동시에 지원하며, 1개부터 30개까지의 동영상을 최적화된 그리드 레이아웃으로 표시합니다.

## ✨ 주요 기능

- **멀티 소스 지원**: YouTube 임베드와 WebRTC 스트림 동시 지원
- **동적 그리드 레이아웃**: 1-30개 영상을 최적화된 레이아웃으로 자동 배치
- **실시간 업데이트**: 1-30개 영상을 랜덤하게 선택하여 표시
- **반응형 디자인**: 화면 크기에 따라 최적화된 그리드 구성
- **전체화면 지원**: 전체화면 모드로 몰입감 있는 시청 경험
- **로딩 상태 표시**: 각 스트림의 로딩 및 오류 상태 시각적 표시

## 🎯 지원하는 스트림 타입

### YouTube 임베드

- YouTube 라이브 스트림 및 비디오 임베드
- 자동 재생 및 음소거 설정
- 임베드 차단 시 오류 메시지 표시

### WebRTC 스트림 (MediaMTX)

- MediaMTX 서버의 WebRTC 스트림 연결
- 실시간 P2P 비디오 스트리밍
- STUN 서버를 통한 NAT 트래버설

## 📐 그리드 레이아웃

| 개수    | 레이아웃           | 설명                             |
| ------- | ------------------ | -------------------------------- |
| 1-4개   | 1x1, 2x1, 3x1, 4x1 | 가로로 나란히 최대한 크게        |
| 5-11개  | 3x2, 4x2, 4x3 등   | 최적화된 2-3행 레이아웃          |
| 12-30개 | 4x3, 5x4, 6x5 등   | 화면을 꽉 채우는 효율적 레이아웃 |

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

### 빌드

```bash
npm run build
```

## ⚙️ 설정

### WebRTC 스트림 연결

`src/App.tsx`에서 WebRTC 스트림 URL을 설정하세요:

```typescript
{
  id: "webrtc-1",
  url: "wss://your-mediamtx-server:8889/stream1",
  type: "webrtc",
  name: "WebRTC Stream 1"
}
```

### MediaMTX 서버 설정

MediaMTX 서버에서 WebRTC를 활성화하고 적절한 포트를 설정하세요:

```yaml
# mediamtx.yml
webrtc: yes
webrtcEncryption: "auto"
webrtcServerKey: "server.key"
webrtcServerCert: "server.crt"
```

## 🛠️ 기술 스택

- **React 18** - UI 프레임워크
- **TypeScript** - 타입 안전성
- **Styled Components** - CSS-in-JS 스타일링
- **WebRTC API** - 실시간 비디오 스트리밍
- **WebSocket** - MediaMTX 서버 통신
- **Vite** - 빌드 도구

## 📁 프로젝트 구조

```
src/
├── App.tsx          # 메인 컴포넌트
├── global.css       # 글로벌 스타일
└── main.tsx         # 앱 진입점
```

## 🎨 스타일링

- **다크 테마**: 그라데이션 배경과 네온 색상
- **글래스모피즘**: 반투명 요소와 블러 효과
- **애니메이션**: 로딩 스피너와 호버 효과
- **반응형**: 다양한 화면 크기 지원

## 🔧 커스터마이징

### 스트림 소스 추가

`ITEMS` 배열에 새로운 스트림을 추가하세요:

```typescript
{
  id: "custom-stream",
  url: "your-stream-url",
  type: "youtube" | "webrtc",
  name: "Custom Stream Name"
}
```

### 그리드 레이아웃 수정

`layouts` 객체에서 특정 개수의 레이아웃을 수정할 수 있습니다:

```typescript
const layouts = {
  20: [5, 4], // 20개일 때 5x4 그리드
  // ...
};
```

## 🐛 문제 해결

### WebRTC 연결 실패

- MediaMTX 서버가 실행 중인지 확인
- WebSocket URL이 올바른지 확인
- 방화벽 설정 확인

### YouTube 임베드 차단

- 공식 YouTube 임베드 URL 사용
- X-Frame-Options 정책 확인

## 📄 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
