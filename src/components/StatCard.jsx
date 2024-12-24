const StatCard = ({value, title }) => {
  return (
    <article>
      <h1>{value}</h1>
      <h1 className="text-primary">____</h1>
      <h1>{title}</h1>
    </article>
  );
};
export default StatCard