var caesb1;

function addCaesb1River(){
    var caesb1RiverCoordinates = [
      {lat: -15.891771861105648, lng: -47.8432122990489},
      {lat: -15.891771861105648, lng: -47.843209637794644},
      {lat: -15.891771861105648, lng: -47.843209637794644},
      {lat: -15.891792498678267, lng: -47.84313149750233},
      {lat: -15.891957599183025, lng: -47.84283109009266},
      {lat: -15.892122699552313, lng: -47.84257359802723},
      {lat: -15.8923703498523, lng: -47.84210152924061},
      {lat: -15.892494174888007, lng: -47.8417582064867},
      {lat: -15.892659274817095, lng: -47.841414883732796},
      {lat: -15.892865649537974, lng: -47.84107156097889},
      {lat: -15.893113298923666, lng: -47.84059949219227},
      {lat: -15.893319673178913, lng: -47.84034200012684},
      {lat: -15.893484772430721, lng: -47.84004159271717},
      {lat: -15.893691146305, lng: -47.83978410065174},
      {lat: -15.89389751996762, lng: -47.83952660858631},
      {lat: -15.894186442739692, lng: -47.839183285832405},
      {lat: -15.89435154128034, lng: -47.838968709111214},
      {lat: -15.8945991888373, lng: -47.838925793766975},
      {lat: -15.894970659601226, lng: -47.83875413239002},
      {lat: -15.895300855260103, lng: -47.83858247101307},
      {lat: -15.895837422049993, lng: -47.83849664032459},
      {lat: -15.896250164760783, lng: -47.838453724980354},
      {lat: -15.896786729018936, lng: -47.838453724980354},
      {lat: -15.897158195743968, lng: -47.838410809636116},
      {lat: -15.897529661783079, lng: -47.838410809636116},
      {lat: -15.898024948768267, lng: -47.83836789429188},
      {lat: -15.89827259180356, lng: -47.83836789429188},
      {lat: -15.899015519080267, lng: -47.83836789429188},
      {lat: -15.899428255270587, lng: -47.83836789429188},
      {lat: -15.900171178278962, lng: -47.83836789429188},
      {lat: -15.900501365401865, lng: -47.83836789429188},
      {lat: -15.901161738021534, lng: -47.83836789429188},
      {lat: -15.901533196667241, lng: -47.8382820636034},
      {lat: -15.901945927691159, lng: -47.838153317570686},
      {lat: -15.90219356589893, lng: -47.83806748688221},
      {lat: -15.90252374970163, lng: -47.837938740849495},
      {lat: -15.902936478692663, lng: -47.83776707947254},
      {lat: -15.903266661275605, lng: -47.8377241641283},
      {lat: -15.903638116033378, lng: -47.83759541809559},
      {lat: -15.903885752157365, lng: -47.837423756718636},
      {lat: -15.904215933181655, lng: -47.83725209534168},
      {lat: -15.904587386185899, lng: -47.837209179997444},
      {lat: -15.904958838503957, lng: -47.83708043396473},
      {lat: -15.905247745388039, lng: -47.83699460327625},
      {lat: -15.905454107193945, lng: -47.83699460327625},
      {lat: -15.905784285642868, lng: -47.83699460327625},
      {lat: -15.906197007941506, lng: -47.836908772587776},
    ];

    var lineSymbol = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        strokeWeight: 4,
        strokeColor: '#393'
    };

    //add the river at the map in the position previously defined
    caesb1River = new google.maps.Polyline({
        path: caesb1RiverCoordinates,
        map: map,
        strokeColor: '#366ED4',
        strokeWidth: 0.3 ,
        icons: [{
            icon: lineSymbol,
            offset: '100%'
        }]
    });

    caesb1River.setMap(map);

    google.maps.event.addListener(caesb1River, 'click', addCaesb1RiverInfowindow);
}

function addCaesb1RiverInfowindow(event){
    var caesb1RiverContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Captação da CAESB 1</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Ribeirão Cabeça de Veado</b>, serve de ponto de captação de ' +
    'água para a CAESB. '+
    'Esse braço do ribeirão da na estação de captação de recursos hidricos Cabeça de Veado I'+
    '<p>Leia mais em: <a href="/jbb_spaces/rio">'+
    'Rio</a> '+
    '</div>'+
    '</div>';

    infoWindow.close();
    infoWindow.setContent(caesb1RiverContentString);
    infoWindow.setPosition(event.latLng);
    infoWindow.open(map);
}
