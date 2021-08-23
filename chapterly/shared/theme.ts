import { DefaultTheme } from "styled-components";

const d: { a?: { d: string } } = {};

console.log(d.a!.d);

const colors = {
  salmon0: "#FFFBFB",
  salmon1: "#FEF4F4",
  salmon2: "#FCDCDC",
  salmon3: "#FF8684",
  salmon4: "#FF5E5B",
  salmon5: "#E04444",
  salmon6: "#BC3636",
  salmon7: "#FFE1E1",
  grey: "#F3F3F3",
  grey1: "#F9F9FC",
  grey2: "#F3F4F8",
  grey3: "#DADEE9",
  grey4: "#B1B4C2",
  grey5: "#8B8EA1",
  grey6: "#676B7E",
  grey7: "#323446",
  blue1: "#6088F9",
  blue2: "#264FC4",
  blue3: "#14286B",
  teal1: "#B1F0E9",
  teal2: "#43DECD",
  teal3: "#00D3BB",
  aquamarine: "#00d3bb",
  facebookBlue: "#3b5998",
  twitterBlue: "#00aced",
  white: "#ffffff",
  black: "#32343c",
};

const typography = {
  size0: "0.6875rem", // 11px
  size1: "0.75rem", // 12px
  size2: "0.875rem", // 14px
  size3: "1rem", // 16px usual default browser font size (html font size set to 100% in baseStyles)
  size4: "1.125rem", // 18px
  size5: "1.375rem", // 22px
  size6: "1.75rem", // 28px
  size7: "2.25rem", // 36px
  size8: "3rem", // 48px
  weight1: 500,
  weight2: 700,
  lineHeight1: "1em",
  lineHeight2: "1.4em",
  color1: colors.grey3,
  color2: colors.grey6,
  color3: colors.grey7,
  color4: colors.salmon5,
  color5: colors.blue3,
  color6: colors.grey4,
};

export enum Themes {
  THEME1 = "THEME1",
  THEME2 = "THEME2",
  THEME3 = "THEME3",
}

export interface IThemeInterface {
  colors: {
    [key: string]: string;
  };
  typography: {
    size0: string;
    size1: string;
    size2: string;
    size3: string;
    size4: string;
    size5: string;
    size6: string;
    size7: string;
    size8: string;
    weight1: number;
    weight2: number;
    lineHeight1: string;
    lineHeight2: string;
    color1: string;
    color2: string;
    color3: string;
    color4: string;
    color5: string;
    color6: string;
  };
  bookThemes: {
    [key in keyof typeof Themes]: {
      [id in keyof typeof BookParts]: {
        fontFamily: FontFamilies | string;
        fontSize: string;
        fontWeight?: FontStyles | string;
        fontStyle?: FontStyles | string;
        letterSpacing?: string;
        lineHeight?: any;
      };
    };
  };
}

export enum BookParts {
  bookTitle = "bookTitle",
  bookSubtitle = "bookSubtitle",
  authorName = "authorName",
  sectionTitle = "sectionTitle",
  frontMatterPageTitle = "frontMatterPageTitle",
  tocSectionHeadings = "tocSectionHeadings",
  tocContents = "tocContents",
  dedicationEpigraph = "dedicationEpigraph",
  chapterNumber = "chapterNumber",
  chapterTitle = "chapterTitle",
  bodyContent = "bodyContent",
  heading1 = "heading1",
  heading2 = "heading2",
  heading3 = "heading3",
  list = "list",
  quote = "quote",
  dropcap = "dropcap",
  sceneBreak = "sceneBreak",
}

export enum FontStyles {
  italic = "italic",
  bold = "bold",
  normal = "normal",
}

export enum FontFamilies {
  nunitoSans = "Nunito Sans",
  notoSerif = "Noto Serif",
  playfairDisplay = "Playfair Display",
  openSans = "Open Sans",
  robotoCondensed = "Roboto Condensed",
}

