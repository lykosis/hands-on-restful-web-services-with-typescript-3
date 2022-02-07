"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoute = void 0;
const orderController = require("../controllers/order");
class OrderRoute {
    routes(app) {
        app.route('/store/inventory').get(orderController.getInventory);
        app.route('/store/orders').post(orderController.addOrder);
        app.route('/store/orders').get(orderController.getAllOrders);
        app.route('/store/orders/:id').get(orderController.getOrder);
        app.route('/store/orders/:id').delete(orderController.removeOrder);
    }
}
exports.OrderRoute = OrderRoute;
