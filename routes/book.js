const router = require("express").Router()

const BooksData = require('../service/books')
const service = new BooksData()
const isAdmin = require('../middlware/role')

//post api  
router.post('/book/books_post/:candidate_id', async (req, res) => {
    try {
        const candidate_id = Number(req.params.candidate_id)
        console.log(candidate_id, typeof candidate_id)
        const data = await service.booksData(candidate_id, req.body)
        res.json(data);
    } catch (err) {
        console.log(err, '11')
        return err
    }
})

//get api  

router.get('/book/books_show/:candidate_id', async (req, res) => {
    try {

        const candidate_id = Number(req.params.candidate_id)
        const data = await service.showBooks(candidate_id)
        res.json(data);
    } catch (err) {
        console.log(err, '11')
        return err
    }
})

// update  
router.put('/book/book_update/:id', async (req, res) => {
    try {
        console.log(  typeof req.query.bookId, '>>>>>>>>>>>>>>>>>')
        const id = Number(req.query.bookId)
        const data = await service.updateBook_detail(id, req.body)
        res.json(data);
    } catch (err) {
        console.log(err, '11')
        return err
    }
})

//  delete
router.delete('/book/books_delete/:id', isAdmin, async (req, res) => {
    try {
        const id = Number(req.params.id)
        const data = await service.deleteBooks(id)
        res.status(200).json({ message: 'Candidate deleted successfully' });
    } catch (err) {
        console.log(err, '11')
        return err
    }
})

module.exports = router;
