/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'POST /sendmail': { controller: 'SendmailController', action: "sendMail" }, 
  'GET /catalog/:type': {action: "catalog/view-catalog" },
  '/admin': { action: 'entrance/admin-handle' },
  '/admin/login': { action: 'entrance/admin-login' },
  'GET /admin/dashboard/:type': { action: 'admin/admin-dashboard-view' },
  'GET /admin/editform/:id': { action: 'admin/admin-edit-view' },
  'POST /admin/edit/:id': {action: 'admin/admin-edit-thing'},
  '/admin/addform/:type': { action: 'admin/admin-add-view' },
  'POST /admin/add': { action: 'admin/admin-add-thing' },
  '/admin/delete/:id/:type': { action: 'admin/admin-delete-thing' },

  /**********************
  * 
  * Here are some routes that would not be
  * used in prod
  *
  /***********************

//  '/register': {action: null, view: "pages/register/register"},
//  '/register/create': {action: "register/create-user"},


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
