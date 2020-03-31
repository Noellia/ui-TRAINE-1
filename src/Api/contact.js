import Http from '.';

const API = 'api/contacts';

class Contact {
    static fetch(filters) {
        console.log(filters);
        const filterObj = new URLSearchParams(filters).toString();
        return Http.get(`${API}?${filterObj}`);
    }
    static submitContact(contact) {
        if (!contact.id) {
            return Http.post(API, {...contact});
        }
        return Http.put(`${API}/${contact.id}`, {...contact});
    }
    static fetchOne(id) {
        return Http.get(`${API}/${id}`);
    }
}

export default Contact;
