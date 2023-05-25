import React, { ReactNode, useRef, useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { InfoCircledIcon } from '@radix-ui/react-icons';

type WindowProps = {
    children: ReactNode;
    width?: string;
    height?: string;
    windowtitle?: string;
    tooltipText?: string;
};

function Window({ 
    children,
    width = '100%',
    height = '100%',
    windowtitle = "Default Title",
    tooltipText = `Looks like you didn't pass a tooltipText when you called this <Window> component. This is some default text!`
    }: WindowProps) {
    const windowRef = useRef<HTMLDivElement>(null);
    const [windowSize, setWindowSize] = useState({ width: width, height: height });

    return (
        
            <div
                ref={windowRef}
                style={{
                    background: '#222',
                    color: '#fff',
                    borderRadius: '5px',
                    width: windowSize.width,
                    height: windowSize.height,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    overflow: 'hidden',
                    margin: '0%',
                    boxShadow: '0px 2px 6px rgba(0, 0, 0, 1)'
                }}
            >
                <strong
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: '#111',
                        height: '30px',
                        borderTopLeftRadius: '5px',
                        borderTopRightRadius: '5px',
                        padding: '0 10px',
                    }}
                >
                    
                    <div>
                            <h6>{windowtitle}</h6>
                    </div>
                    
                    <div>
                    <Tooltip title={tooltipText}>
                        <IconButton
                            aria-label="minimize"
                            size="small"
                            color="inherit"
                        >
                            <InfoCircledIcon fontSize="inherit" style={{ color: 'white'}} />
                        </IconButton>
                    </Tooltip>
                    </div>
                </strong>
                    <div style={{ padding: '10px' }}>
                        {children}
                    </div>
                <div
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        right: '0',
                        width: '10px',
                        height: '10px',
                        background: 'transparent',
                        cursor: 'se-resize',
                    }}
                />
            </div>
    );
}

export default Window;
