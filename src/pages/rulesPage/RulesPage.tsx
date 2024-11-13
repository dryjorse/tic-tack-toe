import { FC } from "react";

const RulesPage: FC = () => {
  return (
    <div className="container flex justify-center items-center">
      <div className="w-full sm:w-1/2">
        <h1 className=" mt-10 mb-3 text-3xl md:text-4xl lg:text-5xl">Rules</h1>
        <ol className="list-decimal sm:max-w-xl px-4 text-sm h-full max-w-full">
          <li>
            <strong>Two Players:</strong> The game is played between two
            players: one uses "X" and the other uses "O".
          </li>
          <li>
            <strong>Grid Layout:</strong> The game is played on a 3x3 grid.
          </li>
          <li>
            <strong>Objective:</strong> The goal is to place three of your marks
            (X or O) in a horizontal, vertical, or diagonal row.
          </li>
          <li>
            <strong>Turns:</strong> Players take turns to place their mark on an
            empty space on the grid.
          </li>
          <li>
            <strong>First Move:</strong> The player using "X" always goes first.
          </li>
          <li>
            <strong>Winning Condition:</strong> The first player to align three
            marks in a row (horizontally, vertically, or diagonally) wins the
            game.
          </li>
          <li>
            <strong>No Overwriting:</strong> A player cannot place their mark in
            a cell that is already occupied.
          </li>
          <li>
            <strong>Draw:</strong> If all cells are filled and no player has
            won, the game ends in a draw.
          </li>
          <li>
            <strong>Game Reset:</strong> After a win or draw, players can start
            a new game by resetting the board.
          </li>
          <li>
            <strong>Fair Play:</strong> Both players should respect the rules,
            taking turns without rushing or interfering with the other player's
            moves.
          </li>
        </ol>
      </div>
      <div className="w-0 sm:w-1/2 flex justify-end items-center">
        <img
          src="/humanchiky.png"
          alt="rules image"
          className="w-96 h-auto"
        />
      </div>
    </div>
  );
};

export default RulesPage;
