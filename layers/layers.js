var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Q2Wairporttest_1 = new ol.format.GeoJSON();
var features_Q2Wairporttest_1 = format_Q2Wairporttest_1.readFeatures(json_Q2Wairporttest_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Q2Wairporttest_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Q2Wairporttest_1.addFeatures(features_Q2Wairporttest_1);
var lyr_Q2Wairporttest_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Q2Wairporttest_1, 
                style: style_Q2Wairporttest_1,
                interactive: true,
    title: 'Q2W airport test<br />\
    <img src="styles/legend/Q2Wairporttest_1_0.png" /> major<br />\
    <img src="styles/legend/Q2Wairporttest_1_1.png" /> major and military<br />\
    <img src="styles/legend/Q2Wairporttest_1_2.png" /> mid<br />\
    <img src="styles/legend/Q2Wairporttest_1_3.png" /> mid and military<br />\
    <img src="styles/legend/Q2Wairporttest_1_4.png" /> military<br />\
    <img src="styles/legend/Q2Wairporttest_1_5.png" /> military major<br />\
    <img src="styles/legend/Q2Wairporttest_1_6.png" /> military mid<br />\
    <img src="styles/legend/Q2Wairporttest_1_7.png" /> small<br />\
    <img src="styles/legend/Q2Wairporttest_1_8.png" /> spaceport<br />\
    <img src="styles/legend/Q2Wairporttest_1_9.png" /> <br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_Q2Wairporttest_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Q2Wairporttest_1];
lyr_Q2Wairporttest_1.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'Name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'iata_code', 'wikipedia': 'URL', 'natlscale': 'natlscale', 'comments': 'comments', 'wikidataid': 'wikidataid', 'name_ar': 'name_ar', 'name_bn': 'name_bn', 'name_de': 'name_de', 'name_en': 'name_en', 'name_es': 'name_es', 'name_fr': 'name_fr', 'name_el': 'name_el', 'name_hi': 'name_hi', 'name_hu': 'name_hu', 'name_id': 'name_id', 'name_it': 'name_it', 'name_ja': 'name_ja', 'name_ko': 'name_ko', 'name_nl': 'name_nl', 'name_pl': 'name_pl', 'name_pt': 'name_pt', 'name_ru': 'name_ru', 'name_sv': 'name_sv', 'name_tr': 'name_tr', 'name_vi': 'name_vi', 'name_zh': 'name_zh', 'wdid_score': 'wdid_score', 'ne_id': 'ne_id', });
lyr_Q2Wairporttest_1.set('fieldImages', {'scalerank': 'Hidden', 'featurecla': 'Hidden', 'type': 'TextEdit', 'name': 'TextEdit', 'abbrev': 'Hidden', 'location': 'Hidden', 'gps_code': 'Hidden', 'iata_code': 'TextEdit', 'wikipedia': 'TextEdit', 'natlscale': 'Hidden', 'comments': 'Hidden', 'wikidataid': 'Hidden', 'name_ar': 'Hidden', 'name_bn': 'Hidden', 'name_de': 'Hidden', 'name_en': 'Hidden', 'name_es': 'Hidden', 'name_fr': 'Hidden', 'name_el': 'Hidden', 'name_hi': 'Hidden', 'name_hu': 'Hidden', 'name_id': 'Hidden', 'name_it': 'Hidden', 'name_ja': 'Hidden', 'name_ko': 'Hidden', 'name_nl': 'Hidden', 'name_pl': 'Hidden', 'name_pt': 'Hidden', 'name_ru': 'Hidden', 'name_sv': 'Hidden', 'name_tr': 'Hidden', 'name_vi': 'Hidden', 'name_zh': 'Hidden', 'wdid_score': 'Hidden', 'ne_id': 'Hidden', });
lyr_Q2Wairporttest_1.set('fieldLabels', {'type': 'no label', 'name': 'no label', 'iata_code': 'no label', 'wikipedia': 'no label', });
lyr_Q2Wairporttest_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});