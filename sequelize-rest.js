const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres');
const Movie = sequelize.define('movie', {
    title: Sequelize.TEXT,
    yearOfRelease: Sequelize.INTEGER,
    synopsis: Sequelize.TEXT

});
sequelize.sync() 
    .then(() => Movie.truncate())
    .then(() => Promise.all([ 
        Movie.create({ title: '', yearOfRelease: 1, synopsis: '' }),
        Movie.create({ title: '', yearOfRelease: 2, synopsis: '' }),
        Movie.create({ title: '', yearOfRelease: 3, synopsis: '' })
    ]))
    .then(() =>{
        return Movie.findAll({
            attributes: ['title']
        })
    })
    .then(Movie => {
        console.log(Movie.map(Movie => Movie.dataValues))
    }) 
 .catch(console.error)

const { Router } =require ('express')
const router = new Router()

router.post(
    '/movie',
    (request, response, next) => {
      Movie
        .create(movie)
        .then(movie => response.send(movie))
        .catch(next)
    }
  )

  router.get('/movie', (req, res, next) => {
    const limit = req.query.limit 
    const offset = req.query.offset 
  
    Movie
      .findAndCountAll({
        limit, offset
      })
      .then(movie => {
        res.send(movie)
      })
      .catch(error => next(error))
  })

  router.get(
    '/movie',
    (request, response, next) => {
      Movie
        .read(movie)
        .then(movie => response.send(movie))
        .catch(next)
    }
  )

  router.put(
    '/movie/:id',
    (request, response, next) => {
      Movie
        .findByPk(request.params.id)
        .then(movie => movie.update(request.body))
        .then(movie => response.send(movie))
        .catch(next)
    }
  )

  router.delete(
    '/movie/:id',
    (request, response, next) => {
      Movie
        .destroy({
          where: {
            id: request.params.id
          }
        })
        .then(number => response.send({ number }))
        .catch(next)
    }
  )
  app.get('/movie', (req, res, next) => {
    getDataAsync()
        .then(result => res.json(result))
        .catch(error => res.status(500).json({err}))
})
