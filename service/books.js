const Books = require('../model/books_model')

class BooksData {
    async booksData(id, data) {
        try {
            const store = await Books.query().insert({ candidate_id: id, book_title: data.book_title, description: data.description })
        }
        catch (err) {
            console.log(err)
            return err;
        }

    }

    async showBooks(candidate_id) {
        try {
            const getData = await Books.query().select().where({ candidate_id })
            return getData;
        } catch (err) {
            console.log(err)
            return err
        }
    }

    async updateBook_detail(id, data) {
        try {
            const getData = await Books.query().update({ book_title: data.book_title, description: data.description }).where({ id })
            console.log(getData)
            return getData;
        } catch (err) {
            console.log(err)
            return err
        }
    }

    async deleteBooks(id) {
        try {
           
            const getData = await Books.query().delete().where({ id })
            console.log(getData)
            return getData;
        } catch (err) {
            return err
        }
    }
}
module.exports = BooksData