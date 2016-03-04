

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





$(document).ready(function() {

    $("#q1").change(q1);
    $("#q2s").click(q2);


    function q1() {
        if ($("#q1").val() == "e") {
            $("#q2t").text("Social security number: ");
            p1 = Object.create(employee);
        } else {
            $("#q2t").text("Customer number: ");
            p1 = Object.create(customer);
        }
        if ($("div").attr('class') == "q2") {
            $("div").toggleClass("q2");
        }
    }

    function q2() {
        //alert($("#q2a").val());
        //var p1 = Object.create(customer);
        p1.run('$firstName')($("#q2a").val());
        p1.run('$lastName')($("#q2b").val());
        p1.run('$email')($("#q2c").val());

        if ($("#q1").val() == "e") {
            p1.run('$ssn')($("#q2d").val());
        } else {
            p1.run('$custNo')($("#q2d").val());
        }

        if ($("#q1").val() == "e") {
            document.writeln("You entered: <br>")
            document.writeln("Name: " + p1.run('firstName') + " " + p1.run('lastName') + "<BR>");
            document.writeln("Email: " + p1.run('email') + "<BR>");
            document.writeln("Social security number: " + p1.run('ssn') + "<BR>");
        } else {
            document.writeln("You entered: <br>")
            document.writeln("Name: " + p1.run('firstName') + " " + p1.run('lastName') + "<BR>");
            document.writeln("Email: " + p1.run('email') + "<BR>");
            document.writeln("Customer number: " + p1.run('custNo') + "<BR>");
        }

        document.writeln("Continue?" + "<br><input type = button value = 'yes' id = 'yes'>" + "  " + "</t><input type = button value = 'no' id = 'no'>")
        $("#yes").click(function() {
            location.reload();
        });
        $("#no").click(function() {
            window.close();
        });
    }


});
