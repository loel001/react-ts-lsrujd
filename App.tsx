import * as React from 'react';
import './style.css';
import { Text } from '@consta/uikit/Text';

export default function App() {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const subsidiaryRef = React.useRef<HTMLDivElement>(null);

  return (
    <div>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={subsidiaryRef}
      >
        <Text>Дочернее общество</Text>
      </div>
      {isHovered && (
        <Popover
          anchorRef={subsidiaryRef}
          direction="rightUp"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ left: 320, top: 40 }}
        >
          Popover
        </Popover>
      )}
    </div>
  );
}
