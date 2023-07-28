const router = require("express").Router()

const CandidatesData = require('../service/candidate_service')
const service = new CandidatesData()
const isAdmin = require('../middlware/role')


//post api for candidate crete
router.post('/candidate_create', async (req, res) => {
    try {

        const data = await service.createCandidate(req.body)
        res.json(data);
    } catch (err) {
        console.log(err, '11')
        res.json(500);
    }
})

//get api for candidate


router.get('/candidate_show', async (req, res) => {
    try {
        const email = req.query.email;
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const perPage = req.query.perPage ? parseInt(req.query.perPage) : 10;

        const data = await service.showCandidate(email, page, perPage);
        res.json(data);
    } catch (err) {
        console.log(err, '11');
        res.json(500).json({ message: 'internal server error' });
    }
});


// update candidates details
router.put('/candidate_update/:id', async (req, res) => {
    try {
        console.log(req.params, req.body, '>>>>>>>>>>>')
        const data = await service.updateCandidate_detail(req.params.id, req.body)
        res.json(data);
    } catch (err) {
        console.log(err, '11')
        res.json(500).json({ message: 'internal server error' });;
    }
})

// candidate delete
router.delete('/candidate_delete/:id', isAdmin, async (req, res) => {

    const data = await service.deleteCandidate_detail(req.query.id)
    if (data) {

        res.status(200).json({ message: 'Candidate deleted successfully' });
    }
    else {
        res.status(403).json({ message: 'Something happened' });
    }

})

module.exports = router
