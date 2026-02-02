const cat = {
    "name" : "sushi",
    "age" : 12,
    "owner" : null,
    "spouse" : ["ani", "cindy", "baby"],
    "phone" : {
        "merk" : "samsung",
        "network" : "4G",
        "ai" : true
    },
    sleep : function() {
        console.log("zzzz....");
    }
}
console.log(cat.name);
console.log(cat.spouse);
cat.sleep();