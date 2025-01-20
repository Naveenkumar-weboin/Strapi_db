'use strict';

/**
 * new-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::new-service.new-service');
