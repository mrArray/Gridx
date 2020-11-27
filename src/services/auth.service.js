import axios from "axios";

    let username = 'nura';
    let password = 'Pass@1234';
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')


class AuthService {

  //login(): POST {username, password} & save JWT to Local Storage
  login(username, password) {
    return axios.post('http://18.192.109.219/accounts/api/jwt/' , { username,  password },  { headers: { 'Authorization': `Basic ${token}` }, }   )
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }


//logout(): remove JWT from Local Storage

  logout() {
    localStorage.removeItem("user");
  }

  // //register(): POST {username, email, password}
  // register(username, email, password) {
  //   return axios.post(API_URL + "signup", {
  //     username,
  //     email,
  //     password
  //   });
  // }


  //getCurrentUser(): get stored user information (including JWT)
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();

//BoardUser, BoardModerator, BoardAdmin components will be displayed by state user.roles. 
//In these components, we use user.service to access protected resources from Web API.