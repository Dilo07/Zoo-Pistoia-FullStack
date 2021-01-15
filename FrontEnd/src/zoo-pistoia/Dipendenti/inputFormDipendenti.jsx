import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      marginRight: "5px",
      /* float: "left", */
      backgroundColor: "#4caf50",
      '&:hover': {backgroundColor: '#357a38'}
      }
})

const InputForm = (props) => {
    const classes = useStyles();
    //hooks definisco l'oggetto infoNewDip con le sue istanze nome e cognome che saranno modificati con il setInfo che richiamerà useStase
    /* const [ infoNewDip, setInfo ] = useState({id: props.dipendente.id, nome: props.dipendente.nome, cognome: props.dipendente.cognome}); */
    const onSubmit = () => {
        console.log(props.dipendenteEdit)
        if(!props.dipendenteEdit.id){
            // Verifica che il campo non sia vuoto o undefined
            if(props.dipendenteEdit.nome === undefined || props.dipendenteEdit.nome === '' || props.dipendenteEdit.cognome === undefined || props.dipendenteEdit.cognome === ''  ){
                alert('Inserisci un valore')
            }
            else{
                props.clickSaveAdd()
            }
        }
        else{
            if(props.dipendenteEdit.nome === '' || props.dipendenteEdit.cognome === '' ){
                alert('Inserisci un valore')
            }
            else{
                props.clickSaveEdit()
            }
        }
    }
    
    return (
    <div>
        <h1>Inserisci i dati del nuovo dipendente</h1>
        <form autoComplete="off" /* onSubmit={() => onSubmit()} */>
            <Grid>
                {/* <TextField  required onChange={e => setInfo({...infoNewDip, nome: e.target.value})} value={infoNewDip.nome} label="Nome" defaultValue="" /> */}
                <TextField required onChange={e => props.changed(e.target.value, 'nome')} value={props.dipendenteEdit.nome} label="nome"/>
            </Grid>
            <Grid>
                {/* ogni volta che il valore di input cambia va a richiamare la funzione nel padre, modificando il dipendenteEdit */}
                {/* <TextField required onChange={e => setInfo({...infoNewDip, cognome: e.target.value})} value={infoNewDip.cognome} label="Cognome" defaultValue=""/> */}
                <TextField required onChange={e => props.changed(e.target.value, 'cognome')} value={props.dipendenteEdit.cognome} label="cognome"/>
            </Grid>
            <Grid item style={{ marginTop: 16 }}>
                <Button className={classes.root} onClick={() => props.clickBack()}> Indietro</Button>
                <Button className={classes.root} onClick={() => onSubmit()}> Salva </Button>
            </Grid>
        </form>
    </div>)
}

export default InputForm