import { pool } from "./index.js";

export const find = async () => {
  const QUERY = "SELECT * FROM guest";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY);
    //console.log('Found motels', result);

    return result;
  } catch (error) {
    console.error("Failed to find motels", error);
    throw error;
  }
};

export const findById = async (id) => {
  const QUERY = "SELECT * FROM guest WHERE reservation_id = ?";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [id]);
    //console.log('Found motel', result);

    return result[0];
  } catch (error) {
    console.error("Failed to find motel", error);
    throw error;
  }
};

export const create = async (
  reservation_id,
  name,
  room_number,
  total_amount,
  amount_paid,
  status
) => {
  const QUERY =
    "INSERT INTO guest (reservation_id, name, room_number, total_amount, amount_paid, status) VALUES (?, ?, ?, ?, ?, ?)";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [
      reservation_id,
      name,
      room_number,
      total_amount,
      amount_paid,
      status,
    ]);
    //console.log('Created motel', result);

    return result[0];
  } catch (error) {
    console.error("Failed to create motel", error);
    throw error;
  }
};

export const update = async (
  reservation_id,
  name,
  room_number,
  total_amount,
  amount_paid,
  status
) => {
  const QUERY =
    "UPDATE guest SET name = ?, room_number = ?, total_amount = ?, amount_paid = ?, status = ? WHERE reservation_id = ?";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [
      name,
      room_number,
      total_amount,
      amount_paid,
      status,
      reservation_id,
    ]);
    //console.log('Updated motel', result);

    return result[0];
  } catch (error) {
    console.error("Failed to update motel", error);
    throw error;
  }
};

export const remove = async (id) => {
  const QUERY = "DELETE FROM guest WHERE reservation_id = ?";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [id]);
    console.log("Deleted motel", result);

    return result[0];
  } catch (error) {
    console.error("Failed to delete motel", error);
    throw error;
  }
};
//////////////////////////////////////
export const findRooms = async () => {
  const QUERY = "SELECT * FROM room";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY);
    //console.log('Found motels', result);

    return result;
  } catch (error) {
    console.error("Failed to find rooms", error);
    throw error;
  }
};

export const findRoomById = async (id) => {
  const QUERY = "SELECT * FROM room WHERE room_number = ?";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [id]);
    //console.log('Found motel', result);

    return result[0];
  } catch (error) {
    console.error("Failed to find room", error);
    throw error;
  }
};

export const createRoom = async (
  room_number,
  bed_type,
  room_floor,
  room_facility,
  status
) => {
  const QUERY =
    "INSERT INTO room (room_number, bed_type, room_floor, room_facility, status) VALUES (?, ?, ?, ?, ?)";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [
      room_number,
      bed_type,
      room_floor,
      room_facility,
      status,
    ]);
    //console.log('Created motel', result);

    return result[0];
  } catch (error) {
    console.error("Failed to create room", error);
    throw error;
  }
};

export const updateRoom = async (
  room_number,
  bed_type,
  room_floor,
  room_facility,
  status
) => {
  const QUERY =
    "UPDATE room SET bed_type = ?, room_floor = ?, room_facility = ?, status = ? WHERE room_number = ?";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [
      bed_type,
      room_floor,
      room_facility,
      status,
      room_number,
    ]);
    //console.log('Updated motel', result);

    return result[0];
  } catch (error) {
    console.error("Failed to update room", error);
    throw error;
  }
};

export const removeRoom = async (id) => {
  const QUERY = "DELETE FROM room WHERE room_number = ?";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [id]);
    console.log("Deleted room", result);

    return result[0];
  } catch (error) {
    console.error("Failed to delete room", error);
    throw error;
  }
};
//////////////////////////////////////////////
export const findRates = async () => {
  const QUERY = "SELECT * FROM rate";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY);
    //console.log('Found motels', result);

    return result;
  } catch (error) {
    console.error("Failed to find rates", error);
    throw error;
  }
};

