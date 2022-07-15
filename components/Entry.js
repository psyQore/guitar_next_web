const Entry = ({ entry }) => {
  const { title } = entry;
  return (
    <article>
      <h1>{title}</h1>
    </article>
  );
};

export default Entry;
