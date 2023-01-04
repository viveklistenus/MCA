angular.module("Packages",[]) //This is a module named as packages as under this module only everything will work and its also a view from MVC(model view controller)
.filter("namefilter",function()
{
    return function(input,option)
    {
        if(isNaN(option) ||(option == ""))
        {
            return input;
        }
        else
        {
        return input.substring(0,option).toUpperCase();
    }}
})
.controller("Packagesctrl",function($scope) //This works as a controller
{
    var items = [
        {name:'Guradians of the Galaxy',doa:new Date("January 31 2022"),location:"James Gunn",rating:"Action",price:"Ben Davis",budget:"200"},
        {name:'Guradians of the Galaxy 2',doa:new Date("May 31 2022"),location:"James Gunn",rating:"Action",price:"Henry Braham",budget:"300"},
        {name:'Guradians of the Galaxy 3',doa:new Date("June 31 2022"),location:"James Gunn",rating:"Action",price:"Henry Braham",budget:"500"},
        {name:'Avengers',doa:new Date("June 31 2022"),location:"Josh Whedon",rating:"Action",price:"CTrent Opaloch",budget:"900"},
        {name:'Avengers 2',doa:new Date("May 31 2022"),location:"Russo Brothers",rating:"Action",price:"Ben Davis",budget:"300"},
        {name:'Avengers 3',doa:new Date("February 31 2022"),location:"Russo Brothers",rating:"Action",price:"Trent Opaloch",budget:"200"},
        {name:'Avengers 4',doa:new Date("December 31 2022"),location:"Russo Brothers",rating:"Action",price:"Trent Opaloch",budget:"400"}

    ]
  
    $scope.items = items;
    $scope.rowlimit = 7;
});