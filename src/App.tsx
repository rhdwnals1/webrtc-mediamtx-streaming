import { useState, useEffect } from "react";
import styled from "styled-components";
import "./global.css";

type Item = {
  id: string;
  url: string;
  type: "youtube" | "webrtc";
  name?: string;
};

const ITEMS: Item[] = [
  // YouTube 임베드 예시
  {
    id: "1",
    url: "https://www.youtube.com/embed/-JhoMGoAfFc?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 1",
  },
  // WebRTC 스트림 예시 (MediaMTX)
  {
    id: "webrtc-1",
    url: "wss://your-mediamtx-server:8889/stream1",
    type: "webrtc",
    name: "WebRTC Stream 1",
  },
  {
    id: "webrtc-2",
    url: "wss://your-mediamtx-server:8889/stream2",
    type: "webrtc",
    name: "WebRTC Stream 2",
  },
  {
    id: "2",
    url: "https://www.youtube.com/embed/-u536iqt-Pk?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 2",
  },
  {
    id: "3",
    url: "https://www.youtube.com/embed/jF8-FvIj4-E?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 3",
  },
  {
    id: "4",
    url: "https://www.youtube.com/embed/zuWxsbV-mlA?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 4",
  },
  {
    id: "5",
    url: "https://www.youtube.com/embed/jvz52e_gBFk?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 5",
  },
  {
    id: "6",
    url: "https://www.youtube.com/embed/VzJdt74dAEk?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 6",
  },
  {
    id: "7",
    url: "https://www.youtube.com/embed/jF8-FvIj4-E?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 7",
  },
  {
    id: "8",
    url: "https://www.youtube.com/embed/-u536iqt-Pk?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 8",
  },
  {
    id: "9",
    url: "https://www.youtube.com/embed/-JhoMGoAfFc?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 9",
  },
  {
    id: "10",
    url: "https://www.youtube.com/embed/zuWxsbV-mlA?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 10",
  },
  {
    id: "11",
    url: "https://www.youtube.com/embed/jvz52e_gBFk?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 11",
  },
  {
    id: "12",
    url: "https://www.youtube.com/embed/VzJdt74dAEk?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 12",
  },
  {
    id: "13",
    url: "https://www.youtube.com/embed/jF8-FvIj4-E?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 13",
  },
  {
    id: "14",
    url: "https://www.youtube.com/embed/-u536iqt-Pk?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 14",
  },
  {
    id: "15",
    url: "https://www.youtube.com/embed/-JhoMGoAfFc?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 15",
  },
  {
    id: "16",
    url: "https://www.youtube.com/embed/zuWxsbV-mlA?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 16",
  },
  {
    id: "17",
    url: "https://www.youtube.com/embed/jvz52e_gBFk?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 17",
  },
  {
    id: "18",
    url: "https://www.youtube.com/embed/VzJdt74dAEk?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 18",
  },
  {
    id: "19",
    url: "https://www.youtube.com/embed/-JhoMGoAfFc?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 19",
  },
  {
    id: "20",
    url: "https://www.youtube.com/embed/zuWxsbV-mlA?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 20",
  },
  {
    id: "21",
    url: "https://www.youtube.com/embed/jvz52e_gBFk?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 21",
  },
  {
    id: "22",
    url: "https://www.youtube.com/embed/VzJdt74dAEk?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 22",
  },
  {
    id: "23",
    url: "https://www.youtube.com/embed/jF8-FvIj4-E?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 23",
  },
  {
    id: "24",
    url: "https://www.youtube.com/embed/-u536iqt-Pk?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 24",
  },
  {
    id: "25",
    url: "https://www.youtube.com/embed/-JhoMGoAfFc?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 25",
  },
  {
    id: "26",
    url: "https://www.youtube.com/embed/zuWxsbV-mlA?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 26",
  },
  {
    id: "27",
    url: "https://www.youtube.com/embed/jvz52e_gBFk?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 27",
  },
  {
    id: "28",
    url: "https://www.youtube.com/embed/VzJdt74dAEk?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 28",
  },
  {
    id: "29",
    url: "https://www.youtube.com/embed/VzJdt74dAEk?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 29",
  },
  {
    id: "30",
    url: "https://www.youtube.com/embed/VzJdt74dAEk?autoplay=1&mute=1&rel=0",
    type: "youtube",
    name: "YouTube Stream 30",
  },
];

