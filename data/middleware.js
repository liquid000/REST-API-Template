const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('/Users/mizuochirikuto/development/web-development/todo-app/API/db.json')
const db = low(adapter)

module.exports = function (req, res, next) {
  if (req.method === 'POST') {
    // -endpointのjsonプロパティにセット
    db.push(req.url.slice(1), req.body).write()
    // -更新した値をreturn
    res.query = req.body
  }
  // Continue to JSON Server router
  next()
}