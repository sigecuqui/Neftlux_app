import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import auth from "../../../../../auth";

import { Input, Button } from "../../../../components";

function Payment({ plan, credentials }) {
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    fetch("https://academy-video-api.herokuapp.com/auth/signup ", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.pass,
        planId: plan,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw Error(res.status);
      })
      .then((data) => {
        console.log(data);
        dispatch(auth.actions.signUpSuccess(data.token))
      })
      .catch((e) => {
        console.log(e);
        setError("Failure: please check details");
      });
  };

  return (
    <div className="content__wrapper">
      <form className="form">
        <p className="form__label">First Name</p>
        <Input className="form__input" type="text" placeholder="Name" />
        <p className="form__label">Last Name</p>
        <Input className="form__input" type="text" placeholder="Last name" />
        <p className="form__label">Card Number</p>
        <Input
          className="form__input"
          type="number"
          placeholder="Card Number"
        />
        <Button type="submit" size="large" alignLeft onClick={onSubmit}>
          Submit
        </Button>
        {error && <p className="form__error">{error}</p>}
      </form>
    </div>
  );
}


export default Payment;