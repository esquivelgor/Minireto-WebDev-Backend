import { Router } from "express";
import { getComments, getComment, createComment, patchComment, deleteComment } from "../controllers/comments.controller.js"

const router = Router()

// ------------ Get endpoings ------------
router.get('/comments', getComments)

router.get('/comments/:id', getComment)


// ------------ Post endpoings ------------
router.post('/comments', createComment)


// ------------ patch endpoings ------------
router.patch('/comments/:id', patchComment)


// ------------ Delete endpoings ------------
router.delete('/comments/:id', deleteComment)


export default router 