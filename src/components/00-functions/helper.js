import Margins from "../00-style/margins";

export function fillHeight(screenSize,headerHeight,buttonHeight) {

  if(screenSize==='desktop'){

        const height = `100vh - ${(((Margins.desktop.vertical * 2) + Margins.desktop.shadow) * 2) + Margins.desktop.vertical + Margins.desktop.header}px - ${headerHeight} - ${buttonHeight}`;

        return height;

  } if(screenSize==='tablet') {

        const height = `100vh - ${(((Margins.tablet.vertical * 2) + Margins.tablet.shadow) * 2) + (Margins.tablet.vertical * 3) + Margins.tablet.header}px - ${headerHeight} - ${buttonHeight}`;

        return height;

  } if(screenSize==='mobile') {

        const height = `100vh - ${(((Margins.mobile.vertical * 2) + Margins.mobile.shadow) * 2) + (Margins.mobile.vertical * 6) + Margins.mobile.header}px - ${headerHeight} - ${buttonHeight}`;

        return height;

  } else {
    throw new Error('A valid screen size was not provided');
  }
}
