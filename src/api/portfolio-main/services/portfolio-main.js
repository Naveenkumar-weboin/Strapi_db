'use strict';

/**
 * portfolio-main service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::portfolio-main.portfolio-main');
