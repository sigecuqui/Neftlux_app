import { useState } from "react";
import { Input, Button } from "../../../../components";

function CreateUser({ setCredentials }) {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const onContinue = (e) => {
    e.preventDefault();
    
    setCredentials({ username, pass });
  };

  return (
    <div className="content__wrapper">
      <form className="form">
        <p className="form__label">Username</p>
        <Input
          className="form__input"
          type="text"
          placeholder="Username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <p className="form__label">Password</p>
        <Input className="form__input" type="password" placeholder="Password" />
        <p className="form__label">Repeat Password</p>
        <Input
          className="form__input"
          type="password"
          placeholder="Repeat Password"
          onChange={(event) => {
            setPass(event.target.value);
          }}
        />
        <Button type="submit" size="large" alignLeft onClick={onContinue}>
          Continue
        </Button>
      </form>
    </div>
  );
}

export default CreateUser;