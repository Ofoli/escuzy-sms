const styles = {
  card: {
    width: "300px",
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    margin: "25px 0px",
  },
  body: {
    paddingLeft: "40px",
  },
};
export default function Card(props) {
  const { card, title, body } = styles;
  return (
    <div style={card}>
      <h3 style={title}>{props.title}</h3>
      <div style={body}>{props.children}</div>
    </div>
  );
}
