"use client";

import React, { useState } from "react";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";
import CodeEditor from "@/components/Workspace/codeEditor/CodeEditor";
import Whiteboard from "@/components/Workspace/Whiteboard/Whiteboard";

const Room = () => {
  const [whiteboardSizes, setWhiteboardSizes] = useState([300, "30%", "auto"]);
  const [chatboxSizes, setChatboxSizes] = useState([500, "50%", "auto"]);

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
        split="vertical"
        sizes={whiteboardSizes}
        onChange={setWhiteboardSizes}
        sashRender={sashRender}
      >
        <Pane>
          <SplitPane
            split="horizontal"
            sizes={chatboxSizes}
            sashRender={sashRender}
            onChange={setChatboxSizes}
          >
            <Pane>
              <div className="flex items-center justify-center h-full bg-gray-800 border-gray">
                {/* Whiteboard */}
                <Whiteboard />
              </div>
            </Pane>
            <Pane>
              <div className="flex items-center justify-center h-full bg-gray-800">
                {/* Chatbox */}
                Chatroom
              </div>
            </Pane>
          </SplitPane>
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
