import { blue, red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme)=>({
    card: {
        borderRadius: 1,
        padding: '30px 30px',
        margin: '50px 20px',
        width: '320px',
        boxShadow: '20px 20px 20px ',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:"center"
    } ,
    paper:{
        marginTop:theme.spacing(8),
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        padding:theme.spacing(2),
    },
    root:{
        '& .MuiTextField-root':{
            margin:theme.spacing(1),
        },
    },
    avatar:{
        margin:theme.spacing(1),
        backgroundColor:theme.palette.secondary.main,
    },
    form:{
        width:'100%',
        marginTop:theme.spacing(3),
    },
    submit:{
        margin: theme.spacing(3,0,2),
    },
    googleButton:{
        marginBotttom : theme.spacing(2),
    },
    
}))