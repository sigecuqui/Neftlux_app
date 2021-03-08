import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./index.scss";
import useFetch from "../../../../hooks/useFetch";
import signUp from "../../../../../sign-up";

import { Button } from "../../../../components";

function PickPlan({ plans, onSuccess, onFailure, onStart }) {
  useFetch({
    url: "https://academy-video-api.herokuapp.com/sales/plans",
    onSuccess,
    onFailure,
    onStart,
  });

  return (
    <div className="content__wrapper">
      <div className="plan-content">
          <div className="plan-content__wrapper">
        {plans.map((plan) => {
          return (
            <div key={plan.id} className="plan">
              <input type="radio" id={plan.id} name="plan" value={plan.id} className="plan__input"/>
              
                <h2>{plan.title}</h2>
                <p>{plan.monthlyCost} per month</p>
                <p>13.5% off</p>
                <p>
                  95.88 {plan.totalCost} billed every{" "}
                  {plan.frequencyIntervalMonths} months
                </p>
            </div>
          );
        })}
</div>
      <Button type="submit" size="large" alignLeft>
        Continue
      </Button>
      </div>
    </div>
  );
}

const enhance = connect(
  (state) => ({
    //   form: signUp.selectors.getMovies(state),
    plans: signUp.selectors.getPlans(state),
  }),
  (dispatch) =>
    bindActionCreators(
      {
        onStart: signUp.actions.getPlans,
        onSuccess: signUp.actions.getPlansSuccess,
        onFailure: signUp.actions.getPlansFailure,
      },
      dispatch
    )
);

export default enhance(PickPlan);