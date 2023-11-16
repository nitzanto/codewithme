import React, { useState } from "react";
import { useDraw } from "@/hooks/useDraw";

const Whiteboard = () => {
    const [color, setColor] = useState<string>("#000");
    const { canvasRef, onMouseDown, clear } = useDraw(drawLine);

    function drawLine({ prevPoint, currentPoint, ctx }: Draw) {
        const { x: currX, y: currY } = currentPoint;
        const lineColor = color;
        const lineWidth = 2; // Adjust the line width as needed

        let startPoint = prevPoint ?? currentPoint;
        ctx.beginPath();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = lineColor;
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(currX, currY);
        ctx.stroke();

        ctx.fillStyle = lineColor;
        ctx.beginPath();
        ctx.arc(startPoint.x, startPoint.y, 1, 0, 2 * Math.PI); // Adjust the arc radius as needed
        ctx.fill();
    }

    return (
        <div className="w-full flex flex-col h-full">
            {/* Top bar */}
            <div className="p-2 border border-solid border-gray-700 bg-neutral-800 text-white">
                <div className="font-bold mb-1">Whiteboard</div>
                <div className="text-xs text-gray-400 mb-1">
                    You can draw here
                </div>
            </div>

            {/* Whiteboard content */}
            <div className="flex-1 flex items-center justify-center">
                <div className="w-full h-full border border-black rounded-lg p-4">
                    <div className="flex gap-4">
                        <button
                            type="button"
                            className="p-2 rounded-md border border-black"
                            onClick={clear}
                        >
                            Clear canvas
                        </button>
                    </div>
                    <canvas
                        ref={canvasRef}
                        onMouseDown={onMouseDown}
                        className="border border-black rounded-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default Whiteboard;
