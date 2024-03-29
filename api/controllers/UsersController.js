/**
 * UsersController
 *
 * @module      :: Controller
 * @description  :: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {


  /**
   * Action blueprints:
   *    `/users/create`
   */
  create: function (req, res) {
    Users.create(req.body).done(function (err, user) {
      if (err)
        console.log(err);
      res.send(user);
    });
  },

  /**
   * Action blueprints:
   *    `/users/find`
   */
  find: function (req, res) {

    // Send a JSON response
   Users.find().done(function(err,users){
     res.send(users);
   });
  },

  /**
   * Action blueprints:
   *    `/users/update`
   */
  update: function (req, res) {

    // Send a JSON response
    return res.json({
      hello: 'world'
    });
  },

  /**
   * Action blueprints:
   *    `/users/destroy`
   */
  destroy: function (req, res) {

    // Send a JSON response
    return res.json({
      hello: 'world'
    });
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UsersController)
   */
  _config: {}


};
