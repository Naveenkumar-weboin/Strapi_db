'use strict';

/**
 * static-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::static-service.static-service');
