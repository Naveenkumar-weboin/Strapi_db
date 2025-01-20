'use strict';

/**
 * static-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::static-service.static-service');
