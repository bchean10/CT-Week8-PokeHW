import React, { Component } from 'react'
import * as Yup from 'yup';
import {Formik, Field, Form} from 'formik';
import {Table} from 'react-bootstrap'

const pokeFormSchema = Yup.object().shape({
    "name": Yup.string().required('Required')
})

const pokeFormInitialValues={
    name:''
}

export default class Poke extends Component {

    constructor(){
        super();
        this.state={
            poke:{},
            badRound:false
        }
    }

    handleSubmit=({name})=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                poke: data,
                abilities: data.abilities[0].ability.name,
                sprites:data.sprites.front_shiny,
                badRound:false
            }, ()=>console.log(this.state.poke))
        })
        .catch(error=>{this.setState({badROund:true}); console.error(error);})
    }
    
    render() {
        return (
            <div>
                <h1>Search for Pokemons</h1>
                {this.state.badRound ? <small style={{color:"red"}}> Invalid Pokemon Name</small> : ""}
                <Formik initialValues={pokeFormInitialValues} validationSchema={pokeFormSchema} onSubmit={(values, {resetForm})=>{this.handleSubmit(values); resetForm(pokeFormInitialValues)}}>

                {({ errors, touched })=> (
                    <Form>
                        <label htmlFor="name" className="form-label">Pokemon Name</label>
                        <Field name="name" className="form-control"/>
                        {errors.season && touched.season ? (<div style={{color:'red'}}>{errors.season}</div>):null}

                        <img src={this.state.sprites}/>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                )}
                </Formik>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Abilities</th>
                        <th>Base Experience</th>
                        </tr>
                    </thead>
                    <tbody> 
                        <tr>
                            <td>{this.state.poke.name}</td>
                            <td>{this.state.abilities}</td>
                            <td>{this.state.poke.base_experience}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
