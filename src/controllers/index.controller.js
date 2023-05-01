import { pool } from '../db.js'

export const getIndex = async (req, res) => {
    console.log("Connection to api")
    const [result] = await pool.query('SELECT 1 + 1 AS RESULT;')
    res.json(result[0])
}