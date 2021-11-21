import { CSSProperties } from "react";
import * as React from "react";

export interface IQuestProps {
  quest: IQuest;
}

export interface IQuest {
  readonly id: string;
  readonly title: string;
  readonly text: string;
  readonly rewards: string[];
  readonly experience: number;
}

const containerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  borderRadius: 5,
  boxShadow: "5px 5px 15px 5px #000000",
  padding: "0.5rem",
  fontSize: 12,
};

const titleStlye: CSSProperties = {
  fontSize: 16,
  fontWeight: "bold",
};

const descriptionStyle: CSSProperties = {
  fontSize: 14,
  fontWeight: "thin",
};

const experienceStyle: CSSProperties = {
  fontWeight: "bold",
};

const Quest = ({
  quest: { id, title, text, rewards, experience },
}: IQuestProps) => {
  return (
    <div style={containerStyle} id={id}>
      <span style={titleStlye}>{title}</span>
      <span style={descriptionStyle}>{text}</span>

      <div>
        Rewards:
        <br />
        {rewards.map((reward) => (
          <span key={reward}>{reward}</span>
        ))}
      </div>

      <span style={experienceStyle}>{`Experience: ${experience}`}</span>
    </div>
  );
};

export default Quest;