const withYTParams = (u: string) =>
  `${u}${
    u.includes("?") ? "&" : "?"
  }autoplay=1&mute=1&playsinline=1&modestbranding=1&rel=0`;

export default function App() {
  const [now, setNow] = useState(() => new Date());
  const [displayItems, setDisplayItems] = useState<Item[]>([]);

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  // 랜덤으로 1-30개 영상 선택
  useEffect(() => {
    const randomCount = Math.floor(Math.random() * 30) + 1; // 1-30개
    const shuffled = [...ITEMS].sort(() => Math.random() - 0.5);
    setDisplayItems(shuffled.slice(0, randomCount));
  }, []);

  const [isFs, setIsFs] = useState(false);
  const toggleFs = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFs(true);
    } else {
      document.exitFullscreen();
      setIsFs(false);
    }
  };

  return (
    <AppContainer>
      <Header>
        <HeaderLeft>
          <StatusDot />
          <Title>실시간 멀티뷰({displayItems.length})</Title>
        </HeaderLeft>
        <Time>{now.toLocaleString("ko-KR")}</Time>
        <Button onClick={toggleFs}>
          {isFs ? "전체화면 종료" : "전체화면"}
        </Button>
      </Header>

      <Grid itemCount={displayItems.length}>
        {displayItems.map((it) => (
          <Cell key={it.id} item={it} isSingle={displayItems.length === 1} />
        ))}
      </Grid>
    </AppContainer>
  );
}

function Cell({ item, isSingle }: { item: Item; isSingle?: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);

  // WebRTC 연결 함수
  const connectWebRTC = async (videoElement: HTMLVideoElement, url: string) => {
    try {
      const pc = new RTCPeerConnection({
        iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
      });

      pc.ontrack = (event) => {
        videoElement.srcObject = event.streams[0];
        setLoaded(true);
      };

      // MediaMTX WebRTC 연결
      const ws = new WebSocket(url);

      ws.onopen = async () => {
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);
        ws.send(JSON.stringify({ type: "offer", sdp: offer.sdp }));
      };

      ws.onmessage = async (event) => {
        const data = JSON.parse(event.data);
        if (data.type === "answer") {
          await pc.setRemoteDescription(new RTCSessionDescription(data));
        }
      };

      ws.onerror = () => setBlocked(true);
    } catch (error) {
      console.error("WebRTC connection failed:", error);
      setBlocked(true);
    }
  };

  useEffect(() => {
    if (item.type === "webrtc" && videoRef) {
      connectWebRTC(videoRef, item.url);
    }
  }, [item, videoRef]);

  const renderContent = () => {
    if (!loaded && !blocked) {
      return <Loader aria-label="loading" />;
    }

    if (blocked) {
      return (
        <Blocked>
          <p>
            🚫 {item.type === "youtube" ? "임베드 차단됨" : "WebRTC 연결 실패"}
          </p>
          <small>
            {item.type === "youtube"
              ? "공식 임베드 허용 주소로 교체하세요"
              : "MediaMTX 서버를 확인하세요"}
          </small>
        </Blocked>
      );
    }

    if (item.type === "youtube") {
      return (
        <IFrame
          src={withYTParams(item.url)}
          title={item.name || item.url}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setBlocked(true)}
        />
      );
    }

    return (
      <WebRTCVideo
        ref={setVideoRef}
        autoPlay
        muted
        playsInline
        onLoadedData={() => setLoaded(true)}
        onError={() => setBlocked(true)}
      />
    );
  };

  return (
    <Tile data-loaded={loaded} isSingle={isSingle}>
      {renderContent()}
    </Tile>
  );
}

/* ---------- styles ---------- */

const AppContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00d4ff, #667eea);
  animation: pulse 2s infinite;
`;

const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff 0%, #a8a8a8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
`;

