// Aqui definimos que a BASE_URL da aplicação tem a intensão de pegar a variável de ambiente
//  definida no ambiente de deploy, caso ela nào exista, ele usa a url do backend local
// (o prefixo REACT_APP_*** é o padrão esperado pelo ambiente (netlify)), ou seja, quando a
// aplicação estiver de fato no ambiente em nuvem, a url REACT_APP_BACKEND_URL sempre será usada
// pois a mesma estará definida, já em ambiente local, será usado a url do host local
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';