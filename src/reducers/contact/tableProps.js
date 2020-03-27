import find from 'lodash/find';
import {
    SORT_CONTACT
} from '../../actions/contact';

const initialState = {
    columns: [
        'first_name',
        'last_name',
        'job_title',
        'race',
        'createdAt',
        'actions'
    ],
    headers: [
        {
            id: 'first_name',
            label: 'Nombre',
            sort: 'desc'
        },
        {
            id: 'last_name',
            label: 'Apellido',
            sort: 'desc'
        },
        {
            id: 'job_title',
            label: 'Titulo',
            sort: 'desc'
        },
        {
            id: 'race',
            label: 'Raza',
            sort: 'desc'
        },
        {
            id: 'createdAt',
            label: 'Creado',
            sort: 'desc'
        },
        {
            id: 'actions',
            label: 'Acciones'
        }
    ]
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SORT_CONTACT:
            const sortedOption = find(state.headers, header => header.id === action.sort.id);
            sortedOption.sort = sortedOption.sort === 'desc' ? 'asc' : 'desc';
            return state
        default:
            return state;
    }
}