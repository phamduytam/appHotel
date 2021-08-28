import http from './http-common';
import { storageService } from './storage.service';

class AuthService {
  login(email, password) {
    return http
      .post("/login", { email, password })
      .then((response) => {
        if (response.data.access_token) {
          storageService.storeData('user', response.data);
        }

        return response.data;
      });
  }

  logout() {
    storageService.clearAll();
  }
}

export default new AuthService();