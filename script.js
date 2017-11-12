mapboxgl.accessToken = 'pk.eyJ1IjoibWFkZWxlaW5lam9oYW5zb24iLCJhIjoiY2lzczduYzJ4MDZrODJucGh0Mm1xbmVxNCJ9.i7q4iT8FFgh_y5v4we5UhQ';
var map = new mapboxgl.Map({
    style: 'mapbox://styles/nazmulkhan/cj9o2355m3zee2sno482rpchg',
    center: [151.2090, -33.8752],

    // homebush [151.08223, -33.8680],
    // sydney pier [151.2056, -33.8572],
    zoom: 14.5,
    pitch: 45,
    bearing: -45,
    container: 'map'
});

//SLIDER
var slider = document.getElementById('slider');
var sliderValue = document.getElementById('slider-value');
//END SLIDER
map.on('load', function() {
    map.addSource('BelugaGen_HobSunFsr', {
                    'type': 'geojson',
                    'data': './GeoJSON/BelugaGen_HobSunFsr.GeoJSON'
                })
    ,
    map.addSource('BelugaGen_HobSun', {
                    'type': 'geojson',
                    'data': './GeoJSON/BelugaGen_HobSun.GeoJSON'
                })
    ,
    map.addSource('BelugaGen_Fsr', {
                    'type': 'geojson',
                    'data': './GeoJSON/BelugaGen_Fsr.GeoJSON'
                })
    ,
    map.addSource('BelugaGen_fsr_plus5', {
                    'type': 'geojson',
                    'data': './GeoJSON/BelugaGen_fsr_plus5.GeoJSON'
                })
    ,
    map.addSource('BelugaGen_fsr7_Hob30', {
                    'type': 'geojson',
                    'data': './GeoJSON/BelugaGen_fsr7_Hob30.GeoJSON'
                })    
    ,
    map.addSource('BelugaGen_random1', {
                    'type': 'geojson',
                    'data': './GeoJSON/BelugaGen_random1.GeoJSON'
                })    
    // ,
//     var draw = new MapboxDraw({
//     displayControlsDefault: false,
//     controls: {
//         polygon: true,
//         trash: true
//     }
// });
// map.addControl(draw);

// var calcButton = document.getElementById('calculate');
// calcButton.onclick = function() {
//     var data = draw.getAll();
//     if (data.features.length > 0) {
//         var area = turf.area(data);
//         // restrict to area to 2 decimal points
//         var rounded_area = Math.round(area*100)/100;
//         var answer = document.getElementById('calculated-area');
//         answer.innerHTML = '<p><strong>' + rounded_area + '</strong></p><p>square meters</p>';
//     } else {
//         alert("Use the draw tools to draw a polygon!");
//     }
// };


    //     map.addLayer({
    //     'id': '3d-buildings',
    //     'source': 'composite',
    //     'source-layer': 'building',
    //     'filter': ['==', 'extrude', 'true'],
    //     'type': 'fill-extrusion',
    //     'paint': {
    //         'fill-extrusion-color': '#aaa',
    //         'fill-extrusion-height': {
    //             'type': 'identity',
    //             'property': 'height'
    //         },
    //         'fill-extrusion-base': {
    //             'type': 'identity',
    //             'property': 'min_height'
    //         },
    //         'fill-extrusion-opacity': .6
    //     }
    // });




    map.addLayer({
        "id": "Iteration1",
        "type": "fill-extrusion",
        "source": "BelugaGen_HobSunFsr",
           'paint': {
                'fill-extrusion-color' : {
                    'property': 'colour',
                    'type': 'identity'
                },
                'fill-extrusion-height' : {
                    'type': 'identity',
                    'property': 'height'
                },
                'fill-extrusion-base' : {
                    'type': 'identity',
                    'property': 'base_height'
                },
                 // 'fill-extrusion-opacity': .6
            }
    });
    map.addLayer({
        "id": "Iteration2",
        "type": "fill-extrusion",
        "source": "BelugaGen_HobSun",
           'paint': {
                'fill-extrusion-color' : {
                    'property': 'colour',
                    'type': 'identity'
                },
                'fill-extrusion-height' : {
                    'type': 'identity',
                    'property': 'height'
                },
                'fill-extrusion-base' : {
                    'type': 'identity',
                    'property': 'base_height'
                },
                 // 'fill-extrusion-opacity': .6
            }
    }); 
    
    map.addLayer({
        "id": "Iteration3",
        "type": "fill-extrusion",
        "source": "BelugaGen_Fsr",
           'paint': {
                'fill-extrusion-color' : {
                    'property': 'colour',
                    'type': 'identity'
                },
                'fill-extrusion-height' : {
                    'type': 'identity',
                    'property': 'height'
                },
                'fill-extrusion-base' : {
                    'type': 'identity',
                    'property': 'base_height'
                },
                 // 'fill-extrusion-opacity': .6
            }
    });
    map.addLayer({
        "id": "Iteration4",
        "type": "fill-extrusion",
        "source": "BelugaGen_fsr_plus5",
           'paint': {
                'fill-extrusion-color' : {
                    'property': 'colour',
                    'type': 'identity'
                },
                'fill-extrusion-height' : {
                    'type': 'identity',
                    'property': 'height'
                },
                'fill-extrusion-base' : {
                    'type': 'identity',
                    'property': 'base_height'
                },
                 // 'fill-extrusion-opacity': .6
            }
    });

    map.addLayer({
        "id": "Iteration5",
        "type": "fill-extrusion",
        "source": "BelugaGen_fsr7_Hob30",
           'paint': {
                'fill-extrusion-color' : {
                    'property': 'colour',
                    'type': 'identity'
                },
                'fill-extrusion-height' : {
                    'type': 'identity',
                    'property': 'height'
                },
                'fill-extrusion-base' : {
                    'type': 'identity',
                    'property': 'base_height'
                },
                 // 'fill-extrusion-opacity': .6
            }
    });

    map.addLayer({
        "id": "Iteration6",
        "type": "fill-extrusion",
        "source": "BelugaGen_random1",
           'paint': {
                'fill-extrusion-color' : {
                    'property': 'colour',
                    'type': 'identity'
                },
                'fill-extrusion-height' : {
                    'type': 'identity',
                    'property': 'height'
                },
                'fill-extrusion-base' : {
                    'type': 'identity',
                    'property': 'base_height'
                },
                 // 'fill-extrusion-opacity': .6
            }
    });
//SLIDER
slider.addEventListener('input', function(e) {
        map.setPaintProperty('Iteration1', 'fill-extrusion-opacity', parseInt(e.target.value, 10) / 100);
        map.setPaintProperty('Iteration2', 'fill-extrusion-opacity', parseInt(e.target.value, 10) / 100);
        map.setPaintProperty('Iteration3', 'fill-extrusion-opacity', parseInt(e.target.value, 10) / 100);
        map.setPaintProperty('Iteration4', 'fill-extrusion-opacity', parseInt(e.target.value, 10) / 100);
        map.setPaintProperty('Iteration5', 'fill-extrusion-opacity', parseInt(e.target.value, 10) / 100);
        map.setPaintProperty('Iteration6', 'fill-extrusion-opacity', parseInt(e.target.value, 10) / 100);
        sliderValue.textContent = e.target.value + '%';
    });
//END SLIDER

map.setLayoutProperty('Iteration1','visibility','visible');
map.setLayoutProperty('Iteration2','visibility','none');
map.setLayoutProperty('Iteration3','visibility','none');
map.setLayoutProperty('Iteration4','visibility','none');
map.setLayoutProperty('Iteration5','visibility','none');
map.setLayoutProperty('Iteration6','visibility','none');

//console.log(map.getLayoutProperty('Iteration1','visibility'));

var nazzzz = map.getLayoutProperty('Iteration1','visibility');
// console.log(nazzzz)
//     if (nazzzz === 'visible'){
//         nazzzz.className='active';
//         console.log("active")
//        } else{
//         nazzzz.className='none';
//         console.log("jks")
//         };
});

