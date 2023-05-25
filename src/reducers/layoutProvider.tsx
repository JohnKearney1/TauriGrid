import layoutsData from './layouts.json';

const initialState = {
    layouts: layoutsData.layouts[0].layouts,
    windowTitles: layoutsData.layouts[0].windowTitles
};

const layoutProvider = (state = initialState, action: any) => {
  switch (action.type) {
    case "Basic":
      const basicLayout = layoutsData.layouts.find((layout) => layout.id === "Basic");
      return {
        ...state,
        layouts: basicLayout?.layouts,
        windowTitles: basicLayout?.windowTitles
      };
    case "Advanced":
      const advancedLayout = layoutsData.layouts.find((layout) => layout.id === "Advanced");
      return {
        ...state,
        layouts: advancedLayout?.layouts,
        windowTitles: advancedLayout?.windowTitles
      };
    case "Dev":
      const devLayout = layoutsData.layouts.find((layout) => layout.id === "Dev");
      return {
        ...state,
        layouts: devLayout?.layouts,
        windowTitles: devLayout?.windowTitles
      };
    case "Preferences":
      const preferencesLayout = layoutsData.layouts.find((layout) => layout.id === "Preferences");
      return {
        ...state,
        layouts: preferencesLayout?.layouts,
        windowTitles: preferencesLayout?.windowTitles
      };
    default:
      return state;
  }
};

export default layoutProvider;