const bookThemes = {
  [Themes.THEME1]: {
    [BookParts.bookTitle]: {
      fontFamily: FontFamilies.nunitoSans,
      fontSize: "4rem",
      fontStyle: FontStyles.normal,
      fontWeight: FontStyles.bold,
    },
    [BookParts.bookSubtitle]: {
      fontFamily: FontFamilies.notoSerif,
      fontSize: "1.5rem",
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.italic,
    },
    [BookParts.authorName]: {
      fontFamily: FontFamilies.notoSerif,
      fontSize: typography.size2,
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.normal,
    },
    [BookParts.sectionTitle]: {
      fontFamily: FontFamilies.notoSerif,
      fontSize: typography.size4,
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.italic,
      letterSpacing: "4.5px",
    },
    [BookParts.frontMatterPageTitle]: {
      fontFamily: FontFamilies.nunitoSans,
      fontSize: "2rem",
      fontWeight: FontStyles.bold,
      fontStyle: FontStyles.normal,
      letterSpacing: "-0.36px",
    },
    [BookParts.tocSectionHeadings]: {
      fontFamily: FontFamilies.nunitoSans,
      fontSize: typography.size4,
      fontWeight: FontStyles.bold,
      fontStyle: FontStyles.normal,
    },
    [BookParts.tocContents]: {
      fontFamily: FontFamilies.notoSerif,
      fontSize: typography.size3,
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.normal,
      lineHeight: "2.6875rem",
    },
    [BookParts.dedicationEpigraph]: {
      fontFamily: FontFamilies.notoSerif,
      fontSize: typography.size3,
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.italic,
    },
    [BookParts.chapterNumber]: {
      fontFamily: FontFamilies.notoSerif,
      fontSize: typography.size4,
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.italic,
      letterSpacing: "4.5px",
      lineHeight: "3.8125rem",
    },
    [BookParts.chapterTitle]: {
      fontFamily: FontFamilies.nunitoSans,
      fontSize: typography.size7,
      fontWeight: FontStyles.bold,
      fontStyle: FontStyles.normal,
    },
    [BookParts.bodyContent]: {
      fontFamily: FontFamilies.notoSerif,
      fontSize: typography.size3,
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.normal,
      lineHeight: "30px",
      letterSpacing: "-0.2px",
    },
    [BookParts.heading1]: {
      fontFamily: FontFamilies.nunitoSans,
      fontSize: typography.size6,
      fontWeight: FontStyles.bold,
      fontStyle: FontStyles.normal,
    },
    [BookParts.heading2]: {
      fontFamily: FontFamilies.nunitoSans,
      fontSize: typography.size5,
      fontWeight: FontStyles.bold,
      fontStyle: FontStyles.normal,
    },
    [BookParts.heading3]: {
      fontFamily: FontFamilies.nunitoSans,
      fontSize: typography.size4,
      fontWeight: FontStyles.bold,
      fontStyle: FontStyles.normal,
    },
    [BookParts.list]: {
      fontFamily: FontFamilies.notoSerif,
      fontSize: typography.size3,
      fontWeight: FontStyles.normal,
      lineHeight: "30px",
      letterSpacing: "-0,2px",
    },
    [BookParts.quote]: {
      fontFamily: FontFamilies.notoSerif,
      fontSize: "1.25rem",
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.italic,
      lineHeight: "38px",
    },
    [BookParts.dropcap]: {
      fontFamily: FontFamilies.notoSerif,
      fontSize: "3.8rem",
      lineHeight: "3.7rem",
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.normal,
    },
    [BookParts.sceneBreak]: {
      fontFamily: FontFamilies.notoSerif,
      fontSize: typography.size3,
      fontWeight: "normal",
      letterSpacing: "5px",
      lineHeight: "34px",
    },
  },
  // THEME 2 -------------------------------
  [Themes.THEME2]: {
    [BookParts.bookTitle]: {
      fontFamily: FontFamilies.playfairDisplay,
      fontSize: "4rem",
      fontStyle: FontStyles.italic,
      fontWeight: FontStyles.bold,
    },
    [BookParts.bookSubtitle]: {
      fontFamily: FontFamilies.playfairDisplay,
      fontSize: typography.size4,
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.italic,
    },
    [BookParts.authorName]: {
      fontFamily: FontFamilies.playfairDisplay,
      fontSize: typography.size3,
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.italic,
    },
    [BookParts.sectionTitle]: {
      fontFamily: FontFamilies.playfairDisplay,
      fontSize: typography.size4,
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.normal,
      letterSpacing: "4.5px",
    },
    [BookParts.frontMatterPageTitle]: {
      fontFamily: FontFamilies.playfairDisplay,
      fontSize: typography.size7,
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.italic,
    },
    [BookParts.tocSectionHeadings]: {
      fontFamily: FontFamilies.playfairDisplay,
      fontSize: typography.size4,
      fontWeight: FontStyles.bold,
      fontStyle: FontStyles.normal,
    },
    [BookParts.tocContents]: {
      fontFamily: FontFamilies.playfairDisplay,
      fontSize: typography.size3,
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.normal,
      lineHeight: "2.625rem",
    },
    [BookParts.dedicationEpigraph]: {
      fontFamily: FontFamilies.playfairDisplay,
      fontSize: typography.size3,
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.italic,
    },
    [BookParts.chapterNumber]: {
      fontFamily: FontFamilies.playfairDisplay,
      fontSize: typography.size4,
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.normal,
      letterSpacing: "4.5px",
    },
    [BookParts.chapterTitle]: {
      fontFamily: FontFamilies.playfairDisplay,
      fontSize: typography.size8,
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.italic,
    },
    [BookParts.bodyContent]: {
      fontFamily: FontFamilies.playfairDisplay,
      fontSize: typography.size3,
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.normal,
      lineHeight: "1.875rem",
    },
    [BookParts.heading1]: {
      fontFamily: FontFamilies.playfairDisplay,
      fontSize: typography.size6,
      fontWeight: FontStyles.bold,
      fontStyle: FontStyles.normal,
    },
    [BookParts.heading2]: {
      fontFamily: FontFamilies.playfairDisplay,
      fontSize: typography.size5,
      fontWeight: FontStyles.bold,
      fontStyle: FontStyles.normal,
    },
    [BookParts.heading3]: {
      fontFamily: FontFamilies.playfairDisplay,
      fontSize: typography.size4,
      fontWeight: FontStyles.bold,
      fontStyle: FontStyles.normal,
    },
    [BookParts.list]: {
      fontFamily: FontFamilies.notoSerif,
      fontSize: typography.size3,
      fontWeight: FontStyles.normal,
      lineHeight: "30px",
      letterSpacing: "-0,2px",
    },
    [BookParts.quote]: {
      fontFamily: FontFamilies.playfairDisplay,
      fontSize: typography.size4,
      fontWeight: FontStyles.bold,
      fontStyle: FontStyles.italic,
      lineHeight: "38px",
    },
    [BookParts.dropcap]: {
      fontFamily: FontFamilies.playfairDisplay,
      fontSize: "3.7rem",
      lineHeight: "2.6rem",
      fontWeight: FontStyles.bold,
      fontStyle: FontStyles.normal,
    },
    [BookParts.sceneBreak]: {
      fontFamily: FontFamilies.notoSerif,
      fontSize: typography.size3,
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.normal,
      letterSpacing: "5px",
      lineHeight: "34px",
    },
  },
  // THEME 3 -------------------------------
  [Themes.THEME3]: {
    [BookParts.bookTitle]: {
      fontFamily: FontFamilies.robotoCondensed,
      fontSize: "5.125rem",
      fontStyle: "normal",
      fontWeight: "bold",
    },
    [BookParts.bookSubtitle]: {
      fontFamily: FontFamilies.robotoCondensed,
      fontSize: typography.size5,
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.normal,
      lineHeight: "24px",
    },
    [BookParts.authorName]: {
      fontFamily: FontFamilies.robotoCondensed,
      fontSize: "1.875rem",
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.normal,
    },
    [BookParts.sectionTitle]: {
      fontFamily: FontFamilies.robotoCondensed,
      fontSize: typography.size5,
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.normal,
      letterSpacing: "1.83px",
    },
    [BookParts.frontMatterPageTitle]: {
      fontFamily: FontFamilies.robotoCondensed,
      fontSize: typography.size8,
      fontWeight: FontStyles.bold,
      fontStyle: FontStyles.normal,
      letterSpacing: "-0.53",
    },
    [BookParts.tocSectionHeadings]: {
      fontFamily: FontFamilies.robotoCondensed,
      fontSize: typography.size4,
      fontWeight: FontStyles.bold,
      fontStyle: FontStyles.normal,
    },
    [BookParts.tocContents]: {
      fontFamily: FontFamilies.openSans,
      fontSize: typography.size3,
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.normal,
      lineHeight: "2.6875rem",
    },
    [BookParts.dedicationEpigraph]: {
      fontFamily: FontFamilies.openSans,
      fontSize: typography.size3,
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.italic,
      lineHeight: "32.4px",
    },
    [BookParts.chapterNumber]: {
      fontFamily: FontFamilies.robotoCondensed,
      fontSize: typography.size4,
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.normal,
      letterSpacing: "1.5px",
    },
    [BookParts.chapterTitle]: {
      fontFamily: FontFamilies.robotoCondensed,
      fontSize: "4rem",
      fontWeight: FontStyles.bold,
      fontStyle: FontStyles.normal,
      lineHeight: "3.8125rem",
      letterSpacing: "-2px",
    },
    [BookParts.bodyContent]: {
      fontFamily: FontFamilies.openSans,
      fontSize: typography.size3,
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.normal,
      lineHeight: "1.875rem",
      letterSpacing: "-0.2px",
    },
    [BookParts.heading1]: {
      fontFamily: FontFamilies.robotoCondensed,
      fontSize: typography.size6,
      fontWeight: FontStyles.bold,
      fontStyle: FontStyles.normal,
    },
    [BookParts.heading2]: {
      fontFamily: FontFamilies.robotoCondensed,
      fontSize: typography.size5,
      fontWeight: FontStyles.bold,
      fontStyle: FontStyles.normal,
    },
    [BookParts.heading3]: {
      fontFamily: FontFamilies.robotoCondensed,
      fontSize: typography.size4,
      fontWeight: FontStyles.bold,
      fontStyle: FontStyles.normal,
    },
    [BookParts.list]: {
      fontFamily: FontFamilies.openSans,
      fontSize: typography.size3,
      fontWeight: FontStyles.normal,
      lineHeight: "1.875rem",
      letterSpacing: "-0,2px",
    },
    [BookParts.quote]: {
      fontFamily: FontFamilies.openSans,
      fontSize: typography.size4,
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.italic,
      lineHeight: "2.375rem",
    },
    [BookParts.dropcap]: {
      fontFamily: FontFamilies.robotoCondensed,
      fontSize: "4rem",
      fontWeight: FontStyles.bold,
      fontStyle: FontStyles.normal,
      lineHeight: "4rem",
    },
    [BookParts.sceneBreak]: {
      fontFamily: FontFamilies.notoSerif,
      fontSize: typography.size3,
      fontWeight: FontStyles.normal,
      fontStyle: FontStyles.normal,
      letterSpacing: "5px",
      lineHeight: "2.125rem",
    },
  },
};

export default {
  colors,
  typography,
  bookThemes,
} as DefaultTheme;
