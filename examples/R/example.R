# see http://cran.r-project.org/web/packages/rjson/rjson.pdf
# migrate to Karthiks R connector later

library(rjson)

url <- "http://ecoengine.berkeley.edu/api/photos/?format=json&page_size=30&collection_code=VTM"

data <- fromJSON(,url, method="C", unexpected.escape = "skip")

for (feature in data$features) {
   print(feature$properties$record)
}

