import set from 'lodash/set';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {
    submitContactDataRequested,
    fetchContactRequested,
    setContactData
} from '../../actions/contact'

import {
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';


const Contact = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    const {id} = useParams();
    const {contact} = useSelector(state => state.contact.documents);
    const [title, setTitle] = useState('Nuevo contacto');
    const submit = () => {
        dispatch(submitContactDataRequested())
    }
    console.log(id, contact);
    useEffect(
        () => {
            if (id && id.includes('-') && (id.match(/-/g) || []).length === 4) {
                dispatch(fetchContactRequested(id));
                setTitle('Edición de contacto')
            }
        }, [dispatch, id]);

    // const setContact = contact => dispatch(setContactData(contact));

    const handleChange = (value, path) => {
        set(contact, path, value);
        dispatch(setContactData(contact)
    )}

    
    
    return (
        <Form onSubmit={() => submit()}>
            <h3 sm={5}>{title}</h3>
                <Row form>
                <Col md={2}>
                    <FormGroup>
                        <Label for="exampleName">Nombre</Label>
                        <Input type="text" name="first_name" id="exampleName"placeholder="ingrese su nombre" 
                        onChange={({target: {value}}) => handleChange(value, 'first_name')}
                        />
                    </FormGroup>
                </Col>
                    <Col md={2}>
                    <FormGroup>
                        <Label for="exampleLastName">Apellido</Label>
                        <Input type="text" name="last_name" id="exampleLastName" placeholder="ingrese su apellido" onChange={({target: {value}}) => handleChange(value, 'last_name')}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row form>
                <Col md={4}>
                <FormGroup>
                    <Label for="exampleJobTitle">Titulo</Label>
                    <Input type="text" name="job_title" id="exampleJobTitle" placeholder="ingrese su titulo universitario" onChange={({target: {value}}) => handleChange(value, 'job_title')}/>
                </FormGroup>
                </Col>
            </Row>
            <Row form>
                <Col md={4}>
                <FormGroup>
                    <Label for="exampleRace">Nacionalidad</Label>
                    <Input type="text" name="race" id="exampleRace" placeholder="ingrese su nacionalidad" onChange={({target: {value}}) => handleChange(value, 'race')}/>
                </FormGroup>
                </Col>
            </Row>
            <Row form>
                <Col>
                    <Button onClick={() => submit()}> Guardar </Button>
                </Col>
            </Row>
        </Form>
    )
};     


export default Contact;