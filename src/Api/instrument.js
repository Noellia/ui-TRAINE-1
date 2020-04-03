import Http from '.';

const API = 'api/instrument';

class Instrument {
    static fetch(filters) {
        console.log(filters);
        const filterObj = new URLSearchParams(filters).toString();
        return Http.get(`${API}?${filterObj}`);
    }

    static submitInstrument(instrument) {
        if (!instrument.id) {
            return Http.post(API, {...instrument});
        }
        return Http.put(`${API}/${instrument.id}`, {...instrument});
    }
    static fetchOne(id) {
        return Http.get(`${API}/${id}`);
    }
}

export default Instrument;
