export const Tweets = ({ tweet }) => {
  const current_date = new Date();
  const date = `${current_date.getDate()} / ${
    current_date.getMonth() + 1
  } / ${current_date.getFullYear()}  - ${current_date.getHours()}:${current_date.getMinutes()}`;
  return (
    <div className="tweets-design">
      {tweet} <br /> <div className="date-design">{date}</div>
      {tweet} <br /> <div className="date-design">{date}</div> <br />
    </div>
  );
};
