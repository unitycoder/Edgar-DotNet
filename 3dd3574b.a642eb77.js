(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{100:function(e,o,n){"use strict";n.d(o,"a",(function(){return s})),n.d(o,"b",(function(){return g}));var r=n(0),t=n.n(r);function a(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function m(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?m(Object(n),!0).forEach((function(o){a(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function d(e,o){if(null==e)return{};var n,r,t=function(e,o){if(null==e)return{};var n,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=t.a.createContext({}),p=function(e){var o=t.a.useContext(l),n=o;return e&&(n="function"==typeof e?e(o):i(i({},o),e)),n},s=function(e){var o=p(e.components);return t.a.createElement(l.Provider,{value:o},e.children)},c={inlineCode:"code",wrapper:function(e){var o=e.children;return t.a.createElement(t.a.Fragment,{},o)}},u=t.a.forwardRef((function(e,o){var n=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,g=s["".concat(m,".").concat(u)]||s[u]||c[u]||a;return n?t.a.createElement(g,i(i({ref:o},l),{},{components:n})):t.a.createElement(g,i({ref:o},l))}));function g(e,o){var n=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=n.length,m=new Array(a);m[0]=u;var i={};for(var d in o)hasOwnProperty.call(o,d)&&(i[d]=o[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,m[1]=i;for(var l=2;l<a;l++)m[l]=n[l];return t.a.createElement.apply(null,m)}return t.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},101:function(e,o,n){"use strict";var r=n(0),t=n(20);o.a=function(){const e=Object(r.useContext)(t.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},102:function(e,o,n){"use strict";n.d(o,"b",(function(){return a})),n.d(o,"a",(function(){return m}));var r=n(101),t=n(103);function a(){const{siteConfig:{baseUrl:e="/",url:o}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(e,o,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(t.b)(n))return n;if(r)return o+n;const m=!n.startsWith(o)?o+n.replace(/^\//,""):n;return a?e+m:m}(o,e,n,r)}}function m(e,o={}){const{withBaseUrl:n}=a();return n(e,o)}},103:function(e,o,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function t(e){return void 0!==e&&!r(e)}n.d(o,"b",(function(){return r})),n.d(o,"a",(function(){return t}))},104:function(e,o,n){"use strict";n.d(o,"a",(function(){return i})),n.d(o,"b",(function(){return d}));var r=n(0),t=n.n(r),a=n(102);const m=e=>t.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`}},e.children),i=e=>t.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},t.a.Children.map(e.children,o=>t.a.cloneElement(o,{cols:e.cols||4}))),d=e=>e.withoutLinks?t.a.createElement(m,{cols:e.cols},t.a.createElement("img",{src:Object(a.a)(e.src),alt:"result"})):t.a.createElement("a",{href:Object(a.a)(e.src),target:"_blank"},t.a.createElement(m,{cols:e.cols},t.a.createElement("img",{src:Object(a.a)(e.src),alt:"result"})))},144:function(e,o,n){"use strict";n.r(o),o.default=n.p+"assets/images/room_templates-b968c34a36b289f3e0d15dba159ae293.png"},145:function(e,o,n){"use strict";n.r(o),o.default=n.p+"assets/images/corridor_room_templates-30d9794cbef061561658814f785efdbd.png"},146:function(e,o,n){"use strict";n.r(o),o.default=n.p+"assets/images/0_0-9e20c4eb1ca5cc3c511c16209535c6c3.png"},147:function(e,o,n){"use strict";n.r(o),o.default=n.p+"assets/images/0_1-a5618c682a8da5030a0ec9b74b35a3fe.png"},148:function(e,o,n){"use strict";n.r(o),o.default=n.p+"assets/images/0_2-c0331ad512a3ac0d0355fd1f74f96e85.png"},149:function(e,o,n){"use strict";n.r(o),o.default=n.p+"assets/images/0_3-e70a118c9397968a92a3c7b64643e0a8.png"},69:function(e,o,n){"use strict";n.r(o),n.d(o,"frontMatter",(function(){return i})),n.d(o,"metadata",(function(){return d})),n.d(o,"rightToc",(function(){return l})),n.d(o,"default",(function(){return s}));var r=n(2),t=n(6),a=(n(0),n(100)),m=n(104),i={title:"Real-life example"},d={unversionedId:"grid2d/real-life",id:"grid2d/real-life",isDocsHomePage:!1,title:"Real-life example",description:"In this example, we will create a level description that should be close to what we could use in a game. We will cover the following:",source:"@site/docs\\grid2d\\real-life.md",permalink:"/Edgar-DotNet/docs/next/grid2d/real-life",editUrl:"https://github.com/OndrejNepozitek/Edgar-DotNet/tree/docusaurus/docs/grid2d/real-life.md",version:"next",sidebar:"docs",previous:{title:"Minimum room distance",permalink:"/Edgar-DotNet/docs/next/grid2d/minimum-room-distance"},next:{title:"Dungeon generator",permalink:"/Edgar-DotNet/docs/next/api/dungeon-generator"}},l=[{value:"Room type",id:"room-type",children:[]},{value:"Room class",id:"room-class",children:[]},{value:"Room templates",id:"room-templates",children:[]},{value:"Corridor room templates",id:"corridor-room-templates",children:[]},{value:"Graph of rooms",id:"graph-of-rooms",children:[]},{value:"Level description",id:"level-description",children:[]},{value:"Results",id:"results",children:[]},{value:"Source code",id:"source-code",children:[]}],p={rightToc:l};function s(e){var o=e.components,i=Object(t.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,i,{components:o,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this example, we will create a level description that should be close to what we could use in a game. We will cover the following:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"create a ",Object(a.b)("inlineCode",{parentName:"li"},"RoomType")," enum for individual types of rooms - spawn, boss, shop, reward, etc."),Object(a.b)("li",{parentName:"ul"},"create a custom ",Object(a.b)("inlineCode",{parentName:"li"},"Room")," class to identify rooms in the level graph"),Object(a.b)("li",{parentName:"ul"},"assign room templates based on the type of the room"),Object(a.b)("li",{parentName:"ul"},"use corridors with different lengths")),Object(a.b)("h2",{id:"room-type"},"Room type"),Object(a.b)("p",null,"To distinguish between different types of rooms, we create a ",Object(a.b)("inlineCode",{parentName:"p"},"RoomType")," enum. We will use to when deciding which room templates should be assigned to individual rooms. ",Object(a.b)("em",{parentName:"p"},"Normal")," rooms are basic combat-oriented rooms, ",Object(a.b)("em",{parentName:"p"},"Hub")," rooms are rather large rooms which we can use when a room has many neighbors, and the meaning of the rest of room types should be obvious."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"\n#endregion\n\n/// <summary>\n/// Custom room type that we will use when choosing room templates for a given room.\n/// </summary>\npublic enum RoomType\n{\n    Normal, Hub, Spawn, Boss, Corridor, Exit, Reward, Shop, \n}\n\n\n")),Object(a.b)("h2",{id:"room-class"},"Room class"),Object(a.b)("p",null,"In the previous examples, we used integers to identify individual rooms. We could theoretically still use integers and have a mapping from these integers to room types, but there exists a better way. We can implement a custom room class which will hold the room type. And if we also override the ",Object(a.b)("inlineCode",{parentName:"p"},"ToString()")," method, we will get the name of each room written over the room when we export the level."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"\n/// <summary>\n/// Custom room class that holds the name and the type of a room.\n/// </summary>\npublic class Room\n{\n    public string Name { get; }\n\n    public RoomType Type { get; }\n\n    public Room(string name, RoomType type)\n    {\n        Type = type;\n        Name = name;\n    }\n\n    public override string ToString()\n    {\n        return Name;\n    }\n}\n\n\n")),Object(a.b)("h2",{id:"room-templates"},"Room templates"),Object(a.b)("p",null,"The next step is to create room templates. We will create a mapping from the name of a room template to the instance of that room template so that we can refer to that instance later. We create at least a single room template for each room type."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'\n/// <summary>\n/// Gets all available room templates for non-corridor rooms.\n/// </summary>\n/// <returns></returns>\nprivate Dictionary<string, RoomTemplateGrid2D> GetRoomTemplates()\n{\n    return new List<RoomTemplateGrid2D>()\n    {\n        new RoomTemplateGrid2D(\n            PolygonGrid2D.GetRectangle(15, 19),\n            new SimpleDoorModeGrid2D(1, 2),\n            allowedTransformations: TransformationGrid2DHelper.GetRotations(),\n            name: "Normal 1"\n        ),\n        new RoomTemplateGrid2D(\n            PolygonGrid2D.GetRectangle(13, 15),\n            new SimpleDoorModeGrid2D(1, 2),\n            allowedTransformations: TransformationGrid2DHelper.GetRotations(),\n            name: "Normal 2"\n        ),\n        new RoomTemplateGrid2D(\n            new PolygonGrid2DBuilder()\n                .AddPoint(-11, 6).AddPoint(-5, 6).AddPoint(-5, 5).AddPoint(-3, 5)\n                .AddPoint(-3, 6).AddPoint(2, 6).AddPoint(2, 5).AddPoint(4, 5)\n                .AddPoint(4, 6).AddPoint(10, 6).AddPoint(10, -1).AddPoint(4, -1)\n                .AddPoint(4, 0).AddPoint(2, 0).AddPoint(2, -1).AddPoint(-3, -1)\n                .AddPoint(-3, 0).AddPoint(-5, 0).AddPoint(-5, -1).AddPoint(-11, -1)\n                .Build(),\n            new SimpleDoorModeGrid2D(1, 2),\n            // repeatMode: RoomTemplateRepeatMode.NoRepeat,\n            allowedTransformations: TransformationGrid2DHelper.GetRotations(),\n            name: "Normal 3"\n        ),\n\n        /* Other room templates */\n\n    }.ToDictionary(x => x.Name, x => x);\n}\n\n\n')),Object(a.b)("p",null,"Below we can see a visualization of all the room templates:"),Object(a.b)("p",null,Object(a.b)("img",{src:n(144).default})),Object(a.b)("p",null,"The last thing we have to do is to create a mapping from ",Object(a.b)("inlineCode",{parentName:"p"},"RoomType")," to its room templates."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'\n/// <summary>\n/// Gets room templates for a given room based on its type.\n/// </summary>\nprivate List<RoomTemplateGrid2D> GetRoomTemplatesForRoom(Room room, Dictionary<string, RoomTemplateGrid2D> roomTemplates)\n{\n    switch (room.Type)\n    {\n        case RoomType.Spawn:\n            return new List<RoomTemplateGrid2D>()\n            {\n                roomTemplates["Spawn"],\n            };\n\n        case RoomType.Normal:\n            return new List<RoomTemplateGrid2D>()\n            {\n                roomTemplates["Normal 1"],\n                roomTemplates["Normal 2"],\n                roomTemplates["Normal 3"],\n                roomTemplates["Normal 4"],\n                roomTemplates["Normal 5"],\n                roomTemplates["Normal 6"],\n                roomTemplates["Normal 7"],\n            };\n\n\n        /* Handle other room types */\n\n    }\n}\n\n\n')),Object(a.b)("h2",{id:"corridor-room-templates"},"Corridor room templates"),Object(a.b)("p",null,"We will use corridors of 3 different sizes:"),Object(a.b)("p",null,Object(a.b)("img",{src:n(145).default})),Object(a.b)("h2",{id:"graph-of-rooms"},"Graph of rooms"),Object(a.b)("p",null,"First, we create a list of all the rooms."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'\nvar rooms = new List<Room>\n{\n    new Room("Spawn", RoomType.Spawn),\n    new Room("Normal 1", RoomType.Normal),\n    new Room("Normal 2", RoomType.Normal),\n    new Room("Normal 3", RoomType.Normal),\n    new Room("Normal 4", RoomType.Normal),\n    new Room("Boss", RoomType.Boss),\n    new Room("Exit", RoomType.Exit),\n\n    new Room("Normal 5", RoomType.Normal),\n    new Room("Shop 1", RoomType.Shop),\n    new Room("Normal 6", RoomType.Normal),\n    new Room("Reward 1", RoomType.Reward),\n\n    new Room("Hub 1", RoomType.Hub),\n    new Room("Reward 2", RoomType.Reward),\n    new Room("Normal 7", RoomType.Normal),\n    new Room("Normal 8", RoomType.Normal),\n};\n\n\n')),Object(a.b)("p",null,"We also create a mapping from the name of the room to the instance of the room so we can refer to the rooms later by their names."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"\nvar nameToRoomMapping = rooms.ToDictionary(x => x.Name, x => x);\n\n\n")),Object(a.b)("p",null,"Now we can add all the rooms to the graph."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"\nvar graph = new UndirectedAdjacencyListGraph<Room>();\n\nforeach (var room in rooms)\n{\n    graph.AddVertex(room);\n}\n\n\n")),Object(a.b)("p",null,"In the previous examples, we created rather random graphs that would probably not make sense in a real video game. We will now attempt to create a more reasonable graph."),Object(a.b)("p",null,"First, we create the main path from the spawn room to the boss room."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'\n// Main path to boss room\ngraph.AddEdge(nameToRoomMapping["Spawn"], nameToRoomMapping["Normal 1"]);\ngraph.AddEdge(nameToRoomMapping["Normal 1"], nameToRoomMapping["Normal 2"]);\ngraph.AddEdge(nameToRoomMapping["Normal 2"], nameToRoomMapping["Normal 3"]);\ngraph.AddEdge(nameToRoomMapping["Normal 3"], nameToRoomMapping["Normal 4"]);\ngraph.AddEdge(nameToRoomMapping["Normal 4"], nameToRoomMapping["Boss"]);\ngraph.AddEdge(nameToRoomMapping["Boss"], nameToRoomMapping["Exit"]);\n\n\n')),Object(a.b)("p",null,"Then we create a loop that contains a shop and a reward room."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'\n// Branch 1\ngraph.AddEdge(nameToRoomMapping["Normal 2"], nameToRoomMapping["Normal 5"]);\ngraph.AddEdge(nameToRoomMapping["Normal 5"], nameToRoomMapping["Shop 1"]);\ngraph.AddEdge(nameToRoomMapping["Shop 1"], nameToRoomMapping["Normal 6"]);\ngraph.AddEdge(nameToRoomMapping["Normal 6"], nameToRoomMapping["Reward 1"]);\ngraph.AddEdge(nameToRoomMapping["Reward 1"], nameToRoomMapping["Normal 5"]);\n\n\n')),Object(a.b)("p",null,"And finally we create a loop that contains another reward room."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'\n// Branch 2\ngraph.AddEdge(nameToRoomMapping["Normal 3"], nameToRoomMapping["Hub 1"]);\ngraph.AddEdge(nameToRoomMapping["Hub 1"], nameToRoomMapping["Reward 2"]);\ngraph.AddEdge(nameToRoomMapping["Reward 2"], nameToRoomMapping["Normal 7"]);\ngraph.AddEdge(nameToRoomMapping["Normal 7"], nameToRoomMapping["Normal 8"]);\ngraph.AddEdge(nameToRoomMapping["Normal 8"], nameToRoomMapping["Hub 1"]);\n\n\n\n')),Object(a.b)("h2",{id:"level-description"},"Level description"),Object(a.b)("p",null,"Now we are ready to create the level description."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"\nvar levelDescription = new LevelDescriptionGrid2D<Room>\n{\n    MinimumRoomDistance = 2,\n};\n\n\n")),Object(a.b)("p",null,"First, we get the graph and room templates."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"\nvar graph = GetGraph();\nvar roomTemplates = GetRoomTemplates();\n\n\n")),Object(a.b)("p",null,"Next, we add all the non-corridor rooms. For each room, we get room templates based on the type of the room."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"\nforeach (var room in graph.Vertices)\n{\n    levelDescription.AddRoom(room, new RoomDescriptionGrid2D\n    (\n        isCorridor: false,\n        roomTemplates: GetRoomTemplatesForRoom(room, roomTemplates)\n    ));\n}\n\n\n")),Object(a.b)("p",null,"Then we prepare a corridor room description. All corridors use the same room templates so we can reuse the instance of the room description for all corridors."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"\nvar corridorRoomDescription = new RoomDescriptionGrid2D\n(\n    isCorridor: true,\n    roomTemplates: GetCorridorRoomTemplates()\n);\n\n\n")),Object(a.b)("p",null,"And the final step is to add all the connections."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'\nforeach (var edge in graph.Edges)\n{\n    var corridorRoom = new Room("Corridor", RoomType.Corridor);\n\n    levelDescription.AddRoom(corridorRoom, corridorRoomDescription);\n    levelDescription.AddConnection(edge.From, corridorRoom);\n    levelDescription.AddConnection(edge.To, corridorRoom);\n}\n\n\n')),Object(a.b)("h2",{id:"results"},"Results"),Object(a.b)("p",null,"Below you can see some of the results generated from this example:"),Object(a.b)(m.a,{cols:2,mdxType:"Gallery"},Object(a.b)(m.b,{src:n(146).default,mdxType:"GalleryImage"}),Object(a.b)(m.b,{src:n(147).default,mdxType:"GalleryImage"}),Object(a.b)(m.b,{src:n(148).default,mdxType:"GalleryImage"}),Object(a.b)(m.b,{src:n(149).default,mdxType:"GalleryImage"})),Object(a.b)("div",{style:{textAlign:"center",marginTop:"-15px"}},Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Average time to generate the level: 0.23s (0.07s init, 0.16s generation itself)"))),Object(a.b)("h2",{id:"source-code"},"Source code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing Edgar.Geometry;\nusing Edgar.GraphBasedGenerator.Common;\nusing Edgar.GraphBasedGenerator.Grid2D;\nusing Edgar.GraphBasedGenerator.Grid2D.Drawing;\nusing Edgar.Graphs;\n\nnamespace Examples\n{\n    public class RealLifeExample \n    {\n        /// <summary>\n        /// Prepare level description.\n        /// </summary>\n        public LevelDescriptionGrid2D<Room> GetLevelDescription() \n        {\n            var levelDescription = new LevelDescriptionGrid2D<Room>\n            {\n                MinimumRoomDistance = 2,\n            };\n\n            var graph = GetGraph();\n            var roomTemplates = GetRoomTemplates();\n\n            foreach (var room in graph.Vertices)\n            {\n                levelDescription.AddRoom(room, new RoomDescriptionGrid2D\n                (\n                    isCorridor: false,\n                    roomTemplates: GetRoomTemplatesForRoom(room, roomTemplates)\n                ));\n            }\n\n            var corridorRoomDescription = new RoomDescriptionGrid2D\n            (\n                isCorridor: true,\n                roomTemplates: GetCorridorRoomTemplates()\n            );\n\n            foreach (var edge in graph.Edges)\n            {\n                var corridorRoom = new Room("Corridor", RoomType.Corridor);\n\n                levelDescription.AddRoom(corridorRoom, corridorRoomDescription);\n                levelDescription.AddConnection(edge.From, corridorRoom);\n                levelDescription.AddConnection(edge.To, corridorRoom);\n            }\n\n            return levelDescription;\n        }\n\n        /// <summary>\n        /// Run the generator.\n        /// </summary>\n        public void Run()\n        {\n            var levelDescription = GetLevelDescription();\n\n            var generator = new GraphBasedGeneratorGrid2D<Room>(levelDescription);\n            var layout = generator.GenerateLayout();\n\n            var drawer = new DungeonDrawer<Room>();\n            drawer.DrawLayoutAndSave(layout, "basics.png", new DungeonDrawerOptions()\n            {\n                Width = 1000,\n                Height = 1000,\n            });\n        }\n\n        /// <summary>\n        /// Gets room templates for a given room based on its type.\n        /// </summary>\n        private List<RoomTemplateGrid2D> GetRoomTemplatesForRoom(Room room, Dictionary<string, RoomTemplateGrid2D> roomTemplates)\n        {\n            switch (room.Type)\n            {\n                case RoomType.Spawn:\n                    return new List<RoomTemplateGrid2D>()\n                    {\n                        roomTemplates["Spawn"],\n                    };\n\n                case RoomType.Normal:\n                    return new List<RoomTemplateGrid2D>()\n                    {\n                        roomTemplates["Normal 1"],\n                        roomTemplates["Normal 2"],\n                        roomTemplates["Normal 3"],\n                        roomTemplates["Normal 4"],\n                        roomTemplates["Normal 5"],\n                        roomTemplates["Normal 6"],\n                        roomTemplates["Normal 7"],\n                    };\n\n                #region hidden:Handle other room types\n\n                case RoomType.Boss:\n                    return new List<RoomTemplateGrid2D>()\n                    {\n                        roomTemplates["Boss"],\n                    };\n\n                case RoomType.Exit:\n                    return new List<RoomTemplateGrid2D>()\n                    {\n                        roomTemplates["Exit"],\n                    };\n\n                case RoomType.Reward:\n                    return new List<RoomTemplateGrid2D>()\n                    {\n                        roomTemplates["Reward"],\n                    };\n\n                case RoomType.Shop:\n                    return new List<RoomTemplateGrid2D>()\n                    {\n                        roomTemplates["Shop"],\n                    };\n\n                case RoomType.Hub:\n                    return new List<RoomTemplateGrid2D>()\n                    {\n                        roomTemplates["Hub 1"],\n                    };\n\n                default:\n                    throw new ArgumentOutOfRangeException(nameof(room.Type), room.Type, null);\n\n                #endregion\n            }\n        }\n\n        /// <summary>\n        /// Gets all available room templates for non-corridor rooms.\n        /// </summary>\n        /// <returns></returns>\n        private Dictionary<string, RoomTemplateGrid2D> GetRoomTemplates()\n        {\n            return new List<RoomTemplateGrid2D>()\n            {\n                new RoomTemplateGrid2D(\n                    PolygonGrid2D.GetRectangle(15, 19),\n                    new SimpleDoorModeGrid2D(1, 2),\n                    allowedTransformations: TransformationGrid2DHelper.GetRotations(),\n                    name: "Normal 1"\n                ),\n                new RoomTemplateGrid2D(\n                    PolygonGrid2D.GetRectangle(13, 15),\n                    new SimpleDoorModeGrid2D(1, 2),\n                    allowedTransformations: TransformationGrid2DHelper.GetRotations(),\n                    name: "Normal 2"\n                ),\n                new RoomTemplateGrid2D(\n                    new PolygonGrid2DBuilder()\n                        .AddPoint(-11, 6).AddPoint(-5, 6).AddPoint(-5, 5).AddPoint(-3, 5)\n                        .AddPoint(-3, 6).AddPoint(2, 6).AddPoint(2, 5).AddPoint(4, 5)\n                        .AddPoint(4, 6).AddPoint(10, 6).AddPoint(10, -1).AddPoint(4, -1)\n                        .AddPoint(4, 0).AddPoint(2, 0).AddPoint(2, -1).AddPoint(-3, -1)\n                        .AddPoint(-3, 0).AddPoint(-5, 0).AddPoint(-5, -1).AddPoint(-11, -1)\n                        .Build(),\n                    new SimpleDoorModeGrid2D(1, 2),\n                    // repeatMode: RoomTemplateRepeatMode.NoRepeat,\n                    allowedTransformations: TransformationGrid2DHelper.GetRotations(),\n                    name: "Normal 3"\n                ),\n                #region hidden:Other room templates\n                new RoomTemplateGrid2D(\n                    new PolygonGrid2DBuilder()\n                        .AddPoint(-39, 1).AddPoint(-37, 1).AddPoint(-37, 10).AddPoint(-39, 10)\n                        .AddPoint(-39, 15).AddPoint(-26, 15).AddPoint(-26, 10).AddPoint(-28, 10)\n                        .AddPoint(-28, 1).AddPoint(-26, 1).AddPoint(-26, -4).AddPoint(-39, -4)\n                        .Build(),\n                    new SimpleDoorModeGrid2D(1, 2),\n                    allowedTransformations: TransformationGrid2DHelper.GetRotations(),\n                    name: "Normal 4"\n                ),\n                new RoomTemplateGrid2D(\n                    new PolygonGrid2DBuilder()\n                        .AddPoint(-14, 3).AddPoint(0, 3).AddPoint(0, 5).AddPoint(-14, 5)\n                        .AddPoint(-14, 12).AddPoint(8, 12).AddPoint(8, -4).AddPoint(-6, -4)\n                        .AddPoint(-6, -6).AddPoint(8, -6).AddPoint(8, -13).AddPoint(-14, -13)\n                        .Build(),\n                    new SimpleDoorModeGrid2D(1, 2),\n                    // repeatMode: RoomTemplateRepeatMode.NoRepeat,\n                    name: "Normal 5"\n                ),\n                new RoomTemplateGrid2D(\n                    PolygonGrid2D.GetSquare(13), \n                    new SimpleDoorModeGrid2D(1, 2),\n                    name: "Normal 6"\n                ),\n                new RoomTemplateGrid2D(\n                    PolygonGrid2D.GetSquare(11), \n                    new SimpleDoorModeGrid2D(1, 2),\n                    name: "Spawn"\n                ),\n                new RoomTemplateGrid2D(\n                    PolygonGrid2D.GetRectangle(26, 26),\n                    new SimpleDoorModeGrid2D(1, 4),\n                    allowedTransformations: TransformationGrid2DHelper.GetRotations(),\n                    name: "Boss"\n                ),\n                new RoomTemplateGrid2D(PolygonGrid2D.GetRectangle(20, 26), \n                    new SimpleDoorModeGrid2D(1, 4),\n                    allowedTransformations: TransformationGrid2DHelper.GetRotations(),\n                    name: "Hub 1"\n                ),\n                new RoomTemplateGrid2D(\n                    new PolygonGrid2DBuilder()\n                        .AddPoint(-8, 7).AddPoint(-7, 7).AddPoint(-7, 8).AddPoint(3, 8)\n                        .AddPoint(3, 7).AddPoint(4, 7).AddPoint(4, -3).AddPoint(3, -3)\n                        .AddPoint(3, -4).AddPoint(-7, -4).AddPoint(-7, -3).AddPoint(-8, -3)\n                        .Build(),\n                    new SimpleDoorModeGrid2D(1, 2),\n                    name: "Reward"\n                ),\n                new RoomTemplateGrid2D(\n                    PolygonGrid2D.GetRectangle(12, 17), \n                    new SimpleDoorModeGrid2D(1, 3),\n                    allowedTransformations: TransformationGrid2DHelper.GetRotations(),\n                    name: "Normal 7"\n                ),\n                new RoomTemplateGrid2D(\n                    new PolygonGrid2DBuilder()\n                        .AddPoint(-3, 4).AddPoint(4, 4).AddPoint(4, -1).AddPoint(-3, -1)\n                        .Build(),\n                    new ManualDoorModeGrid2D(new List<DoorGrid2D>()\n                        {\n                        new DoorGrid2D(new Vector2Int(4, 2), new Vector2Int(4, 1)),\n                        new DoorGrid2D(new Vector2Int(-3, 2), new Vector2Int(-3, 1)),\n                        new DoorGrid2D(new Vector2Int(0, 4), new Vector2Int(1, 4)),\n                        new DoorGrid2D(new Vector2Int(0, -1), new Vector2Int(1, -1)),\n                        }\n                    ),\n                    name: "Exit"\n                ),\n                new RoomTemplateGrid2D(\n                    new PolygonGrid2DBuilder()\n                        .AddPoint(-8, 7).AddPoint(-7, 7).AddPoint(-7, 8).AddPoint(3, 8)\n                        .AddPoint(3, 7).AddPoint(4, 7).AddPoint(4, -3).AddPoint(3, -3)\n                        .AddPoint(3, -4).AddPoint(-7, -4).AddPoint(-7, -3).AddPoint(-8, -3)\n                        .Build(),\n                    new SimpleDoorModeGrid2D(1, 2),\n                    name: "Shop"\n                ),\n                new RoomTemplateGrid2D(\n                    PolygonGrid2D.GetSquare(9), \n                    new SimpleDoorModeGrid2D(1, 2),\n                    name: "Secret"\n                )\n                #endregion\n            }.ToDictionary(x => x.Name, x => x);\n        }\n\n        /// <summary>\n        /// Gets all available room templates for corridor rooms.\n        /// </summary>\n        private List<RoomTemplateGrid2D> GetCorridorRoomTemplates()\n        {\n            return new List<RoomTemplateGrid2D>()\n            {\n                new RoomTemplateGrid2D(\n                    PolygonGrid2D.GetRectangle(4, 3),\n                    new ManualDoorModeGrid2D(new List<DoorGrid2D>()\n                        {\n                            new DoorGrid2D(new Vector2Int(0, 1), new Vector2Int(0, 2)),\n                            new DoorGrid2D(new Vector2Int(4, 1), new Vector2Int(4, 2)),\n                        }\n                    ),\n                    allowedTransformations: TransformationGrid2DHelper.GetRotations()\n                ),\n                new RoomTemplateGrid2D(\n                    PolygonGrid2D.GetRectangle(6, 3),\n                    new ManualDoorModeGrid2D(new List<DoorGrid2D>()\n                        {\n                            new DoorGrid2D(new Vector2Int(0, 1), new Vector2Int(0, 2)),\n                            new DoorGrid2D(new Vector2Int(6, 1), new Vector2Int(6, 2)),\n                        }\n                    ),\n                    allowedTransformations: TransformationGrid2DHelper.GetRotations()\n                ),\n                new RoomTemplateGrid2D(\n                    PolygonGrid2D.GetRectangle(8, 3),\n                    new ManualDoorModeGrid2D(new List<DoorGrid2D>()\n                        {\n                            new DoorGrid2D(new Vector2Int(0, 1), new Vector2Int(0, 2)),\n                            new DoorGrid2D(new Vector2Int(8, 1), new Vector2Int(8, 2)),\n                        }\n                    ),\n                    allowedTransformations: TransformationGrid2DHelper.GetRotations()\n                ),\n            };\n        }\n\n        /// <summary>\n        /// Gets the graph of rooms.\n        /// </summary>\n        private IGraph<Room> GetGraph()\n        {\n            var rooms = new List<Room>\n            {\n                new Room("Spawn", RoomType.Spawn),\n                new Room("Normal 1", RoomType.Normal),\n                new Room("Normal 2", RoomType.Normal),\n                new Room("Normal 3", RoomType.Normal),\n                new Room("Normal 4", RoomType.Normal),\n                new Room("Boss", RoomType.Boss),\n                new Room("Exit", RoomType.Exit),\n\n                new Room("Normal 5", RoomType.Normal),\n                new Room("Shop 1", RoomType.Shop),\n                new Room("Normal 6", RoomType.Normal),\n                new Room("Reward 1", RoomType.Reward),\n\n                new Room("Hub 1", RoomType.Hub),\n                new Room("Reward 2", RoomType.Reward),\n                new Room("Normal 7", RoomType.Normal),\n                new Room("Normal 8", RoomType.Normal),\n            };\n\n            var nameToRoomMapping = rooms.ToDictionary(x => x.Name, x => x);\n\n            var graph = new UndirectedAdjacencyListGraph<Room>();\n\n            foreach (var room in rooms)\n            {\n                graph.AddVertex(room);\n            }\n\n            // Main path to boss room\n            graph.AddEdge(nameToRoomMapping["Spawn"], nameToRoomMapping["Normal 1"]);\n            graph.AddEdge(nameToRoomMapping["Normal 1"], nameToRoomMapping["Normal 2"]);\n            graph.AddEdge(nameToRoomMapping["Normal 2"], nameToRoomMapping["Normal 3"]);\n            graph.AddEdge(nameToRoomMapping["Normal 3"], nameToRoomMapping["Normal 4"]);\n            graph.AddEdge(nameToRoomMapping["Normal 4"], nameToRoomMapping["Boss"]);\n            graph.AddEdge(nameToRoomMapping["Boss"], nameToRoomMapping["Exit"]);\n\n            // Branch 1\n            graph.AddEdge(nameToRoomMapping["Normal 2"], nameToRoomMapping["Normal 5"]);\n            graph.AddEdge(nameToRoomMapping["Normal 5"], nameToRoomMapping["Shop 1"]);\n            graph.AddEdge(nameToRoomMapping["Shop 1"], nameToRoomMapping["Normal 6"]);\n            graph.AddEdge(nameToRoomMapping["Normal 6"], nameToRoomMapping["Reward 1"]);\n            graph.AddEdge(nameToRoomMapping["Reward 1"], nameToRoomMapping["Normal 5"]);\n\n            // Branch 2\n            graph.AddEdge(nameToRoomMapping["Normal 3"], nameToRoomMapping["Hub 1"]);\n            graph.AddEdge(nameToRoomMapping["Hub 1"], nameToRoomMapping["Reward 2"]);\n            graph.AddEdge(nameToRoomMapping["Reward 2"], nameToRoomMapping["Normal 7"]);\n            graph.AddEdge(nameToRoomMapping["Normal 7"], nameToRoomMapping["Normal 8"]);\n            graph.AddEdge(nameToRoomMapping["Normal 8"], nameToRoomMapping["Hub 1"]);\n\n            return graph;\n        }\n\n        /// <summary>\n        /// Custom room type that we will use when choosing room templates for a given room.\n        /// </summary>\n        public enum RoomType\n        {\n            Normal, Hub, Spawn, Boss, Corridor, Exit, Reward, Shop, \n        }\n\n        /// <summary>\n        /// Custom room class that holds the name and the type of a room.\n        /// </summary>\n        public class Room\n        {\n            public string Name { get; }\n\n            public RoomType Type { get; }\n\n            public Room(string name, RoomType type)\n            {\n                Type = type;\n                Name = name;\n            }\n\n            public override string ToString()\n            {\n                return Name;\n            }\n        }\n    }\n}\n')))}s.isMDXComponent=!0}}]);