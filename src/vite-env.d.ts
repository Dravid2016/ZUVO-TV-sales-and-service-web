/// <reference types="vite/client" />

declare module '*Beams' {
  const Beams: React.ComponentType<any>;
  export default Beams;
}

declare module '*Hyperspeed' {
  const Hyperspeed: React.ComponentType<any>;
  export default Hyperspeed;
}

declare module '*.jsx' {
  const component: React.ComponentType<any>;
  export default component;
}
