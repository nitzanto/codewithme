"use client"

import React, { useState } from 'react';
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import CodeEditor from "@/components/Workspace/codeEditor/CodeEditor";
import Whiteboard from "@/components/Workspace/Whiteboard/Whiteboard";

const Room = () => {
    const [sizes, setSizes] = useState([100, '30%', 'auto']);

    const layoutCSS = {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#2d2d2d', // Dark gray background color
        color: '#fff', // Text color
    };

    const sashRender = (index: any, active: any) => {
      return (
        <div
          className={`bg-${active ? "gray-700" : "gray-600"} h-full w-2`}
          style={{ cursor: "col-resize" }}
        />
      );
    };

    return (
        <div className="h-screen bg-black">
            <SplitPane
                split='vertical'
                sizes={sizes}
                onChange={setSizes}
                sashRender={sashRender}
            >
                <Pane>
                    <div className="flex items-center justify-center h-full bg-gray-800">
                        {/* Whiteboard */}
                        <Whiteboard />
                    </div>
                </Pane>
                <Pane>
                    <div className="flex items-center justify-center h-full bg-gray-700">
                        {/* CodeEditor component goes here */}
                        <CodeEditor />
                    </div>
                </Pane>
            </SplitPane>
        </div>
    );
};

export default Room;
