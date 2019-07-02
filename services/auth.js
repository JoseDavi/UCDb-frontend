const TOKEN = "@token";
const EMAIL = "@email";

const salvarToken = (token) => {
    sessionStorage.setItem(TOKEN, token)
}

const salvarEmail = (email) => {
    sessionStorage.setItem(EMAIL, email)
}

const getToken = () => {
    return sessionStorage.getItem(TOKEN);
}

const getEmail = () => {
    return sessionStorage.getItem(EMAIL);
}

export { salvarEmail, salvarToken, getEmail, getToken};