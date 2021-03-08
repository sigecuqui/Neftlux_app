import "./index.scss";

import Button from "../Button";

function Hero() {
  return (
    <div className="hero">
      <h1 className="hero__title">Wanna more Content ?</h1>
      <Button to="/sign-up/create-user" size="large">
        Get Access
      </Button>
    </div>
  );
}

export default Hero;
