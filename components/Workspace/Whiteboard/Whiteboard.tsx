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
        <div className="flex flex-col h-screen">
            {/* Top bar */}
            <div className="pl-2 border border-solid border-gray-700 bg-neutral-800 cursor-auto flex items-center text-white">
                <div>
                    <div className="text-gray-300 font-bold mb-1">Whiteboard</div>
                    <div className="text-xs text-gray-400 mb-1">
                        You can draw here
                    </div>
                </div>
            </div>

            {/* Whiteboard content */}
            <div className="flex-1 bg-white flex justify-center items-center">
                <div className="flex flex-col gap-10 pr-10">
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
                    width={300} // Adjust the canvas width as needed
                    height={300} // Adjust the canvas height as needed
                    className="border border-black rounded-md"
                    style={{ marginTop: "-2px" }}
                />
            </div>
        </div>
    );
};

export default Whiteboard;
