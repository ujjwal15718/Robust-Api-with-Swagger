const Candidates = require('../model/candidate_model')
const Books = require('../model/books_model')
const Role = require('../model/role_model')


class CandidatesData {
    async createCandidate(data) {
        try {
            const store = await Candidates.query().insert({ name: data.name, email: data.email })

        }
        catch (err) {
            return err
        }


    }


    async showCandidate(email, page = 1, perPage = 10) {
        try {
            let query = Candidates.query().withGraphFetched({ books: true, role: true });

            if (email !== undefined) {
                query = query.where('email', email);
            }

            // Count total items before pagination
            const totalItems = await query.resultSize();

            // Apply pagination
            const offset = (page - 1) * perPage;
            query = query.page(offset, perPage);

            const getData = await query;
            return { data: getData, totalItems };
        } catch (err) {
            console.log(err);
            return err;
        }
    }



    async updateCandidate_detail(id, data) {
        try {
            const getData = await Candidates.query().update({ name: data.name, email: data.email }).where({ id })
            console.log(getData)
            return getData;
        } catch (err) {
            console.log(err)
            return err
        }
    }

    async deleteCandidate_detail(id) {
        try {
            const a = await Books.query().delete().where('candidate_id', id)
            await Role.query().delete().where({ id })
            await Candidates.query().delete().where({ id })
            return true;
        } catch (err) {
            console.log(err.message)
            return err.message
        }
    }
}
module.exports = CandidatesData