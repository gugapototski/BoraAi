const https = require('https');
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

function authenticate(username, password) {
  // check if username and password were provided
  if (!username || !password) {
    return;
  }

  username = username.split('@')[0].toLowerCase();

  const data = JSON.stringify({
    login: username,
    password: password,
  });

  const options = {
    hostname: '200.134.21.99',
    port: 443,
    path: '/ldapauth/service/authenticate/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
    },
  };

  const req = https.request(options, (res) => {
    let body = '';
    res.on('data', (chunk) => {
      body += chunk;
    });
    res.on('end', () => {
      const d = JSON.parse(body);
      const fullname = d.name;
      const email = d.email;

      let codigo = '0';
      if (d.code && d.code.length > 0) {
        codigo = d.code;
      }

      let is_aluno = false;
      if (username.match(/[aA]\d+/)) {
        is_aluno = true;
      }

      console.log(is_aluno);
      console.log(d);
    });
  });

  req.on('error', (error) => {
    console.error(error);
  });

  req.write(data);
  req.end();
}

module.exports = {
  authenticate: authenticate,
};
