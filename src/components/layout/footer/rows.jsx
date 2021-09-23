import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Card from "./card";

const links = {
  download: ["Download", "Desktop", "IOS", "Andriod"],
  company: ["luxstek.com"],
  navigate: ["Services", "Billing", "Download", "Contact-us"],
};
function Download() {
  // desktop IOS Andriod
  return (
    <Card title="Download">
      <List>
        {links.download.map((item) => (
          <ListItem key={item}>
            <ListItemText inset primary={item} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

function Navigate() {
  //home  services billing download contact-us
  return (
    <Card title="Navigate">
      <List>
        {links.navigate.map((item) => (
          <ListItem key={item}>
            <ListItemText inset primary={item} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
function Company() {
  //luxstek.com
  return (
    <Card title="Company">
      <List>
        {links.company.map((item) => (
          <ListItem key={item}>
            <ListItemText inset primary={item} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

export { Navigate, Company, Download };
