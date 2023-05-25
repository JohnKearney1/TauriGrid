import { useState } from "react";
import Window from "./Window";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import "./Workspace.css";
import { Responsive, WidthProvider, Layouts } from "react-grid-layout";
import { useSelector } from 'react-redux';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface WorkspaceProps {
  layouts?: Layouts;
  windowTitles?: string[];
}

interface WindowStates {
  [key: string]: boolean;
}

// Map window titles to their respective components
const windowComponents: { [key: string]: JSX.Element } = {

  // Add more mappings as needed
  "Explorer": <>{/* Add a component here! */}</>,
  "Home": <>{/* Add a component here! */}</>,
  "Metadata": <>{/* Add a component here! */}</>,
  "System Logs": <>{/* Add a component here! */}</>,
  "Command Prompt": <>{/* Add a component here! */}</>,
  "Preferences": <>{/* Add a component here! */}</>,
  
};


function Workspace({
  layouts = useSelector((state: any) => state.layouts.layouts),
  windowTitles = useSelector((state: any) => state.layouts.windowTitles),
}: WorkspaceProps): JSX.Element {

  const [windowStates, setWindowStates] = useState<WindowStates>(() => {

    // Initialize window states based on the provided window titles
    const initialState: WindowStates = {};
    windowTitles.forEach((title: string) => {
      initialState[title.toLowerCase().replace(" ", "")] = true;
    });
    return initialState;
  });

  return (
    <div className="grid-wrapper">
      <ResponsiveGridLayout layouts={layouts}>
        {windowTitles.map((title: string) => (
          <div key={title.toLowerCase().replace(" ", "")}>
            {windowStates[title.toLowerCase().replace(" ", "")] && (
              <Window
                windowtitle={title}
                tooltipText={`Shows ${title}`}
              >
                {windowComponents[title] || null}
              </Window>
            )}
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}

export default Workspace;
