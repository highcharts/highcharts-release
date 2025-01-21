/**
 * @license Highcharts JS v12.1.2-modified (2025-01-21)
 * @module highcharts/modules/broken-axis
 * @requires highcharts
 *
 * (c) 2009-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import BrokenAxis from '../../Core/Axis/BrokenAxis.js';
const G = Highcharts;
G.BrokenAxis = G.BrokenAxis || BrokenAxis;
G.BrokenAxis.compose(G.Axis, G.Series);
export default Highcharts;
