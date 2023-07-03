import mysql from 'mysql2'

export const db = mysql.createConnection( {
    host:"localhost",
    user:"root",
    password: "root",
    database: "lista_tarefas"
})

// export default {db}

//se tiver na vida real, troque o localhost pela url real, ou IP.