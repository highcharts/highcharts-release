/**
 * @license Highcharts JS v12.1.2-modified (2025-01-21)
 * @module highcharts/modules/cylinder
 * @requires highcharts
 * @requires highcharts/highcharts-3d
 *
 * Highcharts cylinder module
 *
 * (c) 2010-2024 Kacper Madej
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import CylinderSeries from '../../Series/Cylinder/CylinderSeries.js';
import RendererRegistry from '../../Core/Renderer/RendererRegistry.js';
CylinderSeries.compose(RendererRegistry.getRendererType());
export default Highcharts;
