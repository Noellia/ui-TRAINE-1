import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    submitContactDataRequested
} from '../../actions/contact'

const New = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    const [contacts] = useSelector(state => state.contact.documents.contacts);
    if (props.match.params.code) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => dispatch(submitContactDataRequested(props.match.params)), [
            dispatch,
            props.match.params
        ]);
    }

    


    return (
        <div>
            {JSON.stringify(contacts)}
        </div>
    )
        
};

export default New;