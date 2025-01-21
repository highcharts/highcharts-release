/**
 * @license Highcharts JS v12.1.2-modified (2025-01-21)
 * @module highcharts/modules/annotations
 * @requires highcharts
 *
 * Annotations module
 *
 * (c) 2009-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import Annotation from '../../Extensions/Annotations/Annotation.js';
import NavigationBindings from '../../Extensions/Annotations/NavigationBindings.js';
const G = Highcharts;
G.Annotation = G.Annotation || Annotation;
G.NavigationBindings = G.NavigationBindings || NavigationBindings;
G.Annotation.compose(G.Chart, G.NavigationBindings, G.Pointer, G.SVGRenderer);
export default Highcharts;
