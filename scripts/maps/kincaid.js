const marker = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-82.311354, 29.651959])),
    name: "The home of THREE AWN",
});
const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        new ol.layer.Vector({
            source: new ol.source.Vector({
                features: [marker]
            }),
            style: new ol.style.Style({
                image: new ol.style.Icon({
                    anchor: [0.5, 46],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    src: 'media/home_black.png'
                })
            })
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-82.311354, 29.651959]),
        zoom: 16
    })
});