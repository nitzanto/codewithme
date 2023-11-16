import React from 'react';

const Topbar = () => {
    return (
        <div className="pl-2 border border-solid border-gray-700 bg-neutral-800 cursor-auto flex item-center">
            <div>
                <div className="text-gray-300 font-bold mb-1">Text Editor</div>
                <div className="text-xs text-gray-400 mb-1">
                    You can edit your code here
                </div>
            </div>
        </div>
    );
};

export default Topbar;
