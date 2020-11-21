import React, { useState } from 'react';
import './SnakeGame.css'

export default function SnakeGame() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [blockWidth, setBlockWidth] = useState(0);
    const [blockHeight, setBlockHeight] = useState(0);
    const [gameLoopTimeout, setGameLoopTimeout] = useState(50);
    const [startSnakeSize, setStartSnakeSize] = useState(0);
    const [snake, setSnake] = useState([]);
    const [apple, setApple] = useState({});
    const [direction, setDirection] = useState('right');
    const [directionChanged, setDirectionChanged] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);

    const initGame = () => {
        let percentageWidth = 40;
        let width = document.getElementById('game-board').parentElement.offsetWidth * (percentageWidth / 100);
        width -= width % 30;
        if (width < 30) width = 30;
        let height = (width / 3) * 2;
        let blockWidth = width / 30;
        let blockHeight = height / 20;

        let startSnakeSize2 = startSnakeSize || 6;
        let Xpos = width / 2;
        let Ypos = height /2;
        let snakeHead = { Xpos: width / 2, Ypos: height /2 };
        snake.push(snakeHead);
        for (let i = 1; i < startSnakeSize2; i++) {
            Xpos -= blockWidth;
            let snakePart = { Xpos: Xpos, Ypos: Ypos };
            snake.push(snakePart);
        }

        let appleXpos = Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) * blockWidth;
        let appleYpos = Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) * blockHeight;
        while (appleYpos === snake[0].Ypos) {
            appleYpos = Math.floor(Math.random() * ((height - blockHeight) / blockHeight +1)) * blockHeight;
        }

        setWidth(width);
        setHeight(height);
        setBlockWidth(blockWidth);
        setBlockHeight(blockHeight);
        setStartSnakeSize(startSnakeSize2);
        setSnake(snake);
        setApple({ Xpos: appleXpos, Ypos: appleYpos});
    }



    return (
    <div id='game-board'>
    </div>
    )
}