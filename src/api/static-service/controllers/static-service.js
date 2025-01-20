'use strict';

/**
 * static-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::static-service.static-service');
