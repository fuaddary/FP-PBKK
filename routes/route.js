var express = require('express')
var router = express.Router()
var controller = require('../controller/controller.js')

//user

router.route('/users')
  .get(controller.getAllUser)
  .post(controller.postUser);

router.route('/users/add')
  .get(controller.addUser);

router.route('/users/:user_id')
  .get(controller.findUser)
router.route('/users/delete/:user_id')  
  .get(controller.deleteUser);

//gate

router.route('/gates')
  .get(controller.getAllGate)
  .post(controller.postGate);

router.route('/gates/add')
  .get(controller.addGate);

router.route('/gate/:gate_id')
  .get(controller.findGate)
  .delete(controller.deleteGate);

router.route('/gates/delete/:gate_id')  
  .get(controller.deleteGate);


//group

router.route('/group')
  .get(controller.getAllgroup)
  .post(controller.postgroup);

router.route('/group/add')
  .get(controller.addgroup);

router.route('/group/:group_id')
  .get(controller.findgroup)
  .delete(controller.deletegroup);

router.route('/group/delete/:group_id')  
  .get(controller.deletegroup);

//login

router.route('/login/:ga_id')
  .get(controller.getlogin);

router.route('/login')
  .post(controller.login);

module.exports=router;