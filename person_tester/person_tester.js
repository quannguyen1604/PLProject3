

var person = function(){

    // private data
    var data = {
        name:'Person',
        $name: function(n){data.memo += 1;data.name = n },
        memo: 0,
        firstName:'default_first',
        $firstName: function(n){data.memo += 1; data.firstName = n},
        lastName:'default_last',
        $lastName: function(n){data.memo += 1; data.lastName = n},
        email: 'default_email',
        $email: function(n){data.memo += 1; data.email = n}
    };

    var F = function(){};
    f = new F();

    // public data
    f.pname = 'Person'
    f.run = function (e) {
        return data[e];
    };

    return f;
}();

var employee = function(p){
    // private data
    var data = {
        name:'Employee',
        $name: function(n){data.memo += 1; data.name = n},
        memo: 0,
        ssn:'default_ssn',
        $ssn: function(n){data.memo += 1; data.ssn = n},
    };

    var F = function(){};
    F.prototype = p;
    f = new F();

    // public data
    f.ename = 'Employee'
    f.run = function (e) {
        var r = data[e];
        if(r === undefined) return F.prototype.run(e);
        else return r;
    };

    return f;
}(person);

var customer = function(p){
    // private data
    var data = {
        name:'Customer',
        $name: function(n){data.memo += 1; data.name = n},
        memo: 0,
        custNo:'default_custNo',
        $custNo: function(n){data.memo += 1; data.custNo = n},
    };

    var F = function(){};
    F.prototype = p;
    f = new F();

    // public data
    f.cname = 'Customer'
    f.run = function (e) {
        var r = data[e];
        if(r === undefined) return F.prototype.run(e);
        else return r;
    };

    return f;
}(person);

var p1 = Object.create(person);



$(document).ready(function() {

    document.writeln("Welcome to the Person Tester application" + "<br><br>");
    document.writeln("Create customer or employee? (c/e): " + "<input type = text id = 'q1' value = 'c'>");

    $("#q1").change(q1);

    function q1() {
        //var q1 = document.getElementById('q1')


        if ($("#q1").val().toLowerCase() == 'c') {
            document.writeln("Create customer or employee? (c/e): " + "<input type = text id = 'q1' value = 'c'>");
            document.write("<br><br>" + "Enter first name: "+"<input type = text id = 'q2a' onchange = 'q2();'>");
            document.write("<br>" + "Enter last name: "+"<input type = text id = 'q2b' onchange = 'q2();'>");
            document.write("<br>" + "Enter email address: "+"<input type = text id = 'q2c' onchange = 'q2();'>");
            document.write("<br>" + "Customer number: "+"<input type = text id = 'q2d' onchange = 'q2();'>");
        } else {
            document.writeln("Create customer or employee? (c/e): " + "<input type = text id = 'q1' value = 'e'>");
            document.write("<br><br>" + "Enter first name: " + "<input type = text id = 'q2a' onchange = 'q2();'>");
            document.write("<br>" + "Enter last name: " + "<input type = text id = 'q2b' onchange = 'q2();'>");
            document.write("<br>" + "Enter email address: " + "<input type = text id = 'q2c' onchange = 'q2();'>");
            document.write("<br>" + "Social security number: " + "<input type = text id = 'q2d' onchange = 'q2();'>");
        }
    }
});




/*
document.writeln(Object.getPrototypeOf(p1) + "<BR>");
document.writeln(p1.pname + "<BR>");
document.writeln(p1.run('name') + "<BR>");
document.writeln(p1.run('firstName') + "<BR>");
document.writeln(p1.run('lastName') + "<BR>");
document.writeln(p1.run('email') + "<BR>");
p1.run('$firstName')('Amy');
p1.run('$lastName')('Winehouse');
p1.run('$email')('amy_winehouse@gmail.com');
document.writeln(p1.run('firstName') + "<BR>");
document.writeln(p1.run('lastName') + "<BR>");
document.writeln(p1.run('email') + "<BR>");
document.writeln("<BR>");

var e1 = Object.create(employee);

document.writeln(Object.getPrototypeOf(e1) + "<BR>");
document.writeln(e1.ename + "<BR>");
document.writeln(e1.run('name') + "<BR>");
e1.run('$firstName')('Chester');
e1.run('$lastName')('Bennington');
e1.run('$email')('chester_benn@gmail.com');
e1.run('$ssn')('888-66-7777');
document.writeln(e1.run('firstName') + "<BR>");
document.writeln(e1.run('lastName') + "<BR>");
document.writeln(e1.run('email') + "<BR>");
document.writeln(e1.run('ssn') + "<BR>");
document.writeln("<BR>");

var c1 = Object.create(customer);

document.writeln(Object.getPrototypeOf(c1) + "<BR>");
document.writeln(c1.cname + "<BR>");
document.writeln(c1.run('name') + "<BR>");
document.writeln(c1.run('firstName') + "<BR>");
document.writeln(c1.run('lastName') + "<BR>");
document.writeln(c1.run('email') + "<BR>");
c1.run('$custNo')('55555');
document.writeln(c1.run('custNo') + "<BR>");
document.writeln("<BR>");


document.writeln("<BR>" + "Local properties are: <BR>");
for (var key in Object.getPrototypeOf(p1)) {
    if (Object.getPrototypeOf(p1).hasOwnProperty(key)) {
        document.writeln('p1: ' + key + " -> " + Object.getPrototypeOf(p1)[key] + "<BR>");
    }
}

document.writeln("<BR>" + "Local properties are: <BR>");
for (var key in Object.getPrototypeOf(e1)) {
    if (Object.getPrototypeOf(e1).hasOwnProperty(key)) {
        document.writeln('e1: ' + key + " -> " + Object.getPrototypeOf(e1)[key] + "<BR>");
    }
}

document.writeln("<BR>" + "Local and inherited properties are: <BR>");
for (var key in Object.getPrototypeOf(e1)) {
    document.writeln('e1: ' + key + " -> " + Object.getPrototypeOf(e1)[key] + "<BR>");
}

document.writeln("<BR>" + "Local properties are: <BR>");
for (var key in Object.getPrototypeOf(c1)) {
    if (Object.getPrototypeOf(c1).hasOwnProperty(key)) {
        document.writeln('c1: ' + key + " -> " + Object.getPrototypeOf(c1)[key] + "<BR>");
    }
}

document.writeln("<BR>" + "Local and inherited properties are: <BR>");
for (var key in Object.getPrototypeOf(c1)) {
    document.writeln('c1: ' + key + " -> " + Object.getPrototypeOf(c1)[key] + "<BR>");
}

document.writeln("<BR>");

document.writeln("p1 memo is: " + p1.run('memo') + "<BR>");
document.writeln("e1 memo is: " + e1.run('memo') + "<BR>");
document.writeln("c1 memo is: " + c1.run('memo') + "<BR>");
    */