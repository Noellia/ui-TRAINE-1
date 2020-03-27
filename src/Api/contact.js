import Http from '.';

const API = 'api/contacts';

class Contact {
    static fetch(filters) {
        console.log(filters);
        const filterObj = new URLSearchParams(filters).toString();
        return Http.get(`${API}?${filterObj}`);
    }
}

export default Contact;
