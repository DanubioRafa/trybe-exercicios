const express = require('express');

const app = express();

app.use(express.json());

const validateDifficulty = (req, res, next) => {
  const { difficulty } = req.body.description;
  const expectedDifficulties = ['Fácil', 'Médio', 'Difícil'];

  if (!expectedDifficulties
    .some((expectedDifficulty) => expectedDifficulty === difficulty)) {
      return res.status(400)
    .json({ message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' });
  }

  next();
};

const validateRating = (req, res, next) => {
  const { rating } = req.body.description;

  if (!(rating > 0 && rating < 6)) {
    return res.status(400)
    .json({ message: 'O campo rating deve ser um número inteiro entre 1 e 5' });
  }

  next();
};

const validateCreatedAt = (req, res, next) => {
  const { createdAt } = req.body.description;
  const splitDate = createdAt.split('/');
  const DMYLength = [2, 2, 4];

  if (!(splitDate.length === 3 && splitDate
    .every((date, index) => date.length === DMYLength[index]))) {
    return res.status(400).json({ message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'' });
  }

  next();
};

const validateDescription = (req, res, next) => {
  const { description } = req.body;
  const expectedDescriptionKeys = ['createdAt', 'rating', 'difficulty'];

  if (!description) {
    return res.status(400).json({ message: 'O campo description é obrigatório' });
  }
  if (!description[expectedDescriptionKeys[0]]) {
    return res.status(400).json({ message: 'O campo createdAt é obrigatório' });
  }
  if (!description[expectedDescriptionKeys[1]]) {
    return res.status(400).json({ message: 'O campo rating é obrigatório' });
  }
  if (!description[expectedDescriptionKeys[2]]) {
    return res.status(400).json({ message: 'O campo difficulty é obrigatório' });
  }

  next();
};

const validatePrice = (req, res, next) => {
  const { price } = req.body;
  if (typeof price !== 'number') {
    return res.status(400).json({ message: 'O campo price é obrigatório' });
  }
  if (price < 0) {
    return res.status(400)
    .json({ message: 'O campo price deve ser um número maior ou igual a zero' });
  }

  next();
}; 

const validateName = (req, res, next) => {
  const { body } = req;
  if (!('name' in body)) {
    return res.status(400).json({ message: 'O campo name é obrigatório' });
  }
  if (!body.name.length > 4) {
    return res.status(400).json({ message: 'O campo name deve ter pelo menos 4 caracteres' });
  }

  next();
};

app.post('/activities',
 validateName, validatePrice, validateDescription, validateCreatedAt,
 validateRating, validateDifficulty, (req, res) => {
  res.status(200).json({ message: 'Atividade cadastrada com sucesso!', novaAtividade: req.body });
});

module.exports = app;