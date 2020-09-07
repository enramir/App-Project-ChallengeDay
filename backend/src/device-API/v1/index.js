module.exports = (app, BASE_PATH, device) => {
    console.log("Registering device API (v1)...");
    var path = "";

    path = BASE_PATH + "/device";
     
    app.get(path, (req, res) => {
        console.log("Registering get "+path+"...");
        device.find({}).toArray((err, deviceArray) => {
            if(err){
              console.log("Error" + err);
            }
            res.send(deviceArray);
          });
    });
      
    app.get(path + "/:id", (req, res) => {
        
        var name = req.params.id;
        console.log("Registering get "+path+"/"+id);
        
        device.find({"id": id}).toArray((err, deviceArray) => {
            if(err){
                console.log("Error: " + err);
            }
            if(deviceArray.length > 0){
                res.send(deviceArray[0]);
            }else{
                res.sendStatus(404, "Resource not found");
            }
        });
    });
    
    app.post(path, (req, res) => {
        console.log("Registering post "+path+"...");
        var newDevice = req.body;

        device.find({"id": newDevice["id"], "numero_serie": newDevice["numero_serie"]}).toArray( (err, deviceArray) => {

            if(err) console.log("Error: "+ err);
                
                    if(deviceArray.length == 0){
                        
                        device.insert(newDevice);
                        console.log("Request accepted, creating new resource in database.");
                        res.sendStatus(201, 'Created');
                        
                    } else {
                        console.log("Error: Resource already exists in the database.");
                        res.sendStatus(409, 'Conflict');
                        
                    }
                    
        });
    });
    
    app.put(path + "/:id", (req, res) => {
        
        var updateDevice = req.body;
        var id = req.params.id;

        console.log("Registering put "+path+"/"+id);

        device.find({"id": id}).toArray((err, deviceArray) => {
            if(err){
                console.log("Error: " + err);
            }
            if(deviceArray.length > 0){
                if(id != updateDevice.id){
                    res.sendStatus(409);
                }else{
                    device.update({"id": id}, updateDevice);
                    console.log(updateDevice);
                    res.sendStatus(200);
                }
                
            }else{
                res.sendStatus(404, "Resource not found");

            }
        });
    });
    
    app.delete(path + "/:id", (req, res) => {
        var id = req.params.id;
        console.log("Registering delete "+path+"/"+id);

        device.find({"id": id}).toArray((err, deviceArray) => {
            if(err){
                console.log("Error: " + err);
            }
            if(deviceArray.length > 0){
                device.remove(deviceArray[0]);
                res.sendStatus(200);
            }else{
                res.sendStatus(404, "Resource not found");
            }
        });
    });
    
    app.delete(path, (req, res) => {
        console.log("Registering delete "+path+"...");
        
        device.remove({});
        res.sendStatus(200, "All resources have been removed")
    });

    //Searches
    app.get(path + "/search/:search", (req,res) => {

        var searchString = req.params.search;
        // console.log(searchString);
        device.find({"modelo": searchString}).toArray((err, deviceSearched) => {
            if(err){
                console.log("Error: " + err);
            }
            res.send(deviceSearched);
        });
            
            
    });

    // method not allowed
    app.post(path + "/:id", (req, res) => {
            
        res.sendStatus(405);
        
    });

    // method not allowed
    app.put(path, (req, res) => {
        
        res.sendStatus(405);
        
    });


    console.log("device API registered.");
}