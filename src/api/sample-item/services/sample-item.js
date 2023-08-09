'use strict';

/**
 * sample-item service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sample-item.sample-item');
