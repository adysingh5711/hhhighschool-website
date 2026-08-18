import type { SVGProps } from "react";

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22.5 6.5s-.22-1.56-.9-2.25c-.86-.9-1.83-.9-2.27-.96C16.1 3 12 3 12 3h-.01s-4.1 0-7.33.29c-.44.06-1.4.06-2.27.96-.68.69-.9 2.25-.9 2.25S1.2 8.3 1.2 10.1v1.8c0 1.8.29 3.6.29 3.6s.22 1.56.9 2.25c.86.9 2 .87 2.5.97C6.9 19 12 19 12 19s4.1 0 7.33-.29c.44-.06 1.4-.06 2.27-.96.68-.69.9-2.25.9-2.25s.29-1.8.29-3.6v-1.8c0-1.8-.29-3.6-.29-3.6ZM9.75 14.1V8.9L15 11.5l-5.25 2.6Z" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 2H22l-6.8 7.77L23.2 22h-6.6l-5.17-6.77L5.4 22H2.28l7.3-8.34L1.7 2h6.76l4.67 6.2Zm-2.32 18h1.83L7.5 3.9H5.55Z" />
    </svg>
  );
}
