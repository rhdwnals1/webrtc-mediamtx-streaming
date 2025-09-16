import { useState, useEffect } from "react";
import styled from "styled-components";
import "./global.css";

type Item = {
  id: string;
  url: string;
};

const ITEMS: Item[] = [
  // YouTube 임베드 예시
  {
    id: "1",
    url: "https://www.youtube.com/embed/-JhoMGoAfFc?autoplay=1&mute=1&rel=0",
  },
  // WebRTC 스트림 예시 (MediaMTX)
  {
    id: "webrtc-1",
    url: "wss://your-mediamtx-server:8889/stream1",
  },
  {
    id: "webrtc-2",
    url: "wss://your-mediamtx-server:8889/stream2",
  },
  {
    id: "2",
    url: "https://www.youtube.com/embed/-u536iqt-Pk?autoplay=1&mute=1&rel=0",
  },
  {
    id: "3",
    url: "https://www.youtube.com/embed/jF8-FvIj4-E?autoplay=1&mute=1&rel=0",
  },
  {
    id: "4",
    url: "https://www.youtube.com/embed/zuWxsbV-mlA?autoplay=1&mute=1&rel=0",
  },
  {
    id: "5",
    url: "https://www.youtube.com/embed/jvz52e_gBFk?autoplay=1&mute=1&rel=0",
  },
  {
    id: "6",
    url: "https://www.youtube.com/embed/VzJdt74dAEk?autoplay=1&mute=1&rel=0",
  },
  {
    id: "7",
    url: "https://www.youtube.com/embed/jF8-FvIj4-E?autoplay=1&mute=1&rel=0",
  },
  {
    id: "8",
    url: "https://www.youtube.com/embed/-u536iqt-Pk?autoplay=1&mute=1&rel=0",
  },
  {
    id: "9",
    url: "https://www.youtube.com/embed/-JhoMGoAfFc?autoplay=1&mute=1&rel=0",
  },
  {
    id: "10",
    url: "https://www.youtube.com/embed/zuWxsbV-mlA?autoplay=1&mute=1&rel=0",
  },
  {
    id: "11",
    url: "https://www.youtube.com/embed/jvz52e_gBFk?autoplay=1&mute=1&rel=0",
  },
  {
    id: "12",
    url: "https://www.youtube.com/embed/VzJdt74dAEk?autoplay=1&mute=1&rel=0",
  },
  {
    id: "13",
    url: "https://www.youtube.com/embed/jF8-FvIj4-E?autoplay=1&mute=1&rel=0",
  },
  {
    id: "14",
    url: "https://www.youtube.com/embed/-u536iqt-Pk?autoplay=1&mute=1&rel=0",
  },
  {
    id: "15",
    url: "https://www.youtube.com/embed/-JhoMGoAfFc?autoplay=1&mute=1&rel=0",
  },
  {
    id: "16",
    url: "https://www.youtube.com/embed/zuWxsbV-mlA?autoplay=1&mute=1&rel=0",
  },
  {
    id: "17",
    url: "https://www.youtube.com/embed/jvz52e_gBFk?autoplay=1&mute=1&rel=0",
  },
  {
    id: "18",
    url: "https://www.youtube.com/embed/VzJdt74dAEk?autoplay=1&mute=1&rel=0",
  },
  {
    id: "19",
    url: "https://www.youtube.com/embed/-JhoMGoAfFc?autoplay=1&mute=1&rel=0",
  },
  {
    id: "20",
    url: "https://www.youtube.com/embed/zuWxsbV-mlA?autoplay=1&mute=1&rel=0",
  },
  {
    id: "21",
    url: "https://www.youtube.com/embed/jvz52e_gBFk?autoplay=1&mute=1&rel=0",
  },
  {
    id: "22",
    url: "https://www.youtube.com/embed/VzJdt74dAEk?autoplay=1&mute=1&rel=0",
  },
  {
    id: "23",
    url: "https://www.youtube.com/embed/jF8-FvIj4-E?autoplay=1&mute=1&rel=0",
  },
  {
    id: "24",
    url: "https://www.youtube.com/embed/-u536iqt-Pk?autoplay=1&mute=1&rel=0",
  },
  {
    id: "25",
    url: "https://www.youtube.com/embed/-JhoMGoAfFc?autoplay=1&mute=1&rel=0",
  },
  {
    id: "26",
    url: "https://www.youtube.com/embed/zuWxsbV-mlA?autoplay=1&mute=1&rel=0",
  },
  {
    id: "27",
    url: "https://www.youtube.com/embed/jvz52e_gBFk?autoplay=1&mute=1&rel=0",
  },
  {
    id: "28",
    url: "https://www.youtube.com/embed/VzJdt74dAEk?autoplay=1&mute=1&rel=0",
  },
  {
    id: "29",
    url: "https://www.youtube.com/embed/VzJdt74dAEk?autoplay=1&mute=1&rel=0",
  },
  {
    id: "30",
    url: "https://www.youtube.com/embed/VzJdt74dAEk?autoplay=1&mute=1&rel=0",
  },
];

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
          <Cell key={it.id} src={it.url} isSingle={displayItems.length === 1} />
        ))}
      </Grid>
    </AppContainer>
  );
}

function Cell({ src, isSingle }: { src: string; isSingle?: boolean }) {
  const [blocked, setBlocked] = useState(false);

  return (
    <Tile isSingle={isSingle}>
      {!blocked ? (
        <IFrame
          src={src}
          title={src}
          loading="lazy"
          onError={() => setBlocked(true)}
        />
      ) : (
        <Blocked>
          <p>임베트 차단됨</p>
          <small>공식 임베드 허용 주소로 교체하세요</small>
        </Blocked>
      )}
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
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(0, 255, 136, 0.3);
    transform: scale(1.02);
  }

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

const Blocked = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 1rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);

  p {
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
    color: #ff6b6b;
  }

  small {
    font-size: 0.8rem;
    color: #888;
  }
`;
