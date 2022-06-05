import { UserModel } from "@models/UserModel";
import { Request, Response } from "express";

export let findAllUsers = async (req: Request, res: Response) => {
    let users = await UserModel.findAll();
    users.length > 0 ? res.status(200).json(users) : res.status(204).send();
}

export let findOneUser = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const user = await UserModel.findOne({
        where: {
            id: userId
        }
    });

    user ? res.status(200).json(user) : res.status(204).send();
}

export let createUser = async (req: Request, res: Response) => {
    const user = await UserModel.create(req.body)
    res.status(201).json(user);
}

export let updateUser = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const user = await UserModel.update(req.body, {
        where: {
            id: userId
        }
    });

    res.status(204).send();

}