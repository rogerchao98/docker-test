class Controller {

  static get(req, res) {
    console.log('We are here');
    if (req.query.output === 'text') {
      res.send('Hello World').end();
    } else {

      res.json({text: 'Hello bro speaking straight from a GitHub commit. It is 17:04.'}).end();
    }
  }
}

module.exports = Controller;
