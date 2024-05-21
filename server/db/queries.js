import { pool } from "./index.js";

export const find = async () => {
    const QUERY = 'SELECT * FROM guest';
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY);
        //console.log('Found motels', result);

        return result;
    } catch (error) {
        console.error('Failed to find motels', error);
        throw error;
    }
}

export const findById = async (id) => {
    const QUERY = 'SELECT * FROM guest WHERE reservation_id = ?';
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [id]);
        //console.log('Found motel', result);

        return result[0];
    } catch (error) {
        console.error('Failed to find motel', error);
        throw error;
    }
}

export const create = async (reservation_id, name, room_number, total_amount, amount_paid, status) => {
    const QUERY = 'INSERT INTO guest (reservation_id, name, room_number, total_amount, amount_paid, status) VALUES (?, ?, ?, ?, ?, ?)';
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [reservation_id, name, room_number, total_amount, amount_paid, status]);
        //console.log('Created motel', result);

        return result[0];
    } catch (error) {
        console.error('Failed to create motel', error);
        throw error;
    }
}

export const update = async (reservation_id, name, room_number, total_amount, amount_paid, status) => {
    const QUERY = 'UPDATE guest SET name = ?, room_number = ?, total_amount = ?, amount_paid = ?, status = ? WHERE reservation_id = ?';
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [name, room_number, total_amount, amount_paid, status, reservation_id]);
        //console.log('Updated motel', result);

        return result[0];
    } catch (error) {
        console.error('Failed to update motel', error);
        throw error;
    }
}

export const remove = async (id) => {
    const QUERY = 'DELETE FROM guest WHERE reservation_id = ?';
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
