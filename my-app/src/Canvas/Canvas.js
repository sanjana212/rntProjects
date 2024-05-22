import React, { useState } from 'react';

const Canvas = () => {
    const [lastX, setLastX] = useState(0);
    const [lastY, setLastY] = useState(0);
    const [isDrawing, setIsdrawing] = useState(false);
    // var isDrawing = false;
    // var lastX = 0;
    // var lastY = 0;
    const handleOnMouseDown = (e) => {
        setIsdrawing(true);
        // [lastX, lastY] = [, ];
        setLastX(e.offsetX);
        setLastY(e.offsetY)
    }
    const handleOnMouseUp = (e) => {
        setIsdrawing(false);
    }
    const handleOnMouseMove = (e) => {
        debugger;
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        if (!isDrawing) return;
        console.log("In Log Function");
        // Set line styles
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        console.log("e.offsetX, e.offsetY", e.offsetX, e.offsetY);
        console.log("lastX, lastY", lastX, lastY);
        // Draw the line
        const currentX = e.clientX - canvas.offsetLeft;
        const currentY = e.clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(currentX,currentY);
        ctx.stroke();

        // [lastX, lastY] = [e.offsetX, e.offsetY];
        setLastX(e.offsetX);
        setLastY(e.offsetY)
    }
    return (
        <div className='container'>
            <h1>In the canvas Comp</h1>
            <canvas
                height="500"
                width="500"
                style={{ border: '1px solid red', }}
                id='myCanvas'
                onMouseDown={(e) => handleOnMouseDown(e)}
                onMouseUp={(e) => handleOnMouseUp(e)}
                onMouseMove={(e) => handleOnMouseMove(e)}
            />


        </div>
    )
}

export default Canvas;
/*and I always think when I will have that person who is completly mine when god when I dont want to get attached to any person now I am just get tired just give me the person
who deserves whom I deserve I dont want to give my precious heart to anyone please god please show me some empathy
BUT then again I thought what if I dont get the right one what if I again overshare to that person what if I again left alone in that whole process I just don't know what should I do now 
right now I just want to think about myself do the things which are right for me but also dont know am I with the right persons or not what if I again whose the wrong person wat if I again have the wrong one
and I am not in the state of to heal myself again and do care for my broken heart an dalso I can;t live alone I cant kept my heart left alone It need someone who make it feel good do care for it
and show how good it is I always want to shower my kind heart on someone
but in that process I get hurt I get used cause I dont know who is good for me so thats why I need that one person who will  be peronant in my life who cares for me my thoughts my groth my appeaarece who derserve me and I deserve him/her

mansanpeksha hi mothe aste tyanche man
bhasha mahiti nasunhi prem dakhwayche tyache kiti sare rup

apeksha nhi krt te
fkt prem den ha ekch tyancha praytna

evlushe dole ani evlushe tond
tri kiti sagl bghtat
ani bolun ddakhwta




 


*/