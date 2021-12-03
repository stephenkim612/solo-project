const db = require('./database')

const expenseController = {};

expenseController.getLog = (req, res, next) => {
  const getAll = 'SELECT * FROM expense_log';
  db.query(getAll)
    .then(data => {
        res.locals.log = data;
        return next();
    });
}

expenseController.addExpense = (req, res, next) => {
  const input = [req.body.name, req.body.amount, req.body.category]
  const add = 'INSERT INTO expense_log (name, amount, category) VALUES ($1, $2, $3)';
  if(req.body.name === '' || req.body.amount === '', req.body.category === '') {
    res.send('error')
  }
  else {
    db.query(add, input);
    return next()
  }
}

expenseController.deleteExpense = (req, res, next) => {
  const userId = [req.body.id];
  const remove = 'DELETE FROM expense_log WHERE id = $1';
  db.query(remove, userId);
  return next()
}

expenseController.createUser = (req, res, next) => {
  const newUser = [req.body.username, req.body.password, req.body.firstName, req.body.lastName];
  const sql = 'INSERT INTO users (username, password, firstName, lastName) VALUES ($1, $2, $3, $4)';
  db.query(sql, newUser);
  return next();
}


module.exports = expenseController;