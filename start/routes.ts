/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import PostsController from '#controllers/posts_controller'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home').as('home')
router.on('/about').render('pages/about').as('about')
router.on('/services').render('pages/services').as('services')
router.on('/contact').render('pages/contact').as('contact')
router.on('/test').render('pages/test')

/* router.get('/', [PostsController, 'index']) */
