import EnumEspecies from "../enum/EnumEspecies";

type TipoPet = {
    id: number;
    nome: string;
    especie: EnumEspecies;
    dataNascimento: Date;
    adotado: boolean;   
}

export default TipoPet;