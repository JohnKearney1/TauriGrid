import React from 'react';
import { useDispatch } from 'react-redux';
import * as Menubar from '@radix-ui/react-menubar';
import { ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons';
import { switchLayout } from '../actions';
import './Toolbar.css';

const RADIO_ITEMS = ['Basic', 'Advanced', 'Dev'];

function Toolbar() {

  const dispatch = useDispatch();
  const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[0]);

  const handleRadioChange = (value: string) => {
    console.log(value)
    // Change the layout and the window title set in the redux store
    dispatch(switchLayout(value));
    // dispatch(switchWindowTitleSet(value));

    // Update the radio selection in the toolbar
    setRadioSelection(value);
  };

  
  // Update the layout to only show the preferences window
  const handleShowPreferences = () => {
    console.log('Preferences')
    
    dispatch(switchLayout('Preferences'));
    // dispatch(switchWindowTitleSet('Preferences'));

    // Unset the radio selection in the toolbar
    setRadioSelection('');
  }

  // Handles reloading the application
  const handleReload = () => {
    window.location.reload();
  };

  // Handles exiting the application
  const handleExit = () => {
    window.close();
  };

  return (
    <div
      style={{
        backgroundColor: '#111',
        width: '99%',
        margin: '0 auto',
        marginTop: '-4px',
        marginBottom: '-4px',
        borderRadius: '5px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Menubar.Root className="MenubarRoot">
        <Menubar.Menu>
          <Menubar.Trigger className="MenubarTrigger">File</Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content className="MenubarContent" align="start" sideOffset={5} alignOffset={-3}>
              <Menubar.Item className="MenubarItem" onSelect={handleReload}>
                Reload <div className="RightSlot">Ctrl + R</div>
              </Menubar.Item>

              <Menubar.Item className="MenubarItem" onSelect={handleShowPreferences}>
                Preferences <div className="RightSlot"></div>
              </Menubar.Item>
              <Menubar.Separator className="MenubarSeparator" />
              <Menubar.Item className="MenubarItem" onClick={handleExit}>
                Exit <div className="RightSlot">Alt + F4</div>
              </Menubar.Item>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger className="MenubarTrigger">Edit</Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content className="MenubarContent" align="start" sideOffset={5} alignOffset={-3}>
              <Menubar.Item className="MenubarItem">
                Undo <div className="RightSlot">⌘ Z</div>
              </Menubar.Item>
              <Menubar.Item className="MenubarItem">
                Redo <div className="RightSlot">⇧ ⌘ Z</div>
              </Menubar.Item>
              <Menubar.Separator className="MenubarSeparator" />
              <Menubar.Sub>
                <Menubar.SubTrigger className="MenubarSubTrigger">
                  Find
                  <div className="RightSlot">
                    <ChevronRightIcon />
                  </div>
                </Menubar.SubTrigger>

                <Menubar.Portal>
                  <Menubar.SubContent className="MenubarSubContent" alignOffset={-5}>
                    <Menubar.Item className="MenubarItem">Search the web…</Menubar.Item>
                    <Menubar.Separator className="MenubarSeparator" />
                    <Menubar.Item className="MenubarItem">Find…</Menubar.Item>
                    <Menubar.Item className="MenubarItem">Find Next</Menubar.Item>
                    <Menubar.Item className="MenubarItem">Find Previous</Menubar.Item>
                  </Menubar.SubContent>
                </Menubar.Portal>
              </Menubar.Sub>
              <Menubar.Separator className="MenubarSeparator" />
              <Menubar.Item className="MenubarItem">Cut</Menubar.Item>
              <Menubar.Item className="MenubarItem">Copy</Menubar.Item>
              <Menubar.Item className="MenubarItem">Paste</Menubar.Item>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger className="MenubarTrigger">Profiles</Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content
              className="MenubarContent"
              align="start"
              sideOffset={5}
              alignOffset={-14}
            >
              <Menubar.RadioGroup value={radioSelection} onValueChange={handleRadioChange}>
                {RADIO_ITEMS.map((item) => (
                  <Menubar.RadioItem className="MenubarRadioItem inset" key={item} value={item}>
                    <Menubar.ItemIndicator className="MenubarItemIndicator">
                      <DotFilledIcon />
                    </Menubar.ItemIndicator>
                    {item}
                  </Menubar.RadioItem>
                ))}
              </Menubar.RadioGroup>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>
      </Menubar.Root>
    </div>
  );
}

export default Toolbar;
