import React from 'react';

// Custom vector lettermark based on the approved 01 clean-type direction.
// Native SVG remains sharp on retina/mobile and follows both site color themes.
const mPath = 'M80 0H488V576C488 672 480 863 475 1047C523 865 573 677 604 576L780 0H1116L1289 576C1320 681 1372 878 1419 1065C1415 876 1406 676 1406 576V0H1814V1490H1191L1059 1024C1030 923 986 750 948 597C910 750 865 923 836 1024L702 1490H80Z';
const wPath = 'M395 0H852L1021 688C1034 740 1046 803 1062 881C1078 803 1090 740 1103 688L1272 0H1729L2124 1490H1672L1552 912C1525 782 1501 652 1478 522C1452 652 1426 782 1396 912L1264 1490H860L728 912C698 781 671 650 646 519C622 650 598 781 571 912L452 1490H0Z';

export function BrandMark({ className = '' }) {
  return <svg className={`mww-wordmark ${className}`.trim()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 62" role="img" aria-label="MWW" focusable="false">
    <g className="mww-letters" fill="currentColor">
      <path d={mPath} transform="translate(0 58) scale(.036 -.036)"/>
      <path d={wPath} transform="translate(57 58) scale(.036 -.036)"/>
      <path d={wPath} transform="translate(122 58) scale(.036 -.036)"/>
    </g>
    <rect className="mww-dot" x="202.5" y="50.2" width="8.5" height="8.5" rx="1.5" fill="currentColor"/>
  </svg>;
}
