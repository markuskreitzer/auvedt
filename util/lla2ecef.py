import pyproj
import argparse
parser = argparse.ArgumentParser()
parser.add_argument('inputfile')
arg = parser.parse_args()
import pandas as pd
import numpy as np

csv_data = pd.read_csv(arg.inputfile)
lat, lon, hae, speed = csv_data.latitude, csv_data.longitude, csv_data.altitude, csv_data.speed

#lat = 37.4001100556
#lon = -79.1539111111
#hae = 208.38

transformer = pyproj.Transformer.from_crs(
    {"proj":'latlong', "ellps":'WGS84', "datum":'WGS84'},
    {"proj":'geocent', "ellps":'WGS84', "datum":'WGS84'},
    )
x ,y, z = transformer.transform(lon,lat,hae,radians = False)
print(x, y, z)
