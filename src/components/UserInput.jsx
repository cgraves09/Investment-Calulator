import InputWrapper from "../lib/InputWrapper";

export default function UserInput({ userInput, onChangeInput }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <InputWrapper label="Initial Investment">
          <input
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChangeInput(event.target.value, "initialInvestment")
            }
            required
          />
        </InputWrapper>

        <InputWrapper label="Annual Investment">
          <input
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChangeInput(event.target.value, "annualInvestment")
            }
            required
          />
        </InputWrapper>
      </div>

      <div className="input-group">
        <InputWrapper label="Expected Return">
          <input
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChangeInput(event.target.value, "expectedReturn")
            }
            required
          />
        </InputWrapper>

        <InputWrapper label="Duration">
          <input
            value={userInput.duration}
            onChange={(event) => onChangeInput(event.target.value, "duration")}
            required
          />
        </InputWrapper>
      </div>
    </div>
  );
}
