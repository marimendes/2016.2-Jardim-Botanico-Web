var centerForestGalleryArea;

var centerForestGalleryAreaCoordinates = [
  {lat: -15.890045463397763, lng: -47.842034976929426},
  {lat: -15.890218304485696, lng: -47.84198937937617},
  {lat: -15.890723928229898, lng: -47.842118125736306},
  {lat: -15.891996581156903, lng: -47.84084204580722},
  {lat: -15.892553794252487, lng: -47.84006956993835},
  {lat: -15.893565028892569, lng: -47.83936146675842},
  {lat: -15.89365789712514, lng: -47.83857826172607},
  {lat: -15.893410248409682, lng: -47.83813837944763},
  {lat: -15.893049093486653, lng: -47.83785942971008},
  {lat: -15.893038774765037, lng: -47.83784870087402},
  {lat: -15.892822081488996, lng: -47.83733371674316},
  {lat: -15.893668215815003, lng: -47.83738736092346},
  {lat: -15.894101600350787, lng: -47.8374731909571},
  {lat: -15.89434924821536, lng: -47.837526835137396},
  {lat: -15.894328610904957, lng: -47.83695820682624},
  {lat: -15.894576258490137, lng: -47.836529053383856},
  {lat: -15.89482390580988, lng: -47.83616427295783},
  {lat: -15.895154101709586, lng: -47.83593896740058},
  {lat: -15.895432704078457, lng: -47.83600334041694},
  {lat: -15.895577164414153, lng: -47.83571366184333},
  {lat: -15.89609309333774, lng: -47.83512357586005},
  {lat: -15.896121756183117, lng: -47.835125848141615},
  {lat: -15.895594362054764, lng: -47.8366759233586},
  {lat: -15.896187680137308, lng: -47.838046532206135},
  {lat: -15.895989907580129, lng: -47.83733122083504},
  {lat: -15.896177361576655, lng: -47.838051896624165},
  {lat: -15.898147624108391, lng: -47.83760782331228},
  {lat: -15.89983468522142, lng: -47.83747371302525},
  {lat: -15.900943907295007, lng: -47.83750053495169},
  {lat: -15.902321397189763, lng: -47.83746834844351},
  {lat: -15.90523456122433, lng: -47.835760703392225},
  {lat: -15.905636966507185, lng: -47.835869332775474},
  {lat: -15.9059594061018, lng: -47.83589883707464},
  {lat: -15.906350202209271, lng: -47.83581434749067},
  {lat: -15.90672294102315, lng: -47.835601111873984},
  {lat: -15.907242710681688, lng: -47.835524668998914},
  {lat: -15.907326687629448, lng: -47.83576778601855},
  {lat: -15.907382146812134, lng: -47.836186210624874},
  {lat: -15.907406007153476, lng: -47.836366589181125},
  {lat: -15.907456952197114, lng: -47.836703206412494},
  {lat: -15.907507109005094, lng: -47.83708973787725},

  {lat: -15.907530467806943, lng: -47.83724903602888},
  {lat: -15.90730906095935, lng: -47.83743850903193},
  {lat: -15.907102701057347, lng: -47.83784620480219},
  {lat: -15.90674157071918, lng: -47.83815734104792},
  {lat: -15.906215351065146, lng: -47.83828608708063},
  {lat: -15.905812946871007, lng: -47.838189527556096},
  {lat: -15.905493086552429, lng: -47.83807151035944},
  {lat: -15.905193861922765, lng: -47.837996408507024},
  {lat: -15.904874000619344, lng: -47.837996408507024},
  {lat: -15.904529490010985, lng: -47.838498316868936},
  {lat: -15.90451917187828, lng: -47.838509045704996},
  {lat: -15.904225104873401, lng: -47.83864315615574},
  {lat: -15.903956832844717, lng: -47.838541232213174},
  {lat: -15.903270673794117, lng: -47.83838029967228},
  {lat: -15.90311590077894, lng: -47.83848222361485},
  {lat: -15.903095264367924, lng: -47.83873435126225},
  {lat: -15.903177809999312, lng: -47.83896502123753},
  {lat: -15.903053991539526, lng: -47.83922251330296},
  {lat: -15.902955968538144, lng: -47.83969458208958},
  {lat: -15.902852786458514, lng: -47.84018810854832},
  {lat: -15.902852786458514, lng: -47.840493880376016},
  {lat: -15.90296628682979, lng: -47.84068163500706},
  {lat: -15.903131378164547, lng: -47.8408693896381},
  {lat: -15.903219082881016, lng: -47.84113224612156},
  {lat: -15.903296469363776, lng: -47.84132536517063},
  {lat: -15.903492514986821, lng: -47.841491662129556},
  {lat: -15.903698878594078, lng: -47.84169014559666},
  {lat: -15.903322264851413, lng: -47.842248045071756},
  {lat: -15.902986923254051, lng: -47.842022739514505},
  {lat: -15.90272896779862, lng: -47.84169014559666},
  {lat: -15.902445216415488, lng: -47.84136828051487},
  {lat: -15.902151146377763, lng: -47.841019593342935},
  {lat: -15.901599119005406, lng: -47.8407084569335},
  {lat: -15.901067726739035, lng: -47.84046169370413},
  {lat: -15.90069626723362, lng: -47.840027175843716},
  {lat: -15.900266049633192, lng: -47.83944396302104},
  {lat: -15.900051370314692, lng: -47.8390884026885},
  {lat: -15.899725195514648, lng: -47.83883325755596},
  {lat: -15.898971952441736, lng: -47.838736698031425},
  {lat: -15.898239343459561, lng: -47.83890835940838},
  {lat: -15.897104310111349, lng: -47.83865086734295},
  {lat: -15.896340738672384, lng: -47.83868305385113},
  {lat: -15.895480284078664, lng: -47.83910449594259},
  {lat: -15.894995309450653, lng: -47.8395014628768},
  {lat: -15.894814733492645, lng: -47.8401505574584},
  {lat: -15.894246061287902, lng: -47.840764448046684},
  {lat: -15.89370031843729, lng: -47.84136828035116},
  {lat: -15.8932875704959, lng: -47.84172769635916},
  {lat: -15.892988327708986, lng: -47.84214075654745},
  {lat: -15.892183465591373, lng: -47.84289713948965},
  {lat: -15.892797431215897, lng: -47.843256555497646},
  {lat: -15.893544390871924, lng: -47.843714877963066},
  {lat: -15.894813586785673, lng: -47.84415476024151},
  {lat: -15.895432703684843, lng: -47.844476625323296},
  {lat: -15.896082774378598, lng: -47.844476625323296},
  {lat: -15.896856665322971, lng: -47.84454099833965},
  {lat: -15.89752335608188, lng: -47.84458693116903},
  {lat: -15.898309279809663, lng: -47.84469589591026},
  {lat: -15.899279211682773, lng: -47.84476026892662},
  {lat: -15.900249139115077, lng: -47.84501776099205},
  {lat: -15.90119842526448, lng: -47.84557566046715},
  {lat: -15.9019000686691, lng: -47.84647688269615},
  {lat: -15.90235407192061, lng: -47.84699186682701},
  {lat: -15.90322080255472, lng: -47.84727081656456},
  {lat: -15.902519163757958, lng: -47.84774288535118},
  {lat: -15.901755612874132, lng: -47.847120612859726},
  {lat: -15.901136515434793, lng: -47.84621939063072},
  {lat: -15.900393595992048, lng: -47.84568294882774},
  {lat: -15.899341122084133, lng: -47.845167964696884},
  {lat: -15.899114117185945, lng: -47.84523233771324},
  {lat: -15.898412464062734, lng: -47.84508213400841},
  {lat: -15.898185458116526, lng: -47.845361083745956},
  {lat: -15.898433100954243, lng: -47.84594044089317},
  {lat: -15.898102910436213, lng: -47.8461979329586},
  {lat: -15.89787590414068, lng: -47.84694895148277},
  {lat: -15.897256794681262, lng: -47.84626230597496},
  {lat: -15.896864691088014, lng: -47.8461979329586},
  {lat: -15.89705042446429, lng: -47.84656271338463},
  {lat: -15.89676150580489, lng: -47.84699186682701},
  {lat: -15.896224941479474, lng: -47.847163528203964},
  {lat: -15.895936021634606, lng: -47.84604772925377},
  {lat: -15.895337543493236, lng: -47.845425456762314},
  {lat: -15.894512053480577, lng: -47.84548982977867},
  {lat: -15.893954845807492, lng: -47.845189422369},
  {lat: -15.893141961957346, lng: -47.84557096660137},
  {lat: -15.893100687086777, lng: -47.84454099833965},
  {lat: -15.892584750490341, lng: -47.84469120204449},
  {lat: -15.892017218706469, lng: -47.84469120204449},
  {lat: -15.891156745467013, lng: -47.844785414636135},
  {lat: -15.89063220379965, lng: -47.84420236945152},
  {lat: -15.890054347634958, lng: -47.8437303006649}
  ];

var centerForestGalleryAreaColor = '#2B7A29';

function addCenterForestGalleryArea(){
    centerForestGalleryArea = createVegetation(centerForestGalleryAreaCoordinates,
                                               centerForestGalleryAreaColor);

    centerForestGalleryArea.setMap(map);
}
