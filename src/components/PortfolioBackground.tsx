
export default function PortfolioBackground() {
  return (
    

<svg
  id="visual"
  viewBox="0 0 900 600"
  preserveAspectRatio="none"
  className="absolute inset-0 h-full w-full"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
>
  <defs>
    <filter
      id="dotBlur"
      x="-100%"
      y="-100%"
      width="300%"
      height="300%"
      color-interpolation-filters="sRGB"
    >
      <feGaussianBlur stdDeviation="28" />
    </filter>
  </defs>

  <rect
    width="900"
    height="600"
    fill="var(--page, #090909)"
  />

  <g
    fill="var(--accent, #ff141a)"
    filter="url(#dotBlur)"
    opacity="0.8"
  >
    <circle r="136" cx="84" cy="234" />
    <circle r="60" cx="151" cy="543" />
    <circle r="72" cx="423" cy="429" />
    <circle r="60" cx="448" cy="69" />
    <circle r="103" cx="883" cy="88" />
    <circle r="116" cx="710" cy="366" />
  </g>
</svg>
  );
}