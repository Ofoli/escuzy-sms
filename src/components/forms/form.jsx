import TextField from '@material-ui/core/TextField';
import { purple } from '@material-ui/core/colors';
import {Button} from "@material-ui/core"
import { makeStyles,createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import {useState} from "react"


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '45ch',
      },
      
    },
    contact:{
      margin:'50px 0px',
     
    },
    btn:{
      width: '52ch',
      margin: theme.spacing(1),
      height:'7ch',
      fontWeight: 'bold',
      foneSize: '20'
    }
  }));

  const theme = createMuiTheme({
    palette: {
      primary: purple,
    },
  });

export default function Request(){
    const classes = useStyles();
    const [data,setData] = useState({
      name:"",
      email:"",
      phone:"",
      school:""
    })

  const doChange = (event)=>{
    const val = event.target.value;
    const key = event.target.id;
    setData({...data,[key]:val})
    console.log(data);
  }
 
    return (
        <div>
            <h2  className = {classes.contact}>Get In Touch</h2>
            <div>
            <form className={classes.root}>
                <div>
                  <TextField
                    id="name"
                    label="Name"
                    type="text"
                    autoComplete="current-password"
                    variant="outlined"
                    value = {data.name}
                    onChange = {doChange}
                />
                </div>
                <div>
                  <TextField
                    id="email"
                    label="Email"
                    type="email"
                    autoComplete="current-password"
                    variant="outlined"
                    value = {data.email}
                    onChange = {doChange}
                  />
                </div>
                <div>
                    <TextField
                    id="phone"
                    label="Phone"
                    type="phone"
                    variant="outlined"
                    value = {data.phone}
                    onChange = {doChange}
                />
                </div>
                <div>
                    <TextField
                  id="school"
                  label="School"
                  type="name"
                  variant="outlined"
                  value = {data.school}
                  onChange = {doChange}
                />
                </div>
                <div>
                  <ThemeProvider theme={theme}>
                    <Button 
                       variant="contained" 
                       color="primary" 
                       className={classes.btn}>
                      Send
                    </Button>
                  </ThemeProvider>
                </div>
        
            </form>
 
            </div>
        </div>
    )
}