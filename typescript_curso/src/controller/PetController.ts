import { Request, Response } from "express";
import type TipoPet from "../tipos/TipoPet";
import EnumEspecies from "../enum/EnumEspecies";

let listaDePets: Array<TipoPet> = [];
let id: number=0 ;

function geraId() {
  id = id + 1;
  return id;
}

export default class PetController {

  criaPet(req: Request, res: Response) {
        const {nome, especie, dataNascimento, adotado} = <TipoPet>req.body;
        //const novoPet: TipoPet = {id, nome, especie, idade, adotado};

        if (!adotado || !especie || !nome || !dataNascimento) {
          return res
            .status(400)
            .json({ erro: "Todos os campos são obrigatórios." });
        }

        if (!Object.values(EnumEspecies).includes(especie)) {
          return res.status(400).json({erro: "Especie inválida"});
        }

        const novoPet: TipoPet = {
          id: Number(geraId()),
          dataNascimento,
          adotado,
          especie,
          nome,
        };        

        listaDePets.push(novoPet);
        return res.status(201).json(novoPet);
  }

  listaPets(req: Request, res: Response) {
    return res.status(200).json(listaDePets);
  }

  atualizaPet(req: Request, res: Response) {
    const {id} = req.params;
    const {adotado, especie, dataNascimento, nome} = req.body as TipoPet;
    const pet = listaDePets.find((pet) => pet.id === Number(id));

    if (!pet) {
      return res.status(404).json({erro: "Pet não encontrado"});
    }

    pet.nome = nome;
    pet.dataNascimento = dataNascimento;
    pet.especie = especie;
    pet.adotado = adotado;

    return res.status(200).json(pet);
  }

  deletePet(req: Request, res: Response) {
    const {id} = req.params;
    const pet = listaDePets.find((pet) => pet.id === Number(id));
    
    if (!pet) {
      return res.status(404).json({erro: "Pet não encontrado"});
    }

    const index = listaDePets.indexOf(pet);
    listaDePets.splice(index, 1);
    return res.status(200).json({message: "Pet deletado com sucesso"});
  }


}


