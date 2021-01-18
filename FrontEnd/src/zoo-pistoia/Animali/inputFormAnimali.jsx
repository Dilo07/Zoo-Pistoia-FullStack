import React, {useRef} from 'react'
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



const InputFormAnimali = (props) => {
    const classes = useStyles();
    const input = useRef(props.animaleEdit)

    const onSubmit = () => {
        if(!input.current.id){
            // Verifica che il campo non sia vuoto o undefined
            if(input.current.tipo_animale === undefined || input.current.tipo_animale === '' || input.current.id_recinzione === undefined || input.current.id_recinzione === ''  ){
                alert('Inserisci un valore')
            }
            else{
                props.clickSaveAdd()
            }
        }
        else{
            if(input.current.tipo_animale === '' || input.current.id_recinzione === '' ){
                alert('Inserisci un valore')
            }
            else{
                props.clickSaveEdit()
            }
        }
    }

    return (
        <div>
            <h1> Inserisci i dati del nuovo animale</h1>
            <form autoComplete="off" /* onSubmit={() => onSubmit()} */>
            <Grid>
                {/* <TextField  required onChange={e => setInfo({...infoNewDip, nome: e.target.value})} value={infoNewDip.nome} label="Nome" defaultValue="" /> */}
                <TextField required onChange={e => props.changed(e.target.value, 'tipo_animale')} value={input.current.tipo_animale} label="tipo_animale"/>
            </Grid>
            <Grid>
                {/* ogni volta che il valore di input cambia va a richiamare la funzione nel padre, modificando il dipendenteEdit */}
                {/* <TextField required onChange={e => setInfo({...infoNewDip, cognome: e.target.value})} value={infoNewDip.cognome} label="Cognome" defaultValue=""/> */}
                <TextField required onChange={e => props.changed(e.target.value, 'id_recinzione')} value={input.current.id_recinzione} label="id_recinzione"/>
            </Grid>
            <Grid item style={{ marginTop: 16 }}>
                <Button className={classes.root} onClick={() => props.clickBack()}> Indietro</Button>
                <Button className={classes.root} onClick={() => onSubmit()}> Salva </Button>
            </Grid>
            </form>
        </div>
    )
}

export default InputFormAnimali