export const findRateById = async (id) => {
  const QUERY = "SELECT * FROM rate WHERE room_type = ?";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [id]);
    //console.log('Found motel', result);

    return result[0];
  } catch (error) {
    console.error("Failed to find rate", error);
    throw error;
  }
};

export const createRate = async (
  room_type,
  deals,
  cancellation_policy,
  deal_price,
  rates,
  availability
) => {
  const QUERY =
    "INSERT INTO rate (room_type, deals, cancellation_policy, deal_price, rates, availability) VALUES (?, ?, ?, ?, ?, ?)";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [
      room_type,
      deals,
      cancellation_policy,
      deal_price,
      rates,
      availability,
    ]);
    //console.log('Created motel', result);

    return result[0];
  } catch (error) {
    console.error("Failed to create rate", error);
    throw error;
  }
};

export const updateRate = async (
  room_type,
  deals,
  cancellation_policy,
  deal_price,
  rates,
  availability
) => {
  const QUERY =
    "UPDATE rate SET deals = ?, cancellation_policy = ?, deal_price = ?, rates = ?, availability = ? WHERE room_type = ?";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [
      deals,
      cancellation_policy,
      deal_price,
      rates,
      availability,
      room_type,
    ]);
    //console.log('Updated motel', result);

    return result[0];
  } catch (error) {
    console.error("Failed to update rate", error);
    throw error;
  }
};

export const removeRate = async (id) => {
  const QUERY = "DELETE FROM rate WHERE room_type = ?";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [id]);
    console.log("Deleted rate", result);

    return result[0];
  } catch (error) {
    console.error("Failed to delete rate", error);
    throw error;
  }
};

////////////////////////////
export const findDeals = async () => {
  const QUERY = "SELECT * FROM deal";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY);
    //console.log('Found motels', result);

    return result;
  } catch (error) {
    console.error("Failed to find deals", error);
    throw error;
  }
};

export const findDealById = async (id) => {
  const QUERY = "SELECT * FROM deal WHERE reference_number = ?";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [id]);
    //console.log('Found motel', result);

    return result[0];
  } catch (error) {
    console.error("Failed to find deal", error);
    throw error;
  }
};

export const createDeal = async (
  reference_number,
  deal_name,
  reservations_left,
  end_date,
  room_type,
  status
) => {
  const QUERY =
    "INSERT INTO deal (reference_number, deal_name, reservations_left, end_date, room_type, status) VALUES (?, ?, ?, ?, ?, ?)";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [
      reference_number,
      deal_name,
      reservations_left,
      end_date,
      room_type,
      status,
    ]);
    //console.log('Created motel', result);

    return result[0];
  } catch (error) {
    console.error("Failed to create deal", error);
    throw error;
  }
};

export const updateDeal = async (
  reference_number,
  deal_name,
  reservations_left,
  end_date,
  room_type,
  status
) => {
  const QUERY =
    "UPDATE deal SET deal_name = ?, reservations_left = ?, end_date = ?, room_type = ?, status = ? WHERE reference_number = ?";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [
      deal_name,
      reservations_left,
      end_date,
      room_type,
      status,
      reference_number,
    ]);
    //console.log('Updated motel', result);

    return result[0];
  } catch (error) {
    console.error("Failed to update deal", error);
    throw error;
  }
};

export const removeDeal = async (id) => {
  const QUERY = "DELETE FROM deal WHERE reference_number = ?";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [id]);
    console.log("Deleted deal", result);

    return result[0];
  } catch (error) {
    console.error("Failed to delete deal", error);
    throw error;
  }
};

//find rooms by Bed Type and Status = Available
export const findRoomsbyBedType = async (bed_type) => {
  const QUERY =
    "SELECT * FROM room WHERE bed_type = ? AND status = 'Available'";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [bed_type]);
    //console.log('Found motels', result);

    return result;
  } catch (error) {
    console.error("Failed to find rooms", error);
    throw error;
  }
};
