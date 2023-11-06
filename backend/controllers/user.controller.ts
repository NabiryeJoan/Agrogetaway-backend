import { Request, Response } from "express";
import { prisma } from "../index.ts";


const createUser = async (req: Request, res: Response) => {
  try {
    const {name , contact,email} = req.body;
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        contact
      }
    });
    res.status(200).json(newUser);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};



const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id, name, email, contant } = req.body;
    const updatedUser = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        email,
        
      },
    });
    res.status(200).json(updatedUser);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const deletedUser = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(deletedUser);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const deleteAllUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await prisma.user.deleteMany();
    res.status(200).json(deletedUser);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};


export default {

  createUser,
  getUser,
  updateUser,
  deleteUser,
  deleteAllUser,

};