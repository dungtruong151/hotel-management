import { find, create, findById, remove, update } from '../db/queries.js';

export const getAllProducts = async (req, res) => {
    try {
        const products = await find();
        return res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getProduct = async (req, res) => {
    const id = req.params.id;
    
    try {
        const product = await findById(id);
        return res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createProduct = async (req, res) => {
    const { name, address, price, size } = req.body;
    
    try {
        const product = await create(name, address, price, size);
        return res.status(201).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateProduct = async (req, res) => {
    const id = req.params.id;
    const { name, address, price, size } = req.body;
    
    try {
        const product = await update(id, name, address, price, size);
        return res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    
    try {
        const product = await remove(id);
        return res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