const Time = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #00d4ff;
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.6);
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.02em;
`;

const Button = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const Grid = styled.div<{ itemCount: number }>`
  flex: 1;
  display: grid;
  gap: 1px;
  padding: 1px;
  height: calc(100vh - 72px);
  align-content: stretch;
  justify-content: center;
  overflow: hidden;

  /* 12개 이상일 때: 최대한 크게 유동적 레이아웃 */
  ${(props) => {
    if (props.itemCount >= 12) {
      // 간단한 레이아웃 매핑
      const layouts: { [key: number]: [number, number] } = {
        12: [4, 3],
        13: [5, 3],
        14: [5, 3],
        15: [5, 3],
        16: [5, 4],
        17: [5, 4],
        18: [5, 4],
        19: [5, 4],
        20: [5, 4],
        21: [6, 4],
        22: [6, 4],
        23: [6, 4],
        24: [6, 4],
        25: [6, 5],
        26: [6, 5],
        27: [6, 5],
        28: [6, 5],
        29: [6, 5],
        30: [6, 5],
      };

      const [cols, rows] = layouts[props.itemCount] || [
        Math.ceil(Math.sqrt(props.itemCount * 1.6)),
        Math.ceil(
          props.itemCount / Math.ceil(Math.sqrt(props.itemCount * 1.6))
        ),
      ];

      return `
        grid-template-columns: repeat(${cols}, 1fr);
        grid-template-rows: repeat(${rows}, 1fr);
        height: calc(100vh - 72px);
        align-content: stretch;
      `;
    }
    return "";
  }}

  /* 5-11개일 때: 간단한 레이아웃 */
  ${(props) => {
    const smallLayouts: { [key: number]: [number, number] } = {
      5: [3, 2],
      6: [3, 2],
      7: [4, 2],
      8: [4, 2],
      9: [4, 3],
      10: [4, 2],
      11: [4, 3],
    };

    const layout = smallLayouts[props.itemCount];
    if (layout) {
      const [cols, rows] = layout;
      return `
        grid-template-columns: repeat(${cols}, 1fr);
        grid-template-rows: repeat(${rows}, 1fr);
        height: calc(100vh - 72px);
        align-content: stretch;
      `;
    }
    return "";
  }}

  /* 1-4개일 때: 최대한 크게 */
  ${(props) => {
    const tinyLayouts: { [key: number]: [number, number] } = {
      1: [1, 1],
      2: [2, 1],
      3: [3, 1],
      4: [4, 1],
    };

    const layout = tinyLayouts[props.itemCount];
    if (layout) {
      const [cols, rows] = layout;
      return `
        grid-template-columns: repeat(${cols}, 1fr);
        grid-template-rows: repeat(${rows}, 1fr);
        height: calc(100vh - 72px);
        align-content: stretch;
        ${props.itemCount === 1 ? "justify-content: stretch;" : ""}
      `;
    }
    return "";
  }}
`;

const Tile = styled.div<{ isSingle?: boolean }>`
  position: relative;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 2px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  width: 100%;
  min-height: 84px;

  /* 1개일 때는 aspect-ratio 제한 없음 */
  ${(props) =>
    !props.isSingle &&
    `
    aspect-ratio: 16 / 9;
  `}

  &[data-loaded="true"] {
    border-color: rgba(0, 255, 136, 0.3);
  }
`;

const IFrame = styled.iframe.attrs({
  allow: "autoplay; fullscreen; picture-in-picture",
  referrerPolicy: "origin-when-cross-origin",
})`
  width: 100%;
  height: 100%;
  border: 0;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 2px;
`;

const WebRTCVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 2px;
`;

const Loader = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  z-index: 2;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 2px;

  &::after {
    content: "";
    width: 24px;
    height: 24px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-top-color: #00d4ff;
    border-right-color: #667eea;
    border-radius: 50%;
    animation: spin 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Blocked = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 4px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 2px;
  border: 1px solid rgba(255, 0, 0, 0.2);

  > p {
    font-weight: 700;
    margin-bottom: 2px;
    color: #ff6b6b;
    font-size: 0.6rem;
  }

  > small {
    color: #888;
    font-size: 0.5rem;
    line-height: 1.2;
  }
`;
