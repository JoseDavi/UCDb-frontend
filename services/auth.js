const TOKEN = "@token";
const EMAIL = "@email";

const salvarToken = (token) => {
    localStorage.setItem(TOKEN, token)
}

const salvarEmail = (email) => {
    localStorage.setItem(EMAIL, email)
}

const getToken = () => {
    return localStorage.getItem(TOKEN);
}

const getEmail = () => {
    return localStorage.getItem(EMAIL);
}

export { salvarEmail, salvarToken, getEmail, getToken};