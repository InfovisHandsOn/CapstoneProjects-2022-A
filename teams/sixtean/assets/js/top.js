data = [
  {id: "root"},
  {id: "education-related", name: "教育関連", parent: "root"},
  {id: "university", name: "大学", parent: "education-related", display: "#ffffff", importance: 0},
  {id: "college", name: "短大・専門学校", parent: "education-related", display: "#ffffff", importance: 0},
  {id: "school", name: "小学校・中学校・高校", parent: "education-related", display: "#ffffff", importance: 0},
  {id: "kindergarten", name: "幼稚園", parent: "education-related", display: "#ffffff", importance: 0},
  {id: "public-facility", name: "公共施設", parent: "root"},
  {id: "toilets", name: "公共トイレ", parent: "public-facility", display: "#ffffff", importance: 0},
  {id: "post_box", name: "ポスト", parent: "public-facility", display: "#ffffff", importance: 0},
  {id: "police", name: "警察署・交番", parent: "public-facility", display: "#ffffff", importance: 0},
  {id: "hospital", name: "病院", parent: "public-facility", display: "#ffffff", importance: 0},
  {id: "library", name: "図書館", parent: "public-facility", display: "#ffffff", importance: 0},
  {id: "park", name: "公園", parent: "public-facility", display: "#ffffff", importance: 0},
  {id: "fire_station", name: "消防署", parent: "public-facility", display: "#ffffff", importance: 0},
  {id: "post_office", name: "郵便局", parent: "public-facility", display: "#ffffff", importance: 0},
  {id: "food-service", name: "飲食店", parent: "root"},
  {id: "cafe", name: "カフェ", parent: "food-service", display: "#ffffff", importance: 0},
  {id: "convenience", name: "コンビニ", parent: "food-service", display: "#ffffff", importance: 0},
  {id: "supermarket", name: "スーパー", parent: "food-service", display: "#ffffff", importance: 0},
  {id: "fast-food", name: "ファミレス", parent: "food-service", display: "#ffffff", importance: 0},
  {id: "restaurant", name: "レストラン", parent: "food-service", display: "#ffffff", importance: 0},
  {id: "sightseeing", name: "観光", parent: "root"},
  {id: "place_of_worship", name: "寺社仏閣", parent: "sightseeing", display: "#ffffff", importance: 0},
]

//display:各施設の所在地を何色で表示するか指定。表示しない場合は0。
//importance:各々項目の重要度を-2,-1,0,1,2の5段階で指定。

var display_color; //密度表示の色を指定

var update

$(function () {
  $('header').load('./assets/html/header_top.html');
  $('footer').load('./assets/html/footer.html');
  $('#map').load('./assets/html/map.html');
  $('#sidebar').load('./assets/html/sidebar.html');
});