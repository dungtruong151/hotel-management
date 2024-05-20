import { pool } from "./index.js";

export const find = async () => {
    const QUERY = 'SELECT * FROM motels';
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY);
        console.log('Found motels', result);

        return result;
    } catch (error) {
        console.error('Failed to find motels', error);
        throw error;
    }
}

export const findById = async (id) => {
    const QUERY = 'SELECT * FROM motels WHERE id = ?';
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [id]);
        console.log('Found motel', result);

        return result[0];
    } catch (error) {
        console.error('Failed to find motel', error);
        throw error;
    }
}

export const create = async (motel_name, motel_address, motel_price, motel_size) => {
    const QUERY = 'INSERT INTO motels (name, address, price, size) VALUES (?, ?, ?, ?)';
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [motel_name, motel_address, motel_price, motel_size]);
        console.log('Created motel', result);

        return result[0];
    } catch (error) {
        console.error('Failed to create motel', error);
        throw error;
    }
}

export const update = async (id, motel_name, motel_address, motel_price, motel_size) => {
    const QUERY = 'UPDATE motels SET name = ?, address = ?, price = ?, size = ? WHERE id = ?';
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [motel_name, motel_address, motel_price, motel_size, id]);
        console.log('Updated motel', result);

        return result[0];
    } catch (error) {
        console.error('Failed to update motel', error);
        throw error;
    }
}

export const remove = async (id) => {
    const QUERY = 'DELETE FROM motels WHERE id = ?';
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [id]);
        console.log('Deleted motel', result);

        return result[0];
    } catch (error) {
        console.error('Failed to delete motel', error);
        throw error;
    }
}
