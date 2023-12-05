import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
dotenv.config();

// //versão para PostgreSQL
const AppDataSource = new DataSource({
    database: 'postgres', // se for SQLite, então use bdaula.sqlite
    type: "postgres", // se for SQLite, então use sqlite
    host: process.env.URLBANCO, // não use esta propriedade se for sqlite
    port: 5432, // não use esta propriedade se for sqlite
    username: 'postgres', // não use esta propriedade se for sqlite
    password: process.env.SENHA, // não use esta propriedade se for sqlite
    // true indica que o schema do BD será criado a cada vez que a aplicação inicializar
    // deixe false ao usar migrations
    synchronize: false,
    logging: false, // true indica que as consultas e erros serão exibidas no terminal
    entities: ["src/entities/*.ts"], // entidades que serão convertidas em tabelas
    migrations: ["src/migrations/*.ts"], // local onde estarão os arquivos de migração
    subscribers: [],
    maxQueryExecutionTime: 2000 // 2 seg.

});


AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source inicializado!") //sucesso na promessa
    })
    .catch((e) => {
        console.error("Erro na inicialização do Data Source:", e)
    });

export default AppDataSource;