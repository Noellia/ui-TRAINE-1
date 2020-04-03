import set from 'lodash/set';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {
    submitInstrumentDataRequested,
    fetchInstrumentRequested,
    setInstrumentData
} from '../../actions/instrument'

import {
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';


const Instrument = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    const {id} = useParams();
    const {instrument} = useSelector(state => state.instrument.documents);
    const [title, setTitle] = useState('Nuevo instrumento');
    const submit = () => {
        dispatch(submitInstrumentDataRequested())
    }
    console.log(id, instrument);
    useEffect(
        () => {
            if (id && id.includes('-') && (id.match(/-/g) || []).length === 4) {
                dispatch(fetchInstrumentRequested(id));
                setTitle('Edición de instrumento')
            }
        }, [dispatch, id]);



    const handleChange = (value, path) => {
        set(instrument, path, value);
        dispatch(setInstrumentData(instrument)
    )}

    
    
    return (
        <Form onSubmit={() => submit()}>
            <h3 sm={5}>{title}</h3>
                <Row form>
                <Col md={2}>
                    <FormGroup>
                        <Label for="exampleHexcode">Hexcode</Label>
                        <Input type="text" name="hexcode" id="exampleHexcode"placeholder="ingrese el codigo hexcode" 
                        onChange={({target: {value}}) => handleChange(value, 'hexcode')}
                        value = {instrument.hexcode}
                        />
                    </FormGroup>
                </Col>
                    <Col md={2}>
                    <FormGroup>
                        <Label for="exampleFamily">Tipo</Label>
                        <Input type="text" name="family" id="exampleFamily" placeholder="ingrese familia de instrumento, ej: vientos, cuerdas,etc.." 
                        onChange={({target: {value}}) => handleChange(value, 'family')}
                        value = {instrument.family}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row form>
                <Col md={4}>
                <FormGroup>
                    <Label for="exampleInstrument">Instrumento</Label>
                    <Input type="text" name="instrument" id="exampleInstrument" placeholder="ingrese instrumento" 
                    onChange={({target: {value}}) => handleChange(value, 'instrumento')}
                    value = {instrument.instrument}
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


export default Instrument;