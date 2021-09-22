import { List } from "@material-ui/core";

const styles = {
  card: {
    width: "300px",
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    margin: "25px 0px",
  },
};
export default function Card(props) {
  const { title } = props;
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{title}</h3>
      <>{props.children}</>
    </div>
  );
}
