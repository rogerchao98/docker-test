class Controller {

  static get(req, res) {
    console.log('We are here');
    if (req.query.output === 'text') {
      res.send('Hello World').end();
    } else {

      res.json({text: 'Hello from the other side'}).end();
    }
  }
}

module.exports = Controller;
