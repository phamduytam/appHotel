import http from './http-common';

class RoomService {
    getAll() {
        return http.get('/app/rooms');
    }

    getById(id) {
        return http.get('/app/rooms/' + id);
    }

    create(params) {
        return http.post('/app/rooms', params);
    }

    update(id, params) {
        return http.put('/app/rooms/' + id, params);
    }

    delete(id) {
        return http.delete('/app/rooms/' + id);
    }

    getAvailable() {
        return http.get('/app/rooms/available');
    }

    getBooked() {
        return http.get('/app/rooms/booked');
    }

    getNotClean() {
        return http.get('/app/rooms/not-clean');
    }
}

export default new RoomService();