import MediaQuery from "./media-query";

class PageSizeUtil {
  static getPageSize() {
    let pageIsLarge = MediaQuery("(min-width: 1200px)");
    let pageIsWide = MediaQuery("(min-width: 600px) and (max-width: 1199px)");
    let pageIsMobile = MediaQuery("(max-width : 599px)");

    if (pageIsLarge) return "large";
    if (pageIsWide) return "wide";
    if (pageIsMobile) return "mobile";
  }

  static getPageSizeFromWindow(width) {
    if (width >= 1200) return "large";
    if (width > 599 && width < 1200) return "wide";
    if (width < 600) return "mobile";
  }
}

export default PageSizeUtil;
