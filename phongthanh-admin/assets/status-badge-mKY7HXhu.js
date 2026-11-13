import{C as e,q as t}from"./routes-Cp-a66ng.js";import{m as n,o as r}from"./voucher-code-CZ8SBZYm.js";var i=`@layer base {
  :root {
    color-scheme: light;

    /* Operational Soft UI: one cool-grey material, not white cards on a tint.
       Keep source colours as HSL tuples for the status-tone colour solver. */
    --ops-canvas: 215 24% 90.196%;
    --ops-surface: 215 24% 90.196%;
    --ops-surface-subtle: 214.286 25% 89.02%;
    --ops-surface-muted: 215.294 25.373% 86.863%;
    --ops-surface-selected: 248.889 45.763% 88.431%;
    --ops-text-strong: 208.571 14.685% 28.039%;
    --ops-text: 208.571 14.685% 28.039%;
    /* Muted ink stays AA even on selected, striped and pressed surfaces. */
    --ops-text-muted: 213.333 14.754% 35.882%;
    --ops-border: 216 22.222% 82.353%;
    --ops-border-strong: 215.172 20.567% 72.353%;
    /* Structural rules and control edges carry information; decorative
       panels use depth instead. Both clear 3:1 on the darkest neutral fill. */
    --ops-border-structural: 216.774 12.971% 46.863%;

    /* #6C63FF is the hue direction, not a normal-text button fill.
       The darker functional variant keeps white button labels above AA. */
    --ops-primary: 244.027 74.874% 60.98%;
    --ops-primary-hover: 244.412 58.621% 54.51%;
    --ops-primary-pressed: 244.762 51.22% 48.235%;
    --ops-primary-subtle: 250 46.154% 89.804%;
    --ops-primary-selected: 250 45.455% 87.059%;
    --ops-link: 245.373 53.6% 50.98%;
    --ops-focus: 245.18 62.896% 56.667%;
    --ops-on-primary: 0 0% 100%;
    --ops-scrim: rgb(39 45 55 / 0.42);

    /* Same-material wells still need an accessible identifying boundary:
       the rest edge is at least 3:1 across neutral and selected surfaces. */
    --ops-control-border: 216.774 12.971% 46.863%;
    --ops-control-border-hover: 213.333 14.286% 37.059%;
    --ops-control-bg-hover: 215.294 25.373% 86.863%;
    --ops-control-bg-pressed: 215.455 26.19% 83.529%;

    --ops-danger-hover: 355.276 65.128% 38.235%;
    --ops-danger-pressed: 354.737 67.059% 33.333%;

    /* Explicit disabled colours preserve legibility without compounding
       opacity on already-muted foregrounds. */
    --ops-disabled-fg: 213.6 12.69% 38.627%;
    --ops-disabled-bg: 216 24.59% 88.039%;
    --ops-disabled-border: 216 17.241% 71.569%;

    --ops-sidebar: 215 24% 90.196%;
    --ops-sidebar-surface: 214.286 25% 89.02%;
    --ops-sidebar-hover: 215.294 25.373% 86.863%;
    --ops-sidebar-active: 250 45.455% 87.059%;
    --ops-sidebar-text: 208.571 14.685% 28.039%;
    --ops-sidebar-muted: 213.333 14.754% 35.882%;
    --ops-sidebar-border: 216 22.222% 82.353%;

    /* Semantic feedback pairs are independent of the 15 fixed tình trạng
       identities; their raw legacy colours are never changed by this theme. */
    --ops-success: 147.429 53.03% 25.882%;
    --ops-success-subtle: 144.706 23.944% 86.078%;
    --ops-warning: 36 100% 24.51%;
    --ops-warning-subtle: 43.636 41.772% 84.51%;
    --ops-danger: 354.627 63.81% 41.176%;
    --ops-danger-subtle: 351.429 33.333% 87.647%;
    --ops-info: 201.935 58.491% 31.176%;
    --ops-info-subtle: 203.478 35.385% 87.255%;

    /* Existing shadcn aliases stay stable for all current consumers. */
    --background: var(--ops-canvas);
    --foreground: var(--ops-text-strong);
    --card: var(--ops-surface);
    --card-foreground: var(--ops-text-strong);
    --popover: var(--ops-surface);
    --popover-foreground: var(--ops-text-strong);
    --primary: var(--ops-primary);
    --primary-foreground: var(--ops-on-primary);
    --secondary: var(--ops-surface-muted);
    --secondary-foreground: var(--ops-text);
    --muted: var(--ops-surface-muted);
    --muted-foreground: var(--ops-text-muted);
    /* Accent remains neutral to preserve shared shadcn hover semantics. */
    --accent: var(--ops-surface-muted);
    --accent-foreground: var(--ops-link);
    --destructive: var(--ops-danger);
    --destructive-foreground: var(--ops-on-primary);
    --success: var(--ops-success);
    --success-foreground: var(--ops-on-primary);
    --warning: var(--ops-warning);
    --warning-foreground: var(--ops-on-primary);
    --border: var(--ops-border);
    --input: var(--ops-control-border);
    --ring: var(--ops-focus);
    --scrollbar-track: 215.294 25.373% 86.863%;
    /* The thumb, like a control edge, stays above 3:1 on its track. */
    --scrollbar-thumb: 216.774 12.971% 46.863%;
    --sidebar: var(--ops-sidebar);
    --sidebar-foreground: var(--ops-sidebar-text);
    --sidebar-accent: var(--ops-link);
    --sidebar-border: var(--ops-sidebar-border);

    --radius-panel: 32px;
    --radius-control: 16px;
    --radius-small: 12px;
    --radius-pill: 999px;
    --radius: var(--radius-panel);

    /* Opposing translucent shadows mold the same material. Noninteractive
       panels never lift on hover; only controls change their depth. */
    --elevation-panel:
      10px 10px 24px rgb(163 177 198 / 0.48),
      -10px -10px 24px rgb(255 255 255 / 0.62);
    --elevation-floating:
      12px 12px 28px rgb(163 177 198 / 0.58),
      -10px -10px 24px rgb(255 255 255 / 0.7);
    --elevation-overlay:
      18px 18px 42px rgb(139 153 175 / 0.55),
      -14px -14px 36px rgb(255 255 255 / 0.68);
    --elevation-control:
      4px 4px 9px rgb(163 177 198 / 0.52),
      -4px -4px 9px rgb(255 255 255 / 0.68);
    --elevation-control-hover:
      6px 6px 12px rgb(163 177 198 / 0.58),
      -6px -6px 12px rgb(255 255 255 / 0.76);
    --elevation-inset:
      inset 3px 3px 7px rgb(163 177 198 / 0.5),
      inset -3px -3px 7px rgb(255 255 255 / 0.65);
    --elevation-inset-deep:
      inset 5px 5px 10px rgb(163 177 198 / 0.55),
      inset -5px -5px 10px rgb(255 255 255 / 0.7);
    --elevation-pressed:
      inset 2px 2px 5px rgb(139 153 175 / 0.48),
      inset -2px -2px 5px rgb(255 255 255 / 0.6);
    /* The pinned-column seam: a soft edge cast toward the scrolled content,
       shown only while something is scrolled beneath the pinned column. */
    --elevation-seam-start: 2px 0 4px -2px hsl(var(--foreground) / 0.25);
    --elevation-seam-end: -2px 0 4px -2px hsl(var(--foreground) / 0.25);
    /* Retained brand contract; its tile now shares the shell material. */
    --elevation-brand-bevel:
      inset 1px 1px 2px rgb(255 255 255 / 0.68),
      inset -1px -1px 2px rgb(163 177 198 / 0.45);
    --focus-ring-color: hsl(var(--ops-focus) / 0.34);

    --motion-duration-fast: 150ms;
    --motion-duration-base: 300ms;
    --motion-duration-slow: 300ms;
    --motion-standard: 300ms;
    --motion-easing-standard: cubic-bezier(0.16, 1, 0.3, 1);
    --motion-easing-exit: cubic-bezier(0.4, 0, 1, 1);
    /* An acknowledgement is read, not just seen, so it outlasts a transition. */
    --motion-duration-ack: 520ms;
    --motion-row-enter-shift: 4px;
    --ops-ack-ring: hsl(var(--ops-focus) / 0.5);

    --workspace-gutter: 1rem;
    /*
       Vertical rhythm on the same schedule as the horizontal inset. The
       gutter shrank to 1rem at 1366 while band gaps stayed a flat 12px, so a
       page read tighter sideways than it did downwards.
    */
    --workspace-band-gap: calc(var(--workspace-gutter) * 0.75);
    --workspace-sticky-offset: 0px;
    --module-tab-strip-height: 2.75rem;
    /* Raised and inset surfaces share the cool-grey material. */
    --surface-raised: var(--ops-surface-subtle);
  }

  .dark {
    color-scheme: dark;

    /* Cool charcoal clay keeps the same-material construction in dark mode.
       Lighter violet fills use dark ink; links keep their own AA text role. */
    --ops-canvas: 217.5 17.021% 18.431%;
    --ops-surface: 217.5 17.021% 18.431%;
    --ops-surface-subtle: 217.895 17.757% 20.98%;
    --ops-surface-muted: 218.182 17.46% 24.706%;
    --ops-surface-selected: 246 21.429% 27.451%;
    --ops-text-strong: 217.5 33.333% 95.294%;
    --ops-text: 216 29.412% 90%;
    --ops-text-muted: 214.615 20.313% 74.902%;
    --ops-border: 216.923 16.667% 30.588%;
    --ops-border-strong: 214.839 14.833% 40.98%;
    --ops-border-structural: 215 17.143% 58.824%;

    --ops-primary: 245 100% 81.176%;
    --ops-primary-hover: 245.385 100% 84.706%;
    --ops-primary-pressed: 245.714 80.153% 74.314%;
    --ops-primary-subtle: 242.222 20.93% 25.294%;
    --ops-primary-selected: 249.73 23.567% 30.784%;
    --ops-link: 246.176 100% 86.667%;
    --ops-focus: 245.676 100% 85.49%;
    --ops-on-primary: 247.5 29.268% 16.078%;
    --ops-scrim: rgb(0 0 0 / 0.62);

    /* Accessible edges remain visible against raised, selected and pressed
       surfaces rather than relying on low-contrast shadows alone. */
    --ops-control-border: 215 17.143% 58.824%;
    --ops-control-border-hover: 215.172 18.954% 70%;
    --ops-control-bg-hover: 218.182 17.46% 24.706%;
    --ops-control-bg-pressed: 217.5 17.143% 27.451%;

    --ops-danger-hover: 353.793 85.294% 86.667%;
    --ops-danger-pressed: 352.088 66.423% 73.137%;

    --ops-disabled-fg: 214.839 18.343% 66.863%;
    --ops-disabled-bg: 219 17.241% 22.745%;
    --ops-disabled-border: 216.774 15.271% 39.804%;

    --ops-sidebar: 217.5 17.021% 18.431%;
    --ops-sidebar-surface: 217.895 17.757% 20.98%;
    --ops-sidebar-hover: 218.182 17.46% 24.706%;
    --ops-sidebar-active: 249.73 23.567% 30.784%;
    --ops-sidebar-text: 216 29.412% 90%;
    --ops-sidebar-muted: 214.615 20.313% 74.902%;
    --ops-sidebar-border: 216.923 16.667% 30.588%;

    --ops-success: 149.231 47.561% 67.843%;
    --ops-success-subtle: 158.182 21.154% 20.392%;
    --ops-warning: 41.416 71.975% 69.216%;
    --ops-warning-subtle: 39 17.857% 21.961%;
    --ops-danger: 353.165 75.238% 79.412%;
    --ops-danger-subtle: 336.522 18.699% 24.118%;
    --ops-info: 201.136 66.667% 74.118%;
    --ops-info-subtle: 206.25 27.119% 23.137%;

    --background: var(--ops-canvas);
    --foreground: var(--ops-text-strong);
    --card: var(--ops-surface);
    --card-foreground: var(--ops-text-strong);
    --popover: var(--ops-surface);
    --popover-foreground: var(--ops-text-strong);
    --primary: var(--ops-primary);
    --primary-foreground: var(--ops-on-primary);
    --secondary: var(--ops-surface-muted);
    --secondary-foreground: var(--ops-text);
    --muted: var(--ops-surface-muted);
    --muted-foreground: var(--ops-text-muted);
    --accent: var(--ops-surface-muted);
    --accent-foreground: var(--ops-link);
    --destructive: var(--ops-danger);
    --destructive-foreground: var(--ops-on-primary);
    --success: var(--ops-success);
    --success-foreground: var(--ops-on-primary);
    --warning: var(--ops-warning);
    --warning-foreground: var(--ops-on-primary);
    --border: var(--ops-border);
    --input: var(--ops-control-border);
    --ring: var(--ops-focus);
    --scrollbar-track: 217.895 17.757% 20.98%;
    --scrollbar-thumb: 215 17.143% 58.824%;
    --sidebar: var(--ops-sidebar);
    --sidebar-foreground: var(--ops-sidebar-text);
    --sidebar-accent: var(--ops-link);
    --sidebar-border: var(--ops-sidebar-border);

    --elevation-panel:
      10px 10px 24px rgb(13 17 24 / 0.52),
      -10px -10px 24px rgb(67 78 96 / 0.3);
    --elevation-floating:
      12px 12px 28px rgb(10 14 20 / 0.62),
      -10px -10px 24px rgb(73 84 103 / 0.32);
    --elevation-overlay:
      18px 18px 42px rgb(8 11 16 / 0.7),
      -14px -14px 36px rgb(73 84 103 / 0.32);
    --elevation-control:
      4px 4px 9px rgb(13 17 24 / 0.55),
      -4px -4px 9px rgb(73 84 103 / 0.32);
    --elevation-control-hover:
      6px 6px 12px rgb(10 14 20 / 0.65),
      -6px -6px 12px rgb(79 91 111 / 0.36);
    --elevation-inset:
      inset 3px 3px 7px rgb(10 14 20 / 0.54),
      inset -3px -3px 7px rgb(73 84 103 / 0.27);
    --elevation-inset-deep:
      inset 5px 5px 10px rgb(10 14 20 / 0.62),
      inset -5px -5px 10px rgb(73 84 103 / 0.3);
    --elevation-pressed:
      inset 2px 2px 5px rgb(10 14 20 / 0.55),
      inset -2px -2px 5px rgb(73 84 103 / 0.25);
    --elevation-brand-bevel:
      inset 1px 1px 2px rgb(100 112 132 / 0.3),
      inset -1px -1px 2px rgb(10 14 20 / 0.5);
    --elevation-seam-start: 2px 0 4px -2px hsl(var(--foreground) / 0.25);
    --elevation-seam-end: -2px 0 4px -2px hsl(var(--foreground) / 0.25);
    --focus-ring-color: hsl(var(--ops-focus) / 0.42);
  }

  @media (max-width: 389px) {
    :root {
      --workspace-gutter: 0.75rem;
    }
  }

  @media (min-width: 1024px) and (min-height: 800px) {
    :root {
      --workspace-gutter: 1.5rem;
    }
  }
}

/* Operational motion vocabulary.

   List arrival and write acknowledgement are one-time state feedback. Controls
   may change transform and depth on direct interaction, but daily-use panels
   and dense table rows never acquire ambient motion or hover elevation.

   There is deliberately no pending vocabulary here. This codebase has no
   optimistic writes — every mutation seeds the cache in \`onSuccess\`, after the
   server confirmed — so no row is ever displayed in an unsettled state, and a
   pending style would have no caller.

   Two constraints shape the implementations below.

   Tình trạng colors are mirrored from the legacy system and are a product
   commitment, not a palette choice, so an acknowledgement may animate transform,
   opacity, and ring — never fill. \`ops-ack\` therefore pulses a ring around the
   chip and leaves its color alone.

   The list tables are grids whose row borders and hover tint live on the cells,
   not on \`<tr>\`, and a pinned cell paints an opaque background over its row. A
   row-level background wash would simply disappear behind the pinned columns,
   so \`ops-row-enter\` moves the row with transform and opacity, which composite
   above the cells' own paint regardless of pinning. */
@keyframes ops-row-enter {
  from {
    opacity: 0;
    transform: translateY(var(--motion-row-enter-shift));
  }
  to {
    opacity: 1;
    transform: none;
  }
}

/* Inset, not outset. The status chip sets \`overflow-hidden\` and sits in a table
   cell that clips, so an outset ring would be cut off on exactly the dense rows
   this is meant to be read in. An inset ring is drawn inside the chip's own box
   and cannot be clipped by an ancestor — and it matches the ring-inset the pill
   variant already carries. */
@keyframes ops-ack {
  0% {
    box-shadow: inset 0 0 0 0 var(--ops-ack-ring);
  }
  40% {
    box-shadow: inset 0 0 0 2px var(--ops-ack-ring);
  }
  100% {
    box-shadow: inset 0 0 0 0 hsl(var(--ops-focus) / 0);
  }
}

/* The row-index stagger is capped, so long pages settle together instead of
   cascading for seconds. The table supplies the per-row delay. */
[data-ops-row-enter] {
  animation: ops-row-enter var(--motion-duration-base)
    var(--motion-easing-standard) both;
  animation-delay: var(--ops-row-enter-delay, 0ms);
}

/* A committed change, acknowledged where the change actually happened. */
[data-ops-ack] {
  animation: ops-ack var(--motion-duration-ack) var(--motion-easing-standard) 1;
}

/* A horizontal scroller that still hides content past an edge fades that
   edge, so the cut chip reads as "more this way" rather than as the last one.
   The component measures and sets \`data-overflow-start\` / \`-end\`; nothing is
   masked without them, so a strip that fits (or wraps) keeps hard edges and
   its children's focus rings. Mask, not an overlay: it fades the chips over
   whatever surface the strip sits on without knowing that surface. */
.ops-scroll-fade[data-overflow-start],
.ops-scroll-fade[data-overflow-end] {
  --ops-scroll-fade-size: 2rem;
  --ops-scroll-fade-start: #000;
  --ops-scroll-fade-end: #000;
  -webkit-mask-image: linear-gradient(
    to right,
    var(--ops-scroll-fade-start),
    #000 var(--ops-scroll-fade-size),
    #000 calc(100% - var(--ops-scroll-fade-size)),
    var(--ops-scroll-fade-end)
  );
  mask-image: linear-gradient(
    to right,
    var(--ops-scroll-fade-start),
    #000 var(--ops-scroll-fade-size),
    #000 calc(100% - var(--ops-scroll-fade-size)),
    var(--ops-scroll-fade-end)
  );
}

.ops-scroll-fade[data-overflow-start] {
  --ops-scroll-fade-start: transparent;
}

.ops-scroll-fade[data-overflow-end] {
  --ops-scroll-fade-end: transparent;
}

/* Retain the existing fine-pointer sign-in stage while keeping its backdrop
   quiet and tied to the shared material. JS leaves both tilt variables at
   zero for touch and reduced-motion preferences. */
.ops-auth-stage {
  --auth-tilt-x: 0deg;
  --auth-tilt-y: 0deg;
  perspective: 1400px;
  perspective-origin: center;
}

.ops-auth-stage__layers {
  position: relative;
  transform-style: preserve-3d;
  transform: rotateX(var(--auth-tilt-x)) rotateY(var(--auth-tilt-y));
  transition: transform var(--motion-duration-base) var(--motion-easing-standard);
  will-change: transform;
}

/* A low-contrast neutral grid references the brand vent without competing
   with the sign-in form or turning the application canvas into decoration. */
.ops-auth-stage__backdrop {
  position: absolute;
  inset: -18% -12%;
  transform: translateZ(-120px) scale(1.12);
  background-image:
    radial-gradient(
      circle at center,
      hsl(var(--ops-primary) / 0.06),
      transparent 62%
    ),
    linear-gradient(hsl(var(--ops-border) / 0.35) 1px, transparent 1px),
    linear-gradient(90deg, hsl(var(--ops-border) / 0.35) 1px, transparent 1px);
  background-size:
    100% 100%,
    40px 40px,
    40px 40px;
  -webkit-mask-image: radial-gradient(
    ellipse at center,
    #000 38%,
    transparent 74%
  );
  mask-image: radial-gradient(ellipse at center, #000 38%, transparent 74%);
  pointer-events: none;
}

.ops-auth-stage__card {
  position: relative;
  transform: translateZ(48px);
}

/* Settles in from depth once, on the one screen where a first impression is the
   whole job. */
@keyframes ops-auth-settle {
  from {
    opacity: 0;
    transform: translateZ(-90px) rotateX(7deg);
  }
  to {
    opacity: 1;
    transform: translateZ(48px) rotateX(0deg);
  }
}

.ops-auth-stage__card[data-auth-settle] {
  animation: ops-auth-settle 620ms var(--motion-easing-standard) both;
}

/* Reduced motion removes movement, not feedback.

   The blanket rule below still collapses every transition and animation,
   because movement is what causes vestibular discomfort. But two indicators
   report system state rather than decorate it, and flattening them makes a
   loading screen indistinguishable from a broken one: a spinner frozen
   mid-rotation, and a skeleton that stops breathing and reads as an empty
   grey box. Those get an intentional alternative instead — the spinner trades
   rotation for an opacity pulse, so nothing moves and "working" still reads. */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto !important;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }

  .animate-spin {
    animation: ops-working-pulse 1.4s ease-in-out infinite !important;
  }

  /* Both are movement, and neither reports a state that persists: a row has
     finished arriving either way, and an acknowledgement that has to be seen
     moving is the wrong signal for someone who asked not to see movement. */
  [data-ops-row-enter],
  [data-ops-ack],
  .ops-auth-stage__card[data-auth-settle] {
    animation: none !important;
  }

  /* The stage is already flat — JS never sets a tilt when motion is reduced —
     but drop the easing too so nothing eases back from a stale value. */
  .ops-auth-stage__layers {
    transition: none !important;
  }

  .animate-pulse {
    animation-duration: 1.8s !important;
    animation-iteration-count: infinite !important;
  }
}

@keyframes ops-working-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.45;
  }
}

@media print {
  [data-print-hide],
  [data-app-topbar],
  [data-app-sidebar],
  [data-module-tab-strip],
  footer {
    display: none !important;
  }

  body {
    background: #fff !important;
    color: #000 !important;
  }

  html,
  body,
  #root,
  [data-app-shell] {
    height: auto !important;
    min-height: 0 !important;
    overflow: visible !important;
  }

  main,
  [data-app-scroll-container] {
    height: auto !important;
    overflow: visible !important;
    padding: 0 !important;
  }

  [data-page-workspace-tabs],
  [data-page-workspace-header],
  [data-page-header] {
    position: static !important;
  }

  /* Screen results have one bounded reader. Paper gets that same semantic
     table and every row/total, independent of its former scroll position. */
  [data-results-scroll-surface],
  [data-results-scroll-viewport] {
    display: block !important;
    position: static !important;
    height: auto !important;
    min-height: 0 !important;
    max-height: none !important;
    overflow: visible !important;
    scroll-padding: 0 !important;
  }

  [data-results-scroll-viewport] :is(thead, tfoot, th, td) {
    position: static !important;
    inset: auto !important;
  }

  [data-results-scroll-viewport] [data-table-cell-clamp] {
    max-height: none !important;
    overflow: visible !important;
  }

  .print-area {
    border: none !important;
    box-shadow: none !important;
  }

  /* Biên nhận and Excel export are business obligations. Motion has nothing to
     say on paper, and a row caught mid-entrance would print faded. */
  *,
  *::before,
  *::after {
    /* Screen depth never becomes toner or obscures a printed document. */
    box-shadow: none !important;
    text-shadow: none !important;
    animation: none !important;
    transition: none !important;
  }

  @page {
    margin: 1.5cm;
  }
}
`,a=[`--ops-canvas`,`--ops-surface`,`--surface-raised`,`--ops-surface-muted`,`--ops-surface-selected`];function o(e,t){let n=e.match(t);if(!n||n.index===void 0)throw Error(`Token sheet has no ${t.source} block`);let r=n.index+n[0].length,i=e.indexOf(`}`,r);if(i===-1)throw Error(`Unclosed ${t.source} block`);return e.slice(r,i)}function s(e){let t={};for(let[,n,r]of e.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g))t[n]=r.trim();return t}var c=/^([\d.]+)\s+([\d.]+)%\s+([\d.]+)%$/,l=/^var\((--[\w-]+)\)$/;function u(e){let t={};for(let n of Object.keys(e)){let r=e[n];for(let t=0;t<8;t+=1){let t=r.match(l);if(!t||e[t[1]]===void 0)break;r=e[t[1]]}let i=r.match(c);i&&(t[n]={hue:Number(i[1]),saturation:Number(i[2]),lightness:Number(i[3])})}return t}function d(e){let t=e.replace(/\/\*[\s\S]*?\*\//g,``),n=s(o(t,/(?:^|\n)\s*:root\s*\{/)),r={...n,...s(o(t,/(?:^|\n)\s*\.dark\s*\{/))};return{light:u(n),dark:u(r)}}function f(e,t,n){let r=e[t][n];if(!r)throw Error(`Token ${n} is not an HSL tuple in ${t}`);return r}var p=d(i),m=.14,h=.22,g=92;function _(e){let t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4}function v([e,t,n]){return .2126*_(e)+.7152*_(t)+.0722*_(n)}function y(e,t){let[n,r]=[v(e),v(t)].sort((e,t)=>t-e);return(n+.05)/(r+.05)}function b(e){return[1,3,5].map(t=>parseInt(e.slice(t,t+2),16))}function x(e,t,n){return e.map((e,r)=>Math.round(e*t+n[r]*(1-t)))}function S([e,t,n]){let[r,i,a]=[e/255,t/255,n/255],o=Math.max(r,i,a),s=Math.min(r,i,a),c=(o+s)/2,l=o-s;if(l===0)return[0,0,c*100];let u=c>.5?l/(2-o-s):l/(o+s);return[o===r?((i-a)/l+(i<a?6:0))*60:o===i?((a-r)/l+2)*60:((r-i)/l+4)*60,u*100,c*100]}function C(e,t,n){let r=t/100,i=n/100,a=r*Math.min(i,1-i),o=t=>{let n=(t+e/30)%12;return i-a*Math.max(-1,Math.min(n-3,Math.min(9-n,1)))};return[o(0)*255,o(8)*255,o(4)*255].map(Math.round)}function w([e,t,n]){return`#${[e,t,n].map(e=>Math.round(e).toString(16).padStart(2,`0`)).join(``)}`}function T([e,t,n],r){return`rgb(${Math.round(e)} ${Math.round(t)} ${Math.round(n)} / ${r})`}function E(e,t,n,r){let[i,a]=S(e),o=Math.min(a,g),s=n===`darker`?-.25:.25,c=n===`darker`?45:55;for(let e=0;e<180;e+=1,c+=s){let e=C(i,o,c);if(Math.min(...t.map(t=>y(e,t)))>=r)return e}return n===`darker`?[10,14,24]:[248,250,252]}function D(e){return a.map(t=>{let{hue:n,saturation:r,lightness:i}=f(p,e,t);return C(n,r,i)})}var O={light:D(`light`),dark:D(`dark`)};function k(e){let t=b(e),n=(e,n)=>[...O[e],...O[e].map(e=>x(t,n,e))],r=n(`light`,m),i=n(`dark`,h);return{hex:e,tintLight:T(t,m),tintDark:T(t,h),inkLight:w(E(t,r,`darker`,4.6499999999999995)),inkDark:w(E(t,i,`lighter`,4.6499999999999995)),edgeLight:T(t,.35),edgeDark:w(E(t,i,`lighter`,3))}}var A=Object.fromEntries(r.map(e=>[e.id,k(e.hex)]));function j(e){let t=A[e];return{"--status-hex":t.hex,"--status-tint-light":t.tintLight,"--status-tint-dark":t.tintDark,"--status-ink-light":t.inkLight,"--status-ink-dark":t.inkDark,"--status-edge-light":t.edgeLight,"--status-edge-dark":t.edgeDark}}var M=t();function N({status:t,variant:r=`pill`,acknowledged:i=!1,className:a}){let o=n(t),s={"data-status-tone":``,"data-status-id":t,"data-status-variant":r,"data-ops-ack":i||void 0,style:j(t)};return r===`table`?(0,M.jsxs)(`div`,{...s,className:e(`flex min-h-11 items-stretch gap-2 overflow-hidden rounded-md bg-status-tint pr-2 text-left`,a),children:[(0,M.jsx)(`span`,{className:`w-1 shrink-0 bg-status-ink`,"aria-hidden":`true`}),(0,M.jsx)(`span`,{className:`self-center text-xs font-semibold leading-tight text-status-ink [overflow-wrap:normal]`,children:o})]}):(0,M.jsxs)(`span`,{...s,className:e(`inline-flex items-center gap-1.5 overflow-hidden rounded-md bg-status-tint px-2.5 py-0.5 text-xs font-medium text-status-ink ring-1 ring-inset ring-status-edge`,a),children:[(0,M.jsx)(`span`,{className:`size-1.5 shrink-0 rounded-full bg-status-ink`,"aria-hidden":`true`}),o]})}export{j as n,N as t};