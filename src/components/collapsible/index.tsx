import { CSSProperties } from "react";
import * as React from "react";

export interface ICollapsibleProps {
  readonly text: string;
  readonly id: string;
  readonly children: any;
}

const containerStyle: CSSProperties = {
  display: "flex",
};

const collapseButtonStyle: CSSProperties = {
  backgroundColor: "#ffcccb",
  marginRight: "5px",
};

const Collapsible = ({ id, text, children }: ICollapsibleProps) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  return (
    <div style={containerStyle} id={id}>
      {isCollapsed && (
        <button onClick={() => setIsCollapsed(!isCollapsed)}>{text}</button>
      )}
      {!isCollapsed && (
        <>
          <button
            style={collapseButtonStyle}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            Collapse
          </button>
          {children}
        </>
      )}
    </div>
  );
};

export default Collapsible;
