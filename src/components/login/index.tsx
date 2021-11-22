import { CSSProperties } from "react";
import * as React from "react";
import "./index.css";

export enum Role {
  Admin,
  Player,
}

export interface ILoginProps {
  readonly setRoleOnLogin: (role: Role) => void;
}

const containerStyle: CSSProperties = {
  display: "flex",
  backgroundColor: "black",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  background: "url('https://i.imgur.com/WvFnFSa.jpeg')",
};

const inputsContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  marginTop: "25rem",
};

const input: CSSProperties = {
  background: "transparent",
  border: "2px solid #000",
  color: "white",
  borderRadius: "15px",
  padding: "0.25rem 0.5rem",
  cursor: "pointer",
};

const validLogins: Record<string, string> = {
  ["garret"]: "greenbottle",
  ["gabrek"]: "barbemolasse",
  ["gumruk"]: "vrakfas",
  ["megor"]: "megor",
  ["diamond"]: "dew",
  ["jack"]: "cortex123",
};

const Login = ({ setRoleOnLogin }: ILoginProps) => {
  const [name, setName] = React.useState(undefined as string);
  const [password, setPassword] = React.useState(undefined as string);

  const handleNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const attemptLogin = () => {
    const passwordFromName = validLogins[name.toLowerCase()];
    if (passwordFromName === password.toLowerCase()) {
      setRoleOnLogin(name === "jack" ? Role.Admin : Role.Player);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={inputsContainer}>
        <input
          style={input}
          type="text"
          placeholder="name"
          onChange={handleNameChange}
        />
        <input
          style={input}
          type="password"
          placeholder="password"
          onChange={handlePasswordChange}
        />
        <button style={input} className="login-button" onClick={attemptLogin}>
          Jump in!
        </button>
      </div>
    </div>
  );
};

export default Login;
