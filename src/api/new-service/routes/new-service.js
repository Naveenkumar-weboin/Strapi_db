'use strict';

/**
 * new-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::new-service.new-service');
