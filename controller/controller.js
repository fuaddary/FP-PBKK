
var Request = require('request')

//USER


exports.getAllUser = (req,res)=>{
    Request.get("http://209.97.167.184/users", (error, data) => {
    if(error) {
        return console.dir(error);
    }
        users = JSON.parse(data.body)
        console.log(users.values)
        res.render('users', {layout:'base', user : users.values});
        
    });

}

exports.addUser = (req, res)=>{
    res.render ('adduser', {layout:'base'})
}

exports.postUser = (req,res)=>{
    nrp = req.body.nrp
    group = req.body.group
    password = req.body.password
    console.log("masuk")
    Request.post("http://209.97.167.184/user", {form:{RegUsername:nrp,RegPassword:password,group:group,}}, (error, data) => {
        if(error) {
            return console.dir(error);
        }
            users = JSON.parse(data.body)
            console.log(users.values)
            res.redirect('/users')
            
        });
}

exports.findUser = (req,res)=>{

}

exports.deleteUser = (req, res)=> {
    nrp = req.params.user_id
    console.log(nrp)
    Request.delete("http://209.97.167.184/users/"+nrp, (error, data) => {
        if(error) {
            return console.dir(error);
        }
            users = JSON.parse(data.body)
            console.log(users.values)
            res.redirect('/users')
            
        });
};

//gate

exports.getAllGate = (req,res)=>{
    Request.get("http://209.97.167.184/gates", (error, data) => {
    if(error) {
        return console.dir(error);
    }
        gates = JSON.parse(data.body)
        console.log(gates.values)
        res.render('gates', {layout:'base', gates : gates.values});
        
    });
}

exports.addGate = (req, res)=>{
    res.render ('addgate', {layout:'base'})
}

exports.postGate = (req,res)=>{
    gate_id = req.body.gate
    start = req.body.start
    end = req.body.end
    console.log("masuk")
    Request.post("http://209.97.167.184/gates", {form:{gateName:gate_id,start:start,end:end,}}, (error, data) => {
        if(error) {
            return console.dir(error);
        }
            console.log(data)
            res.redirect('/gates')
            
        });
}

exports.findGate = (req,res)=>{

}

exports.deleteGate = (req, res)=> {
    gate = req.params.gate_id
    console.log("something")
    Request.delete("http://209.97.167.184/gates/"+gate, (error, data) => {
        if(error) {
            return console.dir(error);
        }
            // gates = JSON.parse(data.body)
            // console.log(gates.values)
            res.redirect('/gates')
            
    });
};

//Jadwal
exports.getAllgroup = (req,res)=>{
    Request.get("http://209.97.167.184/group", (error, data) => {
    if(error) {
        return console.dir(error);
    }
        groups = JSON.parse(data.body)
        console.log(groups.values)
        res.render('group', {layout:'base', groups : groups.values});
    });
}

exports.addgroup = (req, res)=>{
    res.render ('addgroup', {layout:'base'})
}

exports.postgroup = (req,res)=>{
    group_id = req.body.group
    gate = req.body.gate
    console.log(group_id+gate)
    Request.post("http://209.97.167.184/group", {form:{group:group_id,gate:gate,}}, (error, data) => {
        if(error) {
            return console.dir(error);
        }
            res.redirect('/group')
            
        });
}

exports.findgroup = (req,res)=>{

}

exports.deletegroup = (req, res)=> {
    group = req.params.group_id
    console.log("something")
    Request.delete("http://209.97.167.184/group/"+group, (error, data) => {
        if(error) {
            return console.dir(error);
        }
            // groups = JSON.parse(data.body)
            // console.log(groups.values)
            res.redirect('/group')
            
        });
};

exports.getlogin = (req,res)=> {
    id = req.params.ga_id
    Request.get("http://209.97.167.184/gates/"+id, (error, data) => {
    if(error) {
        return console.dir(error);
    }
        gates = JSON.parse(data.body)
        array = gates.values

        if (array[0] != undefined)
            res.render('login',{gate:array[0]})
        else
            res.render('error')
        // res.render('group', {layout:'base', groups : groups.values});
    });

}

exports.login = (req,res)=> {
    id=req.body.id
    RegUsername = req.body.RegUsername
    group = req.body.group
    gate = req.body.gate
    RegPassword = req.body.RegPassword
    response = {
        ga_id : id,
        ga_name : gate
    }
    Request.post("http://209.97.167.184/",{form:{RegUsername:RegUsername,group:group,gate:gate,RegPassword:RegPassword}}, (error, data) => {
    if(error) {
        return console.dir(error);
    }
        try {
            status = JSON.parse(data.body).status
            res.render('masuk',{gate:gate})
        }
        catch{
            console.log('not allowed')
            res.render('login',{gate:response,error:"User not allowed"})
        }
        // if (status == "add complete"){
        //     console.log("sukses login")
        //     //res.render('login',{gate:array[0]})
        //     res.render('masuk',{gate:gate})
        // }
        // else
        //     res.render('error')
        // // res.render('group', {layout:'base', groups : groups.values});
    });
}

exports.index = (req,res)=>{
    Request.get("http://209.97.167.184/gates", (error, data) => {
        if(error) {
            return console.dir(error);
        }
            gates = JSON.parse(data.body)
            console.log(gates.values)
            res.render('index', {gates : gates.values});
            
        });
}