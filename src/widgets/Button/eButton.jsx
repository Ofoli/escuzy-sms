import { Button } from "@mui/material";

const EButton = (props) => {
  const { name } = props;
  return (
    <Button
      color="primary"
      variant="contained"
      style={{
        background: "#07c1a8",
        width: "200px",
        height: "50px",
        ...props.xStyle,
      }}
    >
      {name}
    </Button>
  );
};

export default EButton;
