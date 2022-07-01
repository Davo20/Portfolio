import React, {useState} from "react";
import GameSq from "./GameSq"
import "./game.scss";
const gameArr = [[],[],[]]
export default function Game(){
    const [game, setGame]= useState("X")
    const [winner, setWinner]= useState()
    
    const squareClcik = (one, two)=>{
        setGame(square=> square == "X" ? "O" : "X")
        gameArr[one][two] = game
        console.log(gameArr)
        if(winnerFunc()){
            setWinner(game  + "Winner!!")
            setGame("")
        }
        
    }
    const winnerFunc = () =>{
        for(let i = 0; i <gameArr.length; i++){
            if(gameArr[i][0] == gameArr[i][1] && gameArr[i][1] == gameArr[i][2] &&  gameArr[i][0]){
                return gameArr[i][0]
               
            }
        
            else if(gameArr[0][i] == gameArr[1][i] && gameArr[1][i] == gameArr[2][i] && gameArr[0][i]){
                return gameArr[0][i]
                
            }
            else if(gameArr[0][0] == gameArr[1][1] && gameArr[1][1] == gameArr[2][2] && gameArr[0][0]){
                return gameArr[0][0]
                
            }
            else if(gameArr[0][2] == gameArr[1][1] && gameArr[1][1] == gameArr[2][0] && gameArr[0][2]){
                return gameArr[0][2]
                
            }

        }
        
    }
    return(
        <div>
            <div>
                <h2>{winner}</h2>
            </div>
        <div className="square">
            <div className="boxOne">
                <GameSq one={0} two={0} squareState={game} gameClick = {squareClcik}/>
                <GameSq one={0} two={1} squareState={game} gameClick = {squareClcik}/>
                <GameSq one={0} two={2} squareState={game} gameClick = {squareClcik}/>
            </div>
            <div className="boxTwo">
                <GameSq one = {1} two={0} squareState={game} gameClick = {squareClcik}/>
                <GameSq one = {1} two={1} squareState={game} gameClick = {squareClcik}/>
                <GameSq one = {1} two={2} squareState={game} gameClick = {squareClcik}/>
            </div>
            <div className="boxThree">
                <GameSq one = {2} two={0} squareState={game} gameClick = {squareClcik}/>
                <GameSq one = {2} two={1} squareState={game} gameClick = {squareClcik}/>
                <GameSq one = {2} two={2} squareState={game} gameClick = {squareClcik}/>
            </div>
        </div>
        </div>
    )
}