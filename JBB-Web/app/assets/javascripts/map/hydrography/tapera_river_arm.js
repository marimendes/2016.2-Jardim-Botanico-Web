var taperaRiverArm;

function addTaperaRiverArm(){
    //set the path of the river
    var taperaRiverArmCoordinates = [
        {lat: -15.911312114605156, lng: -47.88935949560255},
        {lat: -15.911315983774237, lng: -47.88936177967116},
        {lat: -15.91137015213364, lng: -47.88937250850722},
        {lat: -15.911411423254805, lng: -47.889381896238774},
        {lat: -15.911461722422276, lng: -47.88940067170188},
        {lat: -15.911513311298906, lng: -47.889402012806386},
        {lat: -15.911553292669195, lng: -47.88939933059737},
        {lat: -15.911589404867767, lng: -47.88938323734328},
        {lat: -15.911589404867767, lng: -47.88935775635764},
        {lat: -15.911598432916415, lng: -47.88934836862609},
        {lat: -15.911622937617793, lng: -47.889344345312566},
        {lat: -15.911684844218504, lng: -47.88934300420806},
        {lat: -15.911717087232168, lng: -47.889329593162984},
        {lat: -15.911776414363773, lng: -47.889322887640446},
        {lat: -15.911809947082576, lng: -47.889322887640446},
        {lat: -15.91185250783302, lng: -47.889322887640446},
        {lat: -15.911929890992546, lng: -47.88930545328185},
        {lat: -15.911982769467743, lng: -47.88927997229621},
        {lat: -15.912012432996535, lng: -47.889261196833104},
        {lat: -15.912040806802569, lng: -47.88925180910155},
        {lat: -15.912053703985809, lng: -47.88924242137},
        {lat: -15.912071760040954, lng: -47.88924242137},
        {lat: -15.91208852637642, lng: -47.88924108026549},
        {lat: -15.912092395530554, lng: -47.88924108026549},
        {lat: -15.912107872146375, lng: -47.88924376247451},
        {lat: -15.912123348761, lng: -47.889255832415074},
        {lat: -15.912132376785642, lng: -47.889266561251134},
        {lat: -15.912160750574756, lng: -47.88926387904212},
        {lat: -15.912203311250899, lng: -47.88925180910155},
        {lat: -15.912244582200987, lng: -47.88924778578803},
        {lat: -15.912311647476795, lng: -47.889207552652806},
        {lat: -15.912360656702658, lng: -47.88915927289054},
        {lat: -15.912372264149143, lng: -47.88914317963645},
        {lat: -15.912385161311098, lng: -47.88912842748687},
        {lat: -15.912389030459533, lng: -47.88910965202376},
        {lat: -15.912396768756171, lng: -47.88909624097869},
        {lat: -15.912414824780491, lng: -47.88907075999305},
        {lat: -15.912450936824273, lng: -47.88907478330657},
        {lat: -15.91249220772351, lng: -47.88907880662009},
        {lat: -15.912536058044656, lng: -47.889077465515584},
        {lat: -15.912555403771535, lng: -47.889061372261494},
        {lat: -15.912561852346737, lng: -47.88904662011191},
        {lat: -15.912574749496544, lng: -47.8890265035443},
        {lat: -15.912579908356237, lng: -47.889018456917256},
        {lat: -15.91259280550487, lng: -47.88900504587218},
        {lat: -15.912614730655681, lng: -47.88899699924514},
        {lat: -15.91262762780209, lng: -47.88901577470824},
        {lat: -15.912648263234617, lng: -47.88903723238036},
        {lat: -15.912667608950693, lng: -47.889050643425435},
        {lat: -15.91268824437911, lng: -47.889039914589375},
        {lat: -15.912711459233572, lng: -47.889029185753316},
        {lat: -15.91275401979309, lng: -47.88901175139472},
        {lat: -15.912790131775918, lng: -47.88899699924514},
        {lat: -15.912828823178899, lng: -47.88901711581275},
        {lat: -15.912863645435204, lng: -47.8890439379029},
        {lat: -15.912902336824024, lng: -47.889062713366},
        {lat: -15.912938448780201, lng: -47.8890439379029},
        {lat: -15.912971981305143, lng: -47.88901711581275},
        {lat: -15.9129835887163, lng: -47.88899968145415},
        {lat: -15.913005513824464, lng: -47.88898090599105},
        {lat: -15.91302356979409, lng: -47.88896481273696},
        {lat: -15.913040336050155, lng: -47.8889540839009},
        {lat: -15.913054522881122, lng: -47.8889366495423},
        {lat: -15.913062261152124, lng: -47.88892055628821},
        {lat: -15.91307515826982, lng: -47.88890714524314},
        {lat: -15.913082896540034, lng: -47.88888951181434},
        {lat: -15.913093859088995, lng: -47.88886000751518},
        {lat: -15.913161568936982, lng: -47.88879971019924},
        {lat: -15.913197680846581, lng: -47.88877288810909},
        {lat: -15.91322863390678, lng: -47.88875143043697},
        {lat: -15.913285381171441, lng: -47.88871387951076},
        {lat: -15.913352446099932, lng: -47.88868169300258},
        {lat: -15.913393716814022, lng: -47.88865487091243},
        {lat: -15.913460781706355, lng: -47.88863341324031},
        {lat: -15.913548481916399, lng: -47.88864414207637},
        {lat: -15.913610387923963, lng: -47.888622684404254},
        {lat: -15.913677452743993, lng: -47.888611955568194},
        {lat: -15.913718723391346, lng: -47.888579769060016},
        {lat: -15.913806423488822, lng: -47.888563675805926},
        {lat: -15.913883805895981, lng: -47.88854221813381},
        {lat: -15.913925076500956, lng: -47.88853685371578},
    ];

    //add the river at the map in the position previously defined
    taperaRiverArm = new google.maps.Polyline({
        path: taperaRiverArmCoordinates,
        map: map,
        strokeColor: '#366ED4',
        strokeWidth: 0.3,
    });

    //set the river on map
    taperaRiverArm.setMap(map);
    google.maps.event.addListener(taperaRiverArm, 'click', addTaperaRiverArmInfowindow);
}

function addTaperaRiverArmInfowindow(event){
    var taperaRiverArmContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Corrego Tapera</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Corrego Tapera</b>, fica na divisa da estação ecologica do JBB ' +
    'o território da aeronáutica'+
    '<p>Leia mais em: <a href="/jbb_spaces/rio">'+
    'Rio</a> '+
    '</div>'+
    '</div>';

    infoWindow.close();
    infoWindow.setContent(taperaRiverArmContentString);
    infoWindow.setPosition(event.latLng);
    infoWindow.open(map);
}
