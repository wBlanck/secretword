const Congrats = ({ success }) => {
  return (
    <>
      {success ? (
        <div data-test="component-congrats">
          <span data-test="congrats-message">
            Congrats! you guessed the word!
          </span>
        </div>
      ) : (
        <div data-test="component-congrats" />
      )}
      ;
    </>
  );
};

export default Congrats;
