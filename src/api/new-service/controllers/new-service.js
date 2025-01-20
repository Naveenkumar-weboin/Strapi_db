'use strict';

/**
 * new-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::new-service.new-service');
