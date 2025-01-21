/**
 * @license Highcharts JS v12.1.2-modified (2025-01-21)
 * @module highcharts/modules/data
 * @requires highcharts
 *
 * Data module
 *
 * (c) 2012-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import HttpUtilities from '../../Core/HttpUtilities.js';
import Data from '../../Extensions/Data.js';
const G = Highcharts;
// Classes
G.Data = G.Data || Data;
G.HttpUtilities = G.HttpUtilities || HttpUtilities;
// Functions
G.ajax = G.HttpUtilities.ajax;
G.data = G.Data.data;
G.getJSON = G.HttpUtilities.getJSON;
G.post = G.HttpUtilities.post;
export default Highcharts;
