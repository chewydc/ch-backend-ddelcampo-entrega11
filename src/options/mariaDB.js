//-------------------------------------------------------------------
// Entregable 11: Inicio de Sesion
// Fecha de entrega: 10-12-21
// Alumno: Damian del Campo
//-------------------------------------------------------------------
const optionsMariaDB = {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : 'Password123!',
      database : 'MyDB'
    }
  };

  module.exports = { optionsMariaDB }