import express from "express"
import session from 'express-session'
const app = express()

app.use(session({
  // Contém a chave secreta da sessão
  secret: process.env.SECRET_JWT,

  // Força a gravação da sessão
  // volta para o armazenamento de sessão
  resave: true,

  // Força uma sessão "não inicializada"
  // para ser salvo na loja
  saveUninitialized: true
}));

export { session }