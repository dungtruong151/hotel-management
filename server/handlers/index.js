import { find, create, findById, remove, update,
    findRooms, findRoomById, createRoom, removeRoom, updateRoom,
    findRates, findRateById, createRate, removeRate, updateRate,
    findDeals, findDealById, createDeal, removeDeal, updateDeal
} from '../db/queries.js';

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
    //reservation_id, name, room_number, total_amount, amount_paid, status
    const { reservation_id, name, room_number, total_amount, amount_paid, status } = req.body;
    
    try {
        const product = await create(reservation_id, name, room_number, total_amount, amount_paid, status);
        return res.status(201).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateProduct = async (req, res) => {
    const reservation_id = req.params.id;
    const { name, room_number, total_amount, amount_paid, status } = req.body;
    
    try {
        const product = await update(reservation_id, name, room_number, total_amount, amount_paid, status);
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

////////////////////////
export const getAllRooms = async (req, res) => {
    try {
        const rooms = await findRooms();
        return res.status(200).json(rooms);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getRoom = async (req, res) => {
    const id = req.params.id;
    
    try {
        const room = await findRoomById(id);
        return res.status(200).json(room);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createR = async (req, res) => {
    //room_number, bed_type, room_floor, room_facility, status
    const { room_number, bed_type, room_floor, room_facility, status } = req.body;
    
    try {
        const room = await createRoom(room_number, bed_type, room_floor, room_facility, status);
        return res.status(201).json(room);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateR = async (req, res) => {
    const  room_number = req.params.id;
    const { bed_type, room_floor, room_facility, status } = req.body;
    
    try {
        const room = await updateRoom(room_number, bed_type, room_floor, room_facility, status);
        return res.status(200).json(room);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const deleteR = async (req, res) => {
    const id = req.params.id;
    
    try {
        const room = await removeRoom(id);
        return res.status(200).json(room);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
///////////////////////////////////////////
export const getAllRates = async (req, res) => {
    try {
        const rates = await findRates();
        return res.status(200).json(rates);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getRate = async (req, res) => {
    const id = req.params.id;
    
    try {
        const rate = await findRateById(id);
        return res.status(200).json(rate);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createRA = async (req, res) => {
    //room_type, deals, cancellation_policy, deal_price, rate, availability
    const { room_type, deals, cancellation_policy, deal_price, rate, availability } = req.body;
    
    try {
        const rate = await createRate(room_type, deals, cancellation_policy, deal_price, rate, availability);
        return res.status(201).json(rate);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateRA = async (req, res) => {
    const  room_type = req.params.id;
    const { deals, cancellation_policy, deal_price, rate, availability } = req.body;
    
    try {
        const rate = await updateRate(room_type, deals, cancellation_policy, deal_price, rate, availability);
        return res.status(200).json(rate);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const deleteRA = async (req, res) => {
    const id = req.params.id;
    
    try {
        const rate = await removeRate(id);
        return res.status(200).json(rate);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
/////////////////////////////////
///////////////////////////////////////////
export const getAllDeals = async (req, res) => {
    try {
        const deals = await findDeals();
        return res.status(200).json(deals);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getDeal = async (req, res) => {
    const id = req.params.id;
    
    try {
        const deal = await findDealById(id);
        return res.status(200).json(deal);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createD = async (req, res) => {
    //reference_number, deal_name, reservations_left, end_date, room_type, status
    const { reference_number, deal_name, reservations_left, end_date, room_type, status } = req.body;
    
    try {
        const deal = await createDeal(reference_number, deal_name, reservations_left, end_date, room_type, status);
        return res.status(201).json(deal);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateD = async (req, res) => {
    const  reference_number = req.params.id;
    const { deal_name, reservations_left, end_date, room_type, status } = req.body;
    
    try {
        const deal = await updateDeal(reference_number, deal_name, reservations_left, end_date, room_type, status);
        return res.status(200).json(deal);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const deleteD = async (req, res) => {
    const id = req.params.id;
    
    try {
        const deal = await removeDeal(id);
        return res.status(200).json(deal);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};