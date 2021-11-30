import "./index.scss";
import * as React from "react";
import { IPlayer } from "..";

export interface IInformationsProps {
  stats: Pick<
    IPlayer,
    | "characterClass"
    | "race"
    | "background"
    | "allignment"
    | "experience"
    | "playerName"
  >;
}

const Informations = ({
  stats: {
    race,
    background,
    allignment,
    experience,
    playerName,
    characterClass,
  },
}: IInformationsProps) => {
  return (
    <div className="informations__wrapper">
      <span>{`Class & level: ${characterClass}`}</span>
      <span>{`Background: ${background}`}</span>
      <span>{`Player name: ${playerName}`}</span>
      <span>{`Race: ${race}`}</span>
      <span>{`Alignment: ${allignment}`}</span>
      <span>{`Experience points: ${experience}`}</span>
    </div>
  );
};

export default Informations;
