export const SubmitAndResetButtons = (props) => {
  return (
    <div className="button-design">
      <button onClick={props.handleSubmit}>{props.submitLabel}</button> <br />
      <br />
      {props.hideReset ? null : (
        <button onClick={props.handleReset}>{props.resetLabel}</button>
      )}
    </div>
  );
};
