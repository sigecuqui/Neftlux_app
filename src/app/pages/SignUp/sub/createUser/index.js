import { Input, Button } from "../../../../components";

function CreateUser() {
  return (
    <div className="content__wrapper">
    <form className="form">
      <p className="form__label">Username</p>
      <Input
        className="form__input"
        type="text"
        placeholder="Username"
      />
      <p className="form__label">Password</p>
      <Input
        className="form__input"
        type="password"
        placeholder="Password"
      />
      <p className="form__label">Repeat Password</p>
      <Input
        className="form__input"
        type="password"
        placeholder="Repeat Password"
      />
      <Button
        type="submit"
        size="large"
        alignLeft
      >
        Continue
      </Button>
    </form>
    </div>
  );
}

export default CreateUser;