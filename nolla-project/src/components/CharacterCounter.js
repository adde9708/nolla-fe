export const CharacterCounter = ({ counter, limit }) => {
  return (
    <div className="charCounter-design">
      {counter} / {limit - counter}
    </div>
  );
};
