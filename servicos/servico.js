import colecaoUF from "../dados/dados.js";

export const buscarUfs = () => {
    return colecaoUF;
}

export const buscarUfsPorNome = (nomeUf) => {
    return colecaoUF.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
};

export const buscarUfPorId = (id) => {
    const idUF = parseInt(id);
    return colecaoUF.find(uf => uf.id === idUF);
}
