from scripts.fetchData import writeCSV, readCSV, aggregatePoints
from scripts.handleFile import addStrLeft
from scripts.api.overpass import get_data

if __name__ == "__main__":
    """query = '[out:json];\
            area[name="東京都"]->.tokyo;\
            node(area.tokyo)[amenity="restaurant"][name];\
            out;'
    json = get_data(query)
    rows = [[x['lat'], x['lon'], x['tags']['name']] for x in json['elements']]
    writeCSV('./data/osm/restaurant_area:tokyo.csv', rows)"""

    #addStrLeft('./data/osm/restaurant_area:tokyo.csv', './data/osm/area:tokyo.csv', 'restaurant,')
    writeCSV('./data/osm/restaurant_area:tokyo_one-fourth.csv',aggregatePoints(readCSV('./data/osm/restaurant_area:tokyo.csv')))
    