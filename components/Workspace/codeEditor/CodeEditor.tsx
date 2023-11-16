import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  const [language, setLanguage] = useState("python");
  const [value, setValue] = useState("python");

  const handleLanguageChange = (newLanguage: React.SetStateAction<string>) => {
    setLanguage(newLanguage);
    setValue(newLanguage);
  };

  return (
    <div className="flex flex-col w-full h-full">
      {/* Language selection bar */}
      <div className="pl-2 border border-solid border-gray-700 bg-neutral-800 cursor-auto flex item-center">
        <div>
          <div className="text-gray-300 font-bold mb-1">Text Editor</div>
          <div className="text-xs text-gray-400 mb-1">
            You can edit your code here
          </div>
        </div>
        <select
          className="p-2 m-2 bg-neutral-500 text-gray-800 text-sm rounded-b ml-auto"
          onChange={(e) => handleLanguageChange(e.target.value)}
        >
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
        </select>
      </div>
      {/* Code editor section */}
      <div className="flex-1 bg-gray-100 rounded-b-lg shadow-lg">
        <Editor
          height="calc(100vh - 40px)" // Adjust the height to leave space for the top bar
          width="100%"
          theme="vs-dark"
          language={language}
          value={`// Start coding in ${value}\n`}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
