import Http from '.';

const API = 'api/cars';

class Car {
    static fetch() {
        return Http.get(API);
    }
}

export default Car;