var toggleableLayerIds = ['Iteration1','Iteration2','Iteration3','Iteration4','Iteration5','Iteration6']; //'Iteration1', 'Iteration2',

// var link = document.createElement('a');
// console.log(link)
    

var buttonAdder =  function(value, index, array){
        var id = value;
        var link = document.createElement('a');
        link.href = '#';

        if(index==0){
        link.className = 'active';
        }else{
        link.className = '';
        };

        link.textContent = id;
        // console.log(link.textContent)
        link.onclick = function (e) {
            var clickedLayer = this.textContent;
             e.preventDefault();
             e.stopPropagation();

            var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

            if (visibility === 'visible') {
                map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                nazzzz= "dwadwda"
                this.className = '';
            } else {
                this.className = 'active';
                map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
            }
        };

        var layers = document.getElementById('menu');
        layers.appendChild(link);
    }

toggleableLayerIds.map(buttonAdder)



// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
// When a click event occurs near a polygon, open a popup at the location of
// the feature, with description HTML from its properties.
map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['Iteration1','Iteration2','Iteration3','Iteration4','Iteration5','Iteration6'] });
    if (!features.length) {
        return;
    }

    var feature = features[0];
    var feat = features.length;

    var popup = new mapboxgl.Popup()
        .setLngLat(map.unproject(e.point))
        .setHTML(feature.properties.tag)
        .addTo(map);

// Use the same approach as above to indicate that the symbols are clickable
// by changing the cursor style to 'pointer'.
map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['Iteration1','Iteration2','Iteration3','Iteration4','Iteration5'] });
    map.getCanvas().style.cursor = feat ? 'pointer' : '';
});

});



    