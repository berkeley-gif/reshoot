### set working directory
setwd("~/Data")
### load vtm photos
VTMphotos <- read.csv("Photographs.csv", header = TRUE)

### Search for photo captions with mountain, n = 528 (0.156)
VTMphotos_Mountain <-
rbind(VTMphotos[grep(as.character("\\bMt.\\b"), VTMphotos$Caption, value=FALSE, ignore.case = TRUE),], 
      VTMphotos[grep(as.character("\\bMountain\\b"), VTMphotos$Caption, value=FALSE, ignore.case = TRUE),],
      VTMphotos[grep(as.character("\\bMount\\b"), VTMphotos$Caption, value=FALSE, ignore.case = TRUE),],
      VTMphotos[grep(as.character("\\bPeak\\b"), VTMphotos$Caption, value=FALSE, ignore.case = TRUE),],
      VTMphotos[grep(as.character("\\bRidge\\b"), VTMphotos$Caption, value=FALSE, ignore.case = TRUE),]
)
## remove duplicates
VTMphotos_Mountain <- VTMphotos_Mountain[!duplicated(VTMphotos_Mountain),]
## Store in VTMphotos_search
VTMphotos_search <- data.frame(Search_term = "Mt., Mountain, Mount, Peak, Ridge", PhotoNo = VTMphotos_Mountain$PhotoNo)    
                                                 
### Search for lake, n = 101 (0.030)
VTMphotos_Lake <-
  VTMphotos[grep(as.character("\\bLake\\b"), VTMphotos$Caption, value=FALSE, ignore.case = TRUE),]
## Store in VTMphotos_search
VTMphotos_search <- rbind(VTMphotos_search, cbind(Search_term = "Lake", PhotoNo = VTMphotos_Lake$PhotoNo))

### Search for river, n = 135 (0.040)
VTMphotos_River <-
  rbind(VTMphotos[grep(as.character("\\bRiver\\b"), VTMphotos$Caption, value=FALSE, ignore.case = TRUE),],
        VTMphotos[grep(as.character("\\bStream\\b"), VTMphotos$Caption, value=FALSE, ignore.case = TRUE),]
  )
## remove potential duplicates
VTMphotos_River <- VTMphotos_River[!duplicated(VTMphotos_River),]
## Store in VTMphotos_search
VTMphotos_search <- rbind(VTMphotos_search, cbind(Search_term = "River, Stream", PhotoNo = VTMphotos_River$PhotoNo))

### Search for creek, n = 365 (0.108)
VTMphotos_Creek <-
  VTMphotos[grep(as.character("\\bCreek\\b"), VTMphotos$Caption, value=FALSE, ignore.case = TRUE),]
## Store in VTMphotos_search
VTMphotos_search <- rbind(VTMphotos_search, cbind(Search_term = "Creek", PhotoNo = VTMphotos_Creek$PhotoNo))

### Search for canyon, n = 340 (0.101)
VTMphotos_Canyon <-
  VTMphotos[grep(as.character("\\bCanyon\\b"), VTMphotos$Caption, value=FALSE, ignore.case = TRUE),]
## Store in VTMphotos_search
VTMphotos_search <- rbind(VTMphotos_search, cbind(Search_term = "Canyon", PhotoNo = VTMphotos_Canyon$PhotoNo))

### Search for reservoir, n = 11 (0.003)
VTMphotos_Reservoir <-
  VTMphotos[grep(as.character("\\bReservoir\\b"), VTMphotos$Caption, value=FALSE, ignore.case = TRUE),]
## Store in VTMphotos_search
VTMphotos_search <- rbind(VTMphotos_search, cbind(Search_term = "Reservoir", PhotoNo = VTMphotos_Reservoir$PhotoNo))

### Search for tower, n = 20 (0.006)
VTMphotos_Tower <-
  rbind(VTMphotos[grep(as.character("\\blookout\\b"), VTMphotos$Caption, value=FALSE, ignore.case = TRUE),],
        VTMphotos[grep(as.character("\\btower\\b"), VTMphotos$Caption, value=FALSE, ignore.case = TRUE),]        
  )
## remove potential duplicates
VTMphotos_Tower <- VTMphotos_Tower[!duplicated(VTMphotos_Tower),]
## Store in VTMphotos_search
VTMphotos_search <- rbind(VTMphotos_search, cbind(Search_term = "Tower, Lookout", PhotoNo = VTMphotos_Tower$PhotoNo))

### Search for road, highway, n = 366 (0.108)
VTMphotos_Road <-
  rbind(VTMphotos[grep(as.character("\\broad\\b"), VTMphotos$Caption, value=FALSE, ignore.case = TRUE),],
        VTMphotos[grep(as.character("\\bhighway\\b"), VTMphotos$Caption, value=FALSE, ignore.case = TRUE),],
        VTMphotos[grep(as.character("\\bgrade\\b"), VTMphotos$Caption, value=FALSE, ignore.case = TRUE),]
  )
## remove potential duplicates
VTMphotos_Road <- VTMphotos_Road[!duplicated(VTMphotos_Road),]
## Store in VTMphotos_search
VTMphotos_search <- rbind(VTMphotos_search, cbind(Search_term = "Road, Highway, Grade", PhotoNo = VTMphotos_Road$PhotoNo))

### Search for repeat, retake, n = 44 (0.013)
VTMphotos_Repeat <-
  rbind(VTMphotos[grep(as.character("\\brepeat\\b"), VTMphotos$Caption, value=FALSE, ignore.case = TRUE),],
        VTMphotos[grep(as.character("\\bretake\\b"), VTMphotos$Caption, value=FALSE, ignore.case = TRUE),]        
  )
## remove potential duplicates
VTMphotos_Repeat <- VTMphotos_Repeat[!duplicated(VTMphotos_Repeat),]
## Store in VTMphotos_search
VTMphotos_search <- rbind(VTMphotos_search, cbind(Search_term = "Repeat, Retake", PhotoNo = VTMphotos_Repeat$PhotoNo))

### Write out output
write.csv(VTMphotos_search, "VTMphotos_search.csv", row.names = FALSE)

