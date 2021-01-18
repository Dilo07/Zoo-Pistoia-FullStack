import React from 'react'
import axios from 'axios';
import MostraAnimali from './mostraAnimali'
import InputFormAnimali from './inputFormAnimali'


class Animali extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            error: null,
            isloaded: false,
            viewForm: false,
            animali: [],
            animaleEdit: []
        }
    }
    //funzione che si avvia non appena è stato inizializzato lo stato
    componentDidMount(){
        //chiamata get di tutti gli animali
        axios.get('http://localhost:3001/Animali/getAll')
        .then(result => {
            this.setState({
                isloaded: true,
                animali: result.data
            })
        },
        (error) => {
            this.setState({
              isloaded: true,
              error
            })
          }
        );
    }    

    changeAnimaleHandler(val, key) {
        const anm = this.state.animaleEdit
        switch(key){
            case ('tipo_animale'):
                anm.tipo_animale = val
                this.setState({
                    animaleEdit: anm
                })
            break
            case ('id_recinzione'):
                anm.id_recinzione = val
                this.setState({
                    animaleEdit: anm
                })
            break
            default: break
        }
    }

    switchForm(){
        this.setState({
            viewForm: !this.state.viewForm,
            animaleEdit: []
        })
    }

    addAnimale(){
        //Inizialitto isloade a falso in modo da visualizzare il caricamento (Loading..)
        this.setState({
            isloaded: false
        })

        const animali = this.state.animali
        axios.post('http://localhost:3001/Animali/newAnimale',
        {tipo_animale: this.state.animaleEdit.tipo_animale, id_recinzione: this.state.animaleEdit.id_recinzione})
        .then(response => {
            const newanimali = animali.concat({ id: response.data, tipo_animale: this.state.animaleEdit.tipo_animale, id_recinzione: this.state.animaleEdit.id_recinzione})
            this.setState({
                viewForm: !this.state.viewForm,
                isloaded: true,
                animali: newanimali
            })
        },
        (error) => {
            this.setState({
                isloaded: true,
                error
            })
        })
    }

    deleteAnimale(id){
        this.setState({
            isloaded: false
        })
        const animali = this.state.animali
        axios.delete('http://localhost:3001/Animali/deleteAnimale/' + id)
        .then(result => {
            const newanimali = animali.filter((animale) => animale.id !== id)
                this.setState({
                    animali: newanimali,
                    isloaded: true
                })
            },
            (error) => {
                this.setState({
                  isloaded: true,
                  error
            })
        })
    }

    render(){
        const {animali,animaleEdit,error,isloaded, viewForm} = this.state
        /* const inputForm */
        const InputForm = <InputFormAnimali 
        animaleEdit={animaleEdit}
        clickBack={() => this.switchForm()}
        clickSaveAdd={() => this.addAnimale()}
        changed={(val,key) => this.changeAnimaleHandler(val,key)}/>

        const Dati = <MostraAnimali 
        animali={animali}
        clickAdd={() => this.switchForm()} 
        clickDelete={(id) => this.deleteAnimale(id)}/>
        return(
            <>
                { error ? <div className="CenterAndTop"> error: {error.message}</div> 
                : !isloaded ? <div className="CenterAndTop"> Loading...</div>
                : viewForm ? <div className="CenterAndTop"> {InputForm} </div>
                : <div> {Dati} </div>}
            </>
        )
    }
}

export default Animali