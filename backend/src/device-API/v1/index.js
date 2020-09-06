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
      
    app.get(path + "/:name", (req, res) => {
        
        var name = req.params.name;
        console.log("Registering get "+path+"/"+name);
        
        device.find({"name": name}).toArray((err, deviceArray) => {
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
        device.insert(newDevice);
        
        res.sendStatus(201);
    });
    
    app.put(path + "/:name", (req, res) => {
        
        var updateDevice = req.body;
        var name = req.params.name;

        console.log("Registering put "+path+"/"+name);

        device.find({"name": name}).toArray((err, deviceArray) => {
            if(err){
                console.log("Error: " + err);
            }
            if(deviceArray.length > 0){
                if(name != updateDevice.name){
                    res.sendStatus(409);
                }else{
                    device.update({"name": name}, updateDevice);
                    console.log(updateDevice);
                    res.sendStatus(200);
                }
                
            }else{
                res.sendStatus(404, "Resource not found");

            }
        });
    });
    
    app.delete(path + "/:name", (req, res) => {
        var name = req.params.name;
        console.log("Registering delete "+path+"/"+name);

        device.find({"name": name}).toArray((err, deviceArray) => {
            if(err){
                console.log("Error: " + err);
            }
            if(deviceArray.length > 0){
                products.remove(deviceArray[0]);
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
        device.find({"name": searchString}).toArray((err, deviceSearched) => {
            if(err){
                console.log("Error: " + err);
            }
            res.send(deviceSearched);
        });
            
            
    });

    // method not allowed
    app.post(path + "/:name", (req, res) => {
            
        res.sendStatus(405);
        
    });

    // method not allowed
    app.put(path, (req, res) => {
        
        res.sendStatus(405);
        
    });


    console.log("device API registered.");
}