import axios from 'axios'

export default class SignatureRepository {
  findById (id) {
    return {
      id: 1,
      hash: 'asd123c4cwd23f20ii99',
      date: '01/01/1970 17:02',
      html: '<!DOCTYPE html> <html lang="en"> <head> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <meta http-equiv="x-ua-compatible" content="ie=edge"> <title>My Example</title> <style> body { padding: 30px; } </style> <!-- Bootstrap CSS --> <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"> </head> <body> <!-- HTML Form --> <div class="container-fluid"> <div class="form-group has-success has-feedback"> <label class="control-label" for="username">Username</label> <input type="text" class="form-control" id="username" aria-describedby="usernameStatus"> <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span> <span id="usernameStatus" class="help-block">Username is available!</span> </div> <div class="form-group has-warning has-feedback"> <label class="control-label" for="password">Password</label> <input type="password" class="form-control" id="password" aria-describedby="passwordStatus"> <span class="glyphicon glyphicon-warning-sign form-control-feedback" aria-hidden="true"></span> <span id="passwordStatus" class="help-block">Weak password</span> </div> <div class="form-group has-error has-feedback"> <label class="control-label" for="phone">Phone Number</label> <input type="tel" class="form-control" id="phone" aria-describedby="phoneStatus"> <span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span> <span id="phoneStatus" class="help-block">Please enter a valid phone number</span> </div> </div> <!-- jQuery library --> <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script> <!-- Bootstrap JS --> <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script> </body> </html>',
      image: 'http://www.placehold.it/1280x720'
    }
  }

  checkUrl (url) {
    if (url === 'www.google.es') {
      return true
    }

    return false
  }

  new (url) {
    return axios.post('https://etherlinks-backend.herokuapp.com/v1/signatures/', {'uri': url})
      .then(response => response.data.id)
  }
}
