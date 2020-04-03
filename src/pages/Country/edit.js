import set from 'lodash/set';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {
    submitCountryDataRequested,
    fetchCountryRequested,
    setCountryData
} from '../../actions/country'

import {
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';


const Country = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    const {id} = useParams();
    const {country} = useSelector(state => state.country.documents);
    const [title, setTitle] = useState('Nuevo Pais');
    const submit = () => {
        dispatch(submitCountryDataRequested())
    }
    console.log(id, country);
    useEffect(
        () => {
            if (id && id.includes('-') && (id.match(/-/g) || []).length === 4) {
                dispatch(fetchCountryRequested(id));
                setTitle('Edición del pais')
            }
        }, [dispatch, id]);



    const handleChange = (value, path) => {
        set(country, path, value);
        dispatch(setCountryData(country)
    )}

    
    
    return (
        <Form onSubmit={() => submit()}>
            <h3 sm={5}>{title}</h3>
                <Row form>
                <Col md={2}>
                    <FormGroup>
                        <Label for="exampleName">Nombre</Label>
                        <Input type="text" name="name" id="exampleName"placeholder="ingrese el nombre" 
                        onChange={({target: {value}}) => handleChange(value, 'name')}
                        value = {country.name}
                        />
                    </FormGroup>
                </Col>
                    <Col md={2}>
                    <FormGroup>
                        <Label for="exampleCode">Codigo</Label>
                        <Input type="text" name="code" id="exampleCode" placeholder="ingrese el codigo"
                        onChange={({target: {value}}) => handleChange(value, 'code')}
                        value = {country.code}
                        />
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

export default Country;