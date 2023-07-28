// const Books = require('../model/books_model')
// const Candidates = require('../model/candidate_model')
const Role = require('../model/role_model')

async function isAdmin(req, res, next) {
    try {
        const { admin } = req.query;
        console.log(admin, '***')
        const user = await Role.query().where({ candidate_id: admin })
        const UserRole = user[0].candidate_role ? user[0].candidate_role : '404';
        if (UserRole === 'admin') {
            console.log('Admin here');
            next();
        } else {
            res.status(403).json({ message: 'Access denied. Only admin can access this API.' });
        }
        
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}
module.exports = isAdmin;