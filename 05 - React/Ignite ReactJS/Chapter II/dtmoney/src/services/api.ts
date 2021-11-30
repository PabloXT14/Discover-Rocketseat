import axios from "axios";

//Instância para setar informações padrão de todas as requisições
export const api = axios.create({
    baseURL: "api"//url de todas as requisições
})

