import { pool } from "../db.js"

// --------------------------- Get endpoints ---------------------------

export const getComments = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM comments;')
        res.send(rows)
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" })
    }
}

export const getComment = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM comments WHERE id = ?;', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({ message: "Comment not found" })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" })
    }
}

// --------------------------- Post endpoints ---------------------------

export const createComment = async (req, res) => {
    try {
        const { user, description } = req.body
        const [rows] = await pool.query('INSERT INTO comments (user, description, currentDate) VALUES (?,?, currentDate());', [user, description])
        if (rows.length <= 0) return res.status(404).json({ message: "Comments not found" })
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

export const deleteComment = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM comments WHERE id = ?;', [req.params.id])
        if (result.affectedRows <= 0) return res.status(404).json({ message: "Comment not found" })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" })
    }
}

// --------------------------- patch endpoints ---------------------------

export const patchComment = async (req, res) => {
    const { id } = req.params
    const { user, description } = req.body
    try {
        const [result] = await pool.query('UPDATE comments SET user = IFNULL(?, user), description = IFNULL(?, description) WHERE id = ?;', [user, description, id])
        if (result.affectedRows <= 0) return res.status(404).json({ message: "Comment not found" })

        const [rows] = await pool.query('SELECT * FROM comments WHERE id = ?;', [id])


        console.log(rows[0])

        res.json('Received')

    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" })
    }
}

