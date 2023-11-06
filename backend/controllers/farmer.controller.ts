import { Request, Response } from "express";
import { prisma } from "../index.ts";


const createFarmer = async (req: Request, res: Response) => {
  try {
    const { contact,name,farms } = req.body;
    const newFarmer = await prisma.farmer.create({
      data: {
        name,
        farms,
        contact
      }
    });
    res.status(200).json(newFarmer);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};



const getFarmer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const farmer = await prisma.farmer.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(farmer);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const updateFarmer = async (req: Request, res: Response) => {
  try {
    const { id, name, farms, contant } = req.body;
    const updatedFarmer = await prisma.farmer.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        farms,
        
      },
    });
    res.status(200).json(updatedFarmer);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const deleteFarmer = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const deletedFarmer = await prisma.farmer.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(deletedFarmer);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const deleteAllFarmer = async (req: Request, res: Response) => {
  try {
    const deletedFarmer = await prisma.farmer.deleteMany();
    res.status(200).json(deletedFarmer);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};


export default {

  createFarmer,
  getFarmer,
  updateFarmer,
  deleteFarmer,
  deleteAllFarmer,

};