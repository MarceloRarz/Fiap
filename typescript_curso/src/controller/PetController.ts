import { Request, Response } from "express";
import type TipoPet from "../tipos/TipoPet";

let listaDePets: Array<TipoPet> = [];

export default class PetController {
    criaPet(req: Request, res: Response) {
        const {id, nome, especie, idade, adotado} = <TipoPet>req.body;
        const novoPet: TipoPet = {id, nome, especie, idade, adotado};
        listaDePets.push(novoPet);
        return res.status(201).json(novoPet);
  }
}
