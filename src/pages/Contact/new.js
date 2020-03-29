import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    submitContactDataRequested
} from '../../actions/contact'

import {
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';


const New = (props) => {
    // console.log(props);
    // const dispatch = useDispatch();
    // const [contacts] = useSelector(state => state.contact.documents.contacts);
    // if () {
    //     // eslint-disable-next-line react-hooks/rules-of-hooks
    //     useEffect(() => dispatch(submitContactDataRequested()), [
    //         dispatch,
    //         props.match.params
    //     ]);
    // }
    

        return (
            <Form>
              <Row form>
                <Col md={6}>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="exampleAddress">Address</Label>
                        <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleAddress2">Address 2</Label>
                        <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
                    </FormGroup>
                    <Row form>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="exampleCity">City</Label>
                            <Input type="text" name="city" id="exampleCity"/>
                        </FormGroup>
                        </Col>
                        <Col md={4}>
                        <FormGroup>
                            <Label for="exampleState">State</Label>
                            <Input type="text" name="state" id="exampleState"/>
                        </FormGroup>
                        </Col>
                        <Col md={2}>
                        <FormGroup>
                            <Label for="exampleZip">Zip</Label>
                            <Input type="text" name="zip" id="exampleZip"/>
                        </FormGroup>  
                    </Col>
                </Row>
            </Form>
        )
};     


export default New;