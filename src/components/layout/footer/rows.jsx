import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Card from "./card";

function Download() {
  return <Card title="Download"></Card>;
}

function Navigate() {
  return <Card title="Navigate"></Card>;
}
function Company() {
  return <Card title="Company"></Card>;
}

export { Navigate, Company, Download };
