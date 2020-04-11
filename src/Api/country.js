import Http from '.';

const API = 'api/countries';

class Country {
    static fetch(filters) {
        console.log(filters);
        const filterObj = new URLSearchParams(filters).toString();
        return Http.get(`${API}?${filterObj}`);
    }
    static submitCountry(country) {
        if (!country.id) {
            return Http.post(API, {...country});
        }
        return Http.put(`${API}/${country.id}`, {...country});
    }
    static fetchOne(id) {
        return Http.get(`${API}/${id}`);
    }
    static deleteCountry(id) {
        return Http.delete(`${API}/${id}`);
    }
}

export default Country;
