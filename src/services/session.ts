import express from "express"
import sessions from 'express-session'
const app = express()

app.use(sessions({
  // Contém a chave secreta da sessão
  secret: process.env.SECRET_JWT,

  // Força a gravação da sessão
  // volta para o armazenamento de sessão
  resave: true,

  // Força uma sessão "não inicializada"
  // para ser salvo na loja
  saveUninitialized: true
}));

export { sessions }