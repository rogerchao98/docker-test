class Controller {

  static get(req, res) {
    console.log('We are here');
    if (req.query.output === 'text') {
      res.sendFile(path.join('/.index.html'));
    } else {

      res.sendFile(path.join('./index.html'));
    }
  }
}

module.exports = Controller;
