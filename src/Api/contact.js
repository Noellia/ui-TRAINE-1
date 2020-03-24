import Http from '.';

const API = 'api/contacts';

class Contact {
    static fetch() {
        return Http.get(API);
    }
}

export default Contact;
