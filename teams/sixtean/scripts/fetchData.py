import csv
from re import X

def writeCSV(file_url:str, rows: list):
    with open(file_url, 'w') as f:
        writer = csv.writer(f)
        writer.writerows(rows)

def readCSV(file_url:str) -> list:
    with open(file_url, 'r') as f:
        reader = csv.DictReader(f)
        return [row for row in reader]

def avePoints(points:list) -> dict:
    sum_lat = 0
    sum_long = 0
    for point in points:
        sum_lat += float(point['latitude'])
        sum_long += float(point['longitude'])
    
    return [sum_lat/len(points), sum_long/len(points)]

#rowsの緯度経度のユークリッド距離を使って近傍の点（mag個）を結合
def aggregatePoints(points: list, mag: int = 4) -> list:
    res = []
    while len(points) >= mag:
        points_ = []
        points_.append(points.pop(0))
        points.sort(key = lambda x: pow(float(points_[0]['latitude'])-float(x['latitude']),2)+pow(float(points_[0]['longitude'])-float(x['longitude']),2))
        for i in range(mag-1):
            points_.append(points.pop(0))

        res.append(avePoints(points_))

    return res