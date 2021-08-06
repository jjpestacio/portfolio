// Forked from https://theme.hackclub.com/
const theme = {
  breakpoints: ["32em", "48em", "64em", "96em", "128em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 16, 20, 24, 32, 48, 64, 96, 128, 160, 192],
  initialColorModeName: "light",
  //useColorSchemeMediaQuery: true,
  colors: {
    darker: "#121217",
    dark: "#17171d",
    darkless: "#252429",
    black: "#1f2d3d",
    steel: "#273444",
    slate: "#3c4858",
    muted: "#8492a6",
    smoke: "#e0e6ed",
    snow: "#f9fafc",
    white: "#ffffff",
    red: "#ec3750",
    orange: "#ff8c37",
    yellow: "#f1c40f",
    green: "#33d6a6",
    cyan: "#5bc0de",
    blue: "#338eda",
    purple: "#a633d6",
    twitter: "#1da1f2",
    facebook: "#3b5998",
    instagram: "#e1306c",
    text: "#1f2d3d",
    background: "#F4F1DE",
    header: "#EBE5C2",
    elevated: "#ffffff",
    sheet: "#f9fafc",
    sunken: "#e0e6ed",
    border: "#e0e6ed",
    placeholder: "#8492a6",
    secondary: "#3c4858",
    primary: "#ec3750",
    accent: "#338eda",
    modes: {
      dark: {
        text: "#ffffff",
        background: "#17171d",
        elevated: "#252429",
        sheet: "#252429",
        sunken: "#121217",
        border: "#252429",
        placeholder: "#3c4858",
        secondary: "#8492a6",
        muted: "#8492a6",
        accent: "#5bc0de",
      },
    },
  },
  fonts: {
    heading:
      '"Phantom Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body: '"Phantom Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    monospace: '"SF Mono", "Roboto Mono", Menlo, Consolas, monospace',
  },
  lineHeights: {
    limit: 0.875,
    title: 1,
    heading: 1.125,
    subheading: 1.25,
    caption: 1.375,
    body: 1.5,
  },
  fontWeights: {
    body: 400,
    bold: 700,
    heading: 700,
  },
  letterSpacings: {
    title: "-0.009em",
    headline: "0.009em",
  },
  sizes: {
    // TODO
  },
  radii: {
    small: 4,
    default: 8,
    extra: 12,
    ultra: 16,
    circle: 99999,
  },
  shadows: {
    text: "0 1px 2px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.125)",
    small: "0 1px 2px rgba(0, 0, 0, 0.0625), 0 2px 4px rgba(0, 0, 0, 0.0625)",
    card: "0 4px 8px rgba(0, 0, 0, 0.125)",
    elevated:
      "0 1px 2px rgba(0, 0, 0, 0.0625), 0 8px 12px rgba(0, 0, 0, 0.125)",
  },
  text: {
    heading: {
      fontWeight: "bold",
      lineHeight: "heading",
      mt: 0,
      mb: 0,
    },
    ultratitle: {
      fontSize: [5, 6, 7],
      lineHeight: "limit",
      fontWeight: "bold",
      letterSpacing: "title",
    },
    title: {
      fontSize: [4, 5, 6],
      fontWeight: "bold",
      letterSpacing: "title",
      lineHeight: "title",
    },
    subtitle: {
      mt: 3,
      fontSize: [2, 3],
      fontWeight: "body",
      letterSpacing: "headline",
      lineHeight: "subheading",
    },
    headline: {
      variant: "text.heading",
      letterSpacing: "headline",
      lineHeight: "heading",
      fontSize: 4,
      mt: 3,
      mb: 3,
    },
    subheadline: {
      variant: "text.heading",
      letterSpacing: "headline",
      fontSize: 2,
      mt: 0,
      mb: 3,
    },
    eyebrow: {
      color: "muted",
      fontSize: [3, 4],
      fontWeight: "heading",
      letterSpacing: "headline",
      lineHeight: "subheading",
      textTransform: "uppercase",
      mt: 0,
      mb: 2,
    },
    lead: {
      fontSize: [2, 3],
      my: [2, 3],
    },
    caption: {
      color: "muted",
      fontWeight: "medium",
      letterSpacing: "headline",
      lineHeight: "caption",
    },
  },
  alerts: {
    primary: {
      borderRadius: "default",
      bg: "orange",
      color: "background",
      fontWeight: "body",
    },
  },
  badges: {
    pill: {
      borderRadius: "circle",
      px: 3,
      py: 1,
      fontSize: 1,
    },
    outline: {
      variant: "badges.pill",
      bg: "transparent",
      border: "1px solid",
      borderColor: "currentColor",
      fontWeight: "body",
    },
  },
  buttons: {
    primary: {
      cursor: "pointer",
      fontFamily: "inherit",
      fontWeight: "bold",
      borderRadius: "circle",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "card",
      letterSpacing: "headline",
      WebkitTapHighlightColor: "transparent",
      transition: "transform .125s ease-in-out, box-shadow .125s ease-in-out",
      ":focus,:hover": {
        boxShadow: "elevated",
        transform: "scale(1.0625)",
      },
      svg: {
        ml: -1,
        mr: 2,
      },
    },
    lg: {
      variant: "buttons.primary",
      fontSize: 3,
      lineHeight: "title",
      px: 4,
      py: 3,
    },
    outline: {
      variant: "buttons.primary",
      bg: "transparent",
      color: "primary",
      border: "2px solid currentColor",
    },
    outlineLg: {
      variant: "buttons.primary",
      bg: "transparent",
      color: "primary",
      border: "2px solid currentColor",
      lineHeight: "title",
      fontSize: 3,
      px: 4,
      py: 3,
    },
    cta: {
      variant: "buttons.primary",
      fontSize: 2,
    },
    ctaLg: {
      variant: "buttons.primary",
      lineHeight: "title",
      fontSize: 3,
      px: 4,
      py: 3,
    },
  },
  cards: {
    primary: {
      bg: "elevated",
      color: "text",
      p: [3, 4],
      borderRadius: "extra",
      boxShadow: "card",
      overflow: "hidden",
    },
    sunken: {
      bg: "sunken",
      p: [3, 4],
      borderRadius: "extra",
    },
    interactive: {
      variant: "cards.primary",
      textDecoration: "none",
      WebkitTapHighlightColor: "transparent",
      transition: "transform .125s ease-in-out, box-shadow .125s ease-in-out",
      ":hover,:focus": {
        transform: "scale(1.0625)",
        boxShadow: "elevated",
      },
    },
    translucent: {
      backgroundColor: "rgba(255, 255, 255, 0.98)",
      color: "text",
      boxShadow: "none",
      "@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)": {
        backgroundColor: "rgba(255, 255, 255, 0.75)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
      },
      "@media (prefers-reduced-transparency: reduce)": {
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
      },
    },
    translucentDark: {
      backgroundColor: "rgba(0, 0, 0, 0.875)",
      color: "white",
      boxShadow: "none",
      "@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)": {
        backgroundColor: "rgba(0, 0, 0, 0.625)",
        backdropFilter: "saturate(180%) blur(16px)",
        WebkitBackdropFilter: "saturate(180%) blur(16px)",
      },
      "@media (prefers-reduced-transparency: reduce)": {
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
      },
    },
  },
  forms: {
    input: {
      bg: "elevated",
      color: "text",
      fontFamily: "inherit",
      borderRadius: "base",
      border: 0,
      "::-webkit-input-placeholder": {
        color: "placeholder",
      },
      "::-moz-placeholder": {
        color: "placeholder",
      },
      ":-ms-input-placeholder": {
        color: "placeholder",
      },
      '&[type="search"]::-webkit-search-decoration': {
        display: "none",
      },
    },
    textarea: {
      variant: "forms.input",
    },
    select: {
      variant: "forms.input",
    },
    label: {
      color: "text",
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
      lineHeight: "caption",
      fontSize: 2,
    },
    labelHoriz: {
      color: "text",
      display: "flex",
      alignItems: "center",
      textAlign: "left",
      lineHeight: "caption",
      fontSize: 2,
      svg: {
        color: "muted",
      },
    },
    slider: {
      color: "primary",
    },
    hidden: {
      position: "absolute",
      height: "1px",
      width: "1px",
      overflow: "hidden",
      clip: "rect(1px, 1px, 1px, 1px)",
      whiteSpace: "nowrap",
    },
  },
  grids: {
    // TODO: make header resize
    root: {
      gridGap: "2px",
      //height: "100%",
      width: "100%",
    },
    layout: {
      variant: "grids.root",
      gridTemplateColumns: "1fr 4fr 1fr",
      gridTemplateRows: "max-content minmax(0, 100%) max-content",
      height: "100vh", // TODO: y u no work
    },
    header: {
      variant: "grids.root",
      backgroundColor: "header",
      gridTemplateColumns: "1fr 4fr minmax(20px, 6fr) 8fr",
      gridTemplateRows: "1fr",
    },
    footer: {
      variant: "grids.root",
      backgroundColor: "header",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr",
    },
    sidebar: {
      variant: "grids.root",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto",
    },
    content: {
      variant: "grids.root",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "auto auto auto",
    },
    social: {
      variant: "grids.root",
      gridTemplateColumns: "repeat(auto-fit, minmax(32px, 1fr))",
      //gridTemplateRows: "1fr",
    },
  },
  boxes: {
    root: {
      border: "solid",
      borderColor: "yellow",
    },
    default: {
      variant: "boxes.root",
    },
    page: {
      variant: "boxes.root",
      border: "solid",
      borderColor: "orange",
      maxHeight: "100%",
      overflow: "auto",
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "red", // TODO: y u no work
      },
    },
  },
  flex: {
    center: {
      border: "solid",
      borderColor: "green",
      justifyContent: "space-evenly",
      alignItems: "center",
      height: "100%",
      width: "100%",
    },
  },
  lists: {
    root: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    navigation: {
      variant: "lists.root",
      listStyleType: "none",
      items: {
        //display: "inherit",
        //pr: "2ch",
      },
    },
    sidebar: {
      variant: "lists.root",
      display: "block",
      listStyleType: "none",
      items: {
        display: "inherit",
        pr: "2ch",
      },
    },
  },
  images: {
    root: {},
    avatar: {
      borderRadius: "circle",
    },
    content: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "75%",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      color: "text",
      backgroundColor: "background",
      margin: 0,
      maxHeight: "100vh",
      height: "100vh",
      textRendering: "optimizeLegibility",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      "*::-webkit-scrollbar-thumb": {
        // TODO: y u no work
        backgroundColor: "red",
        outline: "1px solid slategrey",
      },
    },
    h1: {
      variant: "text.heading",
      fontSize: 5,
    },
    h2: {
      variant: "text.heading",
      fontSize: 4,
    },
    h3: {
      variant: "text.heading",
      fontSize: 3,
    },
    h4: {
      variant: "text.heading",
      fontSize: 2,
    },
    h5: {
      variant: "text.heading",
      fontSize: 1,
    },
    h6: {
      variant: "text.heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontWeight: "body",
      lineHeight: "body",
      my: 3,
    },
    img: {
      maxWidth: "100%",
    },
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "border",
    },
    a: {
      // TODO: style links
      color: "primary",
      textDecoration: "underline",
      textUnderlinePosition: "under",
      ":focus,:hover": {
        textDecorationStyle: "wavy",
      },
    },
    pre: {
      fontFamily: "monospace",
      fontSize: 1,
      p: 3,
      color: "text",
      bg: "sunken",
      overflow: "auto",
      borderRadius: "default",
      code: {
        color: "inherit",
        mx: 0,
        ".comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url":
          {
            color: "muted",
          },
        ".comment": {
          fontStyle: "italic",
        },
        ".property, .tag, .boolean, .number, .constant, .symbol, .deleted, .function, .class-name, .regex, .important, .variable":
          {
            color: "red",
          },
        ".atrule, .attr-value, .keyword": {
          color: "blue",
        },
        ".selector, .attr-name, .string, .char, .builtin, .inserted": {
          color: "orange",
        },
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
      color: "accent",
      bg: "sunken",
      borderRadius: "small",
      mx: 1,
      px: 1,
    },
    "p > code, li > code": {
      color: "accent",
      fontSize: 1,
    },
    li: {
      my: 2,
    },
    table: {
      width: "100%",
      my: 4,
      borderCollapse: "separate",
      borderSpacing: 0,
      "th,td": {
        textAlign: "left",
        py: "4px",
        pr: "4px",
        pl: 0,
        borderColor: "border",
        borderBottomStyle: "solid",
      },
    },
    th: {
      verticalAlign: "bottom",
      borderBottomWidth: "2px",
    },
    td: {
      verticalAlign: "top",
      borderBottomWidth: "1px",
    },
  },
  util: {
    motion: "@media (prefers-reduced-motion: no-preference)",
    reduceMotion: "@media (prefers-reduced-motion: reduce)",
    reduceTransparency: "@media (prefers-reduced-transparency: reduce)",
    supportsClipText: "@supports (-webkit-background-clip: text)",
    supportsBackdrop:
      "@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)",
  },
}

export default theme
