import API from "@/api/webApi";

export const tests = async () => {
    const { data } = await API.get('testes');
    return data;
};

export const questions = async () => {
    const { data } = await API.get('perguntas');
    return data;
};

export const answers = async () => {
    const { data } = await API.get('respostas');
    return data;
};
