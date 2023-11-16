import React from "react";
import { useState, useRef } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  return <div className="code-editor">
    <Editor
      height="100vh"
      width="100%"
      theme="vs-dark"
      defaultLanguage={"python"}
      defaultValue={"pytohn.py"}
      />
  </div>;
};

export default CodeEditor;
