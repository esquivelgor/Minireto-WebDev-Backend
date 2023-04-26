import { pool } from "../db.js"

// --------------------------- Get endpoints ---------------------------

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employee;')
        res.send(rows)
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" })
    }
}

export const getEmployee = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?;', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({ message: "Employee not found" })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" })
    }
}

// --------------------------- Post endpoints ---------------------------

export const createEmployees = async (req, res) => {
    try {
        const { name, salary } = req.body
        const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?,?);', [name, salary])
        if (rows.length <= 0) return res.status(404).json({ message: "Employees not found" })
        res.send({
            id: rows.insertId,
            name,
            salary
        })
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" })
    }
}

// --------------------------- Delete endpoints ---------------------------

export const deleteEmployees = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?;', [req.params.id])
        if (result.affectedRows <= 0) return res.status(404).json({ message: "Employee not found" })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" })
    }
}

// --------------------------- patch endpoints ---------------------------

export const patchEmployees = async (req, res) => {
    const { id } = req.params
    const { name, salary } = req.body
    try {
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?;', [name, salary, id])
        if (result.affectedRows <= 0) return res.status(404).json({ message: "Employee not found" })

        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?;', [id])


        console.log(rows[0])

        res.json('Received')

    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" })
    }
}

