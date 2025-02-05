import viteLogo from "/vite.svg";
import javaLogo from "./javascript.svg";
// rules are seperated into 3 categories, tiles, buildings, units

//tiles is straightforward and contains 5 sub-arrays: name (String), description(String), movement (int), effects (int), img (String), miniImage (String), 6: buildables (List String)

//Buildings is: name (String), tooltip (String), mechanics (int), img(String), and upgrades(List)

//Units is TBD


let rules = [
    [//Tiles

        ["Plains","It's a plains",1,0,0,viteLogo,["House"]],
        ["Mountain","It's a mountain",1,0,0,javaLogo,["Big House","House"]]



    ],
    [//Buildings

        ["House", "Dev House", 1,viteLogo,"Big House"],
        ["Big House", "Big Dev House",1,javaLogo,]


    ],
    [//Units




        ["Dude"]
    ]]



export {rules}