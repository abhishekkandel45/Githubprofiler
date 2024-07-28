const skills = [
    {
        key: "language",
        title: "Language",
        data: [
            {
                "title": "ApacheGroovy",
                "url": "https://img.shields.io/badge/Apache%20Groovy-4298B8.svg?style={{THEME}}&logo=Apache+Groovy&logoColor=white"
            },
            {
                "title": "C",
                "url": "https://img.shields.io/badge/c-%2300599C.svg?style={{THEME}}&logo=c&logoColor=white"
            },
            {
                "title": "C#",
                "url": "https://img.shields.io/badge/c%23-%23239120.svg?style={{THEME}}&logo=c-sharp&logoColor=white"
            },
            {
                "title": "C++",
                "url": "https://img.shields.io/badge/c++-%2300599C.svg?style={{THEME}}&logo=c%2B%2B&logoColor=white"
            },
            {
                "title": "Crystal",
                "url": "https://img.shields.io/badge/crystal-%23000000.svg?style={{THEME}}&logo=crystal&logoColor=white"
            },
            {
                "title": "CSS3",
                "url": "https://img.shields.io/badge/css3-%231572B6.svg?style={{THEME}}&logo=css3&logoColor=white"
            },
            {
                "title": "Clojure",
                "url": "https://img.shields.io/badge/Clojure-%23Clojure.svg?style={{THEME}}&logo=Clojure&logoColor=Clojure"
            },
            {
                "title": "Dart",
                "url": "https://img.shields.io/badge/dart-%230175C2.svg?style={{THEME}}&logo=dart&logoColor=white"
            },
            {
                "title": "Elixir",
                "url": "https://img.shields.io/badge/elixir-%234B275F.svg?style={{THEME}}&logo=elixir&logoColor=white"
            },
            {
                "title": "Elm",
                "url": "https://img.shields.io/badge/Elm-60B5CC?style={{THEME}}&logo=elm&logoColor=white"
            },
            {
                "title": "Erlang",
                "url": "https://img.shields.io/badge/Erlang-white.svg?style={{THEME}}&logo=erlang&logoColor=a90533"
            },
            {
                "title": "Fortran",
                "url": "https://img.shields.io/badge/Fortran-%23734F96.svg?style={{THEME}}&logo=fortran&logoColor=white"
            },
            {
                "title": "Go",
                "url": "https://img.shields.io/badge/go-%2300ADD8.svg?style={{THEME}}&logo=go&logoColor=white"
            },
            {
                "title": "GraphQL",
                "url": "https://img.shields.io/badge/-GraphQL-E10098?style={{THEME}}&logo=graphql&logoColor=white"
            },
            {
                "title": "Haskell",
                "url": "https://img.shields.io/badge/Haskell-5e5086?style={{THEME}}&logo=haskell&logoColor=white"
            },
            {
                "title": "HTML5",
                "url": "https://img.shields.io/badge/html5-%23E34F26.svg?style={{THEME}}&logo=html5&logoColor=white"
            },
            {
                "title": "Java",
                "url": "https://img.shields.io/badge/java-%23ED8B00.svg?style={{THEME}}&logo=java&logoColor=white"
            },
            {
                "title": "JavaScript",
                "url": "https://img.shields.io/badge/javascript-%23323330.svg?style={{THEME}}&logo=javascript&logoColor=%23F7DF1E"
            },
            {
                "title": "Julia",
                "url": "https://img.shields.io/badge/-Julia-9558B2?style={{THEME}}&logo=julia&logoColor=white"
            },
            {
                "title": "Kotlin",
                "url": "https://img.shields.io/badge/kotlin-%230095D5.svg?style={{THEME}}&logo=kotlin&logoColor=white"
            },
            {
                "title": "LaTeX",
                "url": "https://img.shields.io/badge/latex-%23008080.svg?style={{THEME}}&logo=latex&logoColor=white"
            },
            {
                "title": "Lua",
                "url": "https://img.shields.io/badge/lua-%232C2D72.svg?style={{THEME}}&logo=lua&logoColor=white"
            },
            {
                "title": "Markdown",
                "url": "https://img.shields.io/badge/markdown-%23000000.svg?style={{THEME}}&logo=markdown&logoColor=white"
            },
            {
                "title": "Nim",
                "url": "https://img.shields.io/badge/nim-%23FFE953.svg?style={{THEME}}&logo=nim&logoColor=white"
            },
            {
                "title": "Octave",
                "url": "https://img.shields.io/badge/OCTAVE-darkblue?style={{THEME}}&logo=octave&logoColor=fcd683"
            },
            {
                "title": "PHP",
                "url": "https://img.shields.io/badge/php-%23777BB4.svg?style={{THEME}}&logo=php&logoColor=white"
            },
            {
                "title": "Perl",
                "url": "https://img.shields.io/badge/perl-%2339457E.svg?style={{THEME}}&logo=perl&logoColor=white"
            },
            {
                "title": "Python",
                "url": "https://img.shields.io/badge/python-3670A0?style={{THEME}}&logo=python&logoColor=ffdd54"
            },
            {
                "title": "R",
                "url": "https://img.shields.io/badge/r-%23276DC3.svg?style={{THEME}}&logo=r&logoColor=white"
            },
            {
                "title": "Ruby",
                "url": "https://img.shields.io/badge/ruby-%23CC342D.svg?style={{THEME}}&logo=ruby&logoColor=white"
            },
            {
                "title": "Rust",
                "url": "https://img.shields.io/badge/rust-%23000000.svg?style={{THEME}}&logo=rust&logoColor=white"
            },
            {
                "title": "Scala",
                "url": "https://img.shields.io/badge/scala-%23DC322F.svg?style={{THEME}}&logo=scala&logoColor=white"
            },
            {
                "title": "ShellScript",
                "url": "https://img.shields.io/badge/shell_script-%23121011.svg?style={{THEME}}&logo=gnu-bash&logoColor=white"
            },
            {
                "title": "Solidity",
                "url": "https://img.shields.io/badge/Solidity-%23363636.svg?style={{THEME}}&logo=solidity&logoColor=white"
            },
            {
                "title": "Swift",
                "url": "https://img.shields.io/badge/swift-F54A2A?style={{THEME}}&logo=swift&logoColor=white"
            },
            {
                "title": "TypeScript",
                "url": "https://img.shields.io/badge/typescript-%23007ACC.svg?style={{THEME}}&logo=typescript&logoColor=white"
            },
            {
                "title": "Zig",
                "url": "https://img.shields.io/badge/Zig-%23F7A41D.svg?style={{THEME}}&logo=zig&logoColor=white"
            }
        ]
    },
    {
        key : "hosting",
        title : "HOSTING/Sass",
        data : [
            {
                "title": "AWS",
                "url": "https://img.shields.io/badge/AWS-%23FF9900.svg?style={{THEME}}&logo=amazon-aws&logoColor=white"
            },
            {
                "title": "Azure",
                "url": "https://img.shields.io/badge/azure-%230072C6.svg?style={{THEME}}&logo=azure-devops&logoColor=white"
            },
            {
                "title": "Cloudflare",
                "url": "https://img.shields.io/badge/Cloudflare-F38020?style={{THEME}}&logo=Cloudflare&logoColor=white"
            },
            {
                "title": "Codeberg",
                "url": "https://img.shields.io/badge/Codeberg-2185D0?style={{THEME}}&logo=Codeberg&logoColor=white"
            },
            {
                "title": "Datadog",
                "url": "https://img.shields.io/badge/datadog-%23632CA6.svg?style={{THEME}}&logo=datadog&logoColor=white"
            },
            {
                "title": "DigitalOcean",
                "url": "https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style={{THEME}}&logo=digitalOcean&logoColor=white"
            },
            {
                "title": "Firebase",
                "url": "https://img.shields.io/badge/firebase-%23039BE5.svg?style={{THEME}}&logo=firebase"
            },
            {
                "title": "Glitch",
                "url": "https://img.shields.io/badge/glitch-%233333FF.svg?style={{THEME}}&logo=glitch&logoColor=white"
            },
            {
                "title": "GoogleCloud",
                "url": "https://img.shields.io/badge/Google%20Cloud-%234285F4.svg?style={{THEME}}&logo=google-cloud&logoColor=white"
            },
            {
                "title": "Heroku",
                "url": "https://img.shields.io/badge/heroku-%23430098.svg?style={{THEME}}&logo=heroku&logoColor=white"
            },
            {
                "title": "Netlify",
                "url": "https://img.shields.io/badge/netlify-%23000000.svg?style={{THEME}}&logo=netlify&logoColor=#00C7B7"
            },
            {
                "title": "Oracle",
                "url": "https://img.shields.io/badge/Oracle-F80000?style={{THEME}}&logo=oracle&logoColor=white"
            },
            {
                "title": "OpenStack",
                "url": "https://img.shields.io/badge/Openstack-%23f01742.svg?style={{THEME}}&logo=openstack&logoColor=white"
            },
            {
                "title": "Scaleway",
                "url": "https://img.shields.io/badge/SCALEWAY-%234f0599.svg?style={{THEME}}&logo=scaleway&logoColor=white"
            },
            {
                "title": "Vercel",
                "url": "https://img.shields.io/badge/vercel-%23000000.svg?style={{THEME}}&logo=vercel&logoColor=white"
            }
        ]
    },
    {
        key: "frameworks",
        title: " FRAMEWORKS, PLATFORMS & LIBRARIES",
        data: [
            {
                "title": ".Net",
                "url": "https://img.shields.io/badge/.NET-5C2D91?style={{THEME}}&logo=.net&logoColor=white"
            },
            {
                "title": "AdonisJS",
                "url": "https://img.shields.io/badge/adonisjs-%23220052.svg?style={{THEME}}&logo=adonisjs&logoColor=white"
            },
            {
                "title": "Anaconda",
                "url": "https://img.shields.io/badge/Anaconda-%2344A833.svg?style={{THEME}}&logo=anaconda&logoColor=white"
            },
            {
                "title": "Angular",
                "url": "https://img.shields.io/badge/angular-%23DD0031.svg?style={{THEME}}&logo=angular&logoColor=white"
            },
            {
                "title": "Angular.js",
                "url": "https://img.shields.io/badge/angular.js-%23E23237.svg?style={{THEME}}&logo=angularjs&logoColor=white"
            },
            {
                "title": "Ant-Design",
                "url": "https://img.shields.io/badge/-AntDesign-%230170FE?style={{THEME}}&logo=ant-design&logoColor=white"
            },
            {
                "title": "Apollo-GraphQL",
                "url": "https://img.shields.io/badge/-ApolloGraphQL-311C87?style={{THEME}}&logo=apollo-graphql"
            },
            {
                "title": "Aurelia",
                "url": "https://img.shields.io/badge/aurelia-%23ED2B88.svg?style={{THEME}}&logo=aurelia&logoColor=fff"
            },
            {
                "title": "Bootstrap",
                "url": "https://img.shields.io/badge/bootstrap-%23563D7C.svg?style={{THEME}}&logo=bootstrap&logoColor=white"
            },
            {
                "title": "Buefy",
                "url": "https://img.shields.io/badge/Buefy-7957D5?style={{THEME}}&logo=buefy&logoColor=48289E"
            },
            {
                "title": "Chakra",
                "url": "https://img.shields.io/badge/chakra-%234ED1C5.svg?style={{THEME}}&logo=chakraui&logoColor=white"
            },
            {
                "title": "Chart.js",
                "url": "https://img.shields.io/badge/chart.js-F5788D.svg?style={{THEME}}&logo=chart.js&logoColor=white"
            },
            {
                "title": "Code-Igniter",
                "url": "https://img.shields.io/badge/CodeIgniter-%23EF4223.svg?style={{THEME}}&logo=codeIgniter&logoColor=white"
            },
            {
                "title": "Django",
                "url": "https://img.shields.io/badge/django-%23092E20.svg?style={{THEME}}&logo=django&logoColor=white"
            },
            {
                "title": "DjangoREST",
                "url": "https://img.shields.io/badge/DJANGO-REST-ff1709?style={{THEME}}&logo=django&logoColor=white&color=ff1709&labelColor=gray"
            },
            {
                "title": "Electron.js",
                "url": "https://img.shields.io/badge/Electron-191970?style={{THEME}}&logo=Electron&logoColor=white"
            },
            {
                "title": "Ember",
                "url": "https://img.shields.io/badge/ember-1C1E24?style={{THEME}}&logo=ember.js&logoColor=#D04A37"
            },
            {
                "title": "Expo",
                "url": "https://img.shields.io/badge/expo-1C1E24?style={{THEME}}&logo=expo&logoColor=#D04A37"
            },
            {
                "title": "Express.js",
                "url": "https://img.shields.io/badge/express.js-%23404d59.svg?style={{THEME}}&logo=express&logoColor=%2361DAFB"
            },
            {
                "title": "FastAPI",
                "url": "https://img.shields.io/badge/FastAPI-005571?style={{THEME}}&logo=fastapi"
            },
            {
                "title": "Fastify",
                "url": "https://img.shields.io/badge/fastify-%23000000.svg?style={{THEME}}&logo=fastify&logoColor=white"
            },
            {
                "title": "Flask",
                "url": "https://img.shields.io/badge/flask-%23000.svg?style={{THEME}}&logo=flask&logoColor=white"
            },
            {
                "title": "Flutter",
                "url": "https://img.shields.io/badge/Flutter-%2302569B.svg?style={{THEME}}&logo=Flutter&logoColor=white"
            },
            {
                "title": "Gatsby",
                "url": "https://img.shields.io/badge/Gatsby-%23663399.svg?style={{THEME}}&logo=gatsby&logoColor=white"
            },
            {
                "title": "GreenSock",
                "url": "https://img.shields.io/badge/green%20sock-88CE02?style={{THEME}}&logo=greensock&logoColor=white"
            },
            {
                "title": "Gulp",
                "url": "https://img.shields.io/badge/GULP-%23CF4647.svg?style={{THEME}}&logo=gulp&logoColor=white"
            },
            {
                "title": "Insomnia",
                "url": "https://img.shields.io/badge/Insomnia-black?style={{THEME}}&logo=insomnia&logoColor=5849BE"
            },
            {
                "title": "Jasmine",
                "url": "https://img.shields.io/badge/jasmine-%238A4182.svg?style={{THEME}}&logo=jasmine&logoColor=white"
            },
            {
                "title": "jQuery",
                "url": "https://img.shields.io/badge/jquery-%230769AD.svg?style={{THEME}}&logo=jquery&logoColor=white"
            },
            {
                "title": "JWT",
                "url": "https://img.shields.io/badge/JWT-black?style={{THEME}}&logo=JSON%20web%20tokens"
            },
            {
                "title": "Laravel",
                "url": "https://img.shields.io/badge/laravel-%23FF2D20.svg?style={{THEME}}&logo=laravel&logoColor=white"
            },
            {
                "title": "Less",
                "url": "https://img.shields.io/badge/less-2B4C80?style={{THEME}}&logo=less&logoColor=white"
            },
            {
                "title": "MUI",
                "url": "https://img.shields.io/badge/MUI-%230081CB.svg?style={{THEME}}&logo=material-ui&logoColor=white"
            },
            {
                "title": "MeteorJS",
                "url": "https://img.shields.io/badge/meteorjs-%23d74c4c.svg?style={{THEME}}&logo=meteor&logoColor=white"
            },
            {
                "title": "NPM",
                "url": "https://img.shields.io/badge/NPM-%23000000.svg?style={{THEME}}&logo=npm&logoColor=white"
            },
            {
                "title": "NestJS",
                "url": "https://img.shields.io/badge/nestjs-%23E0234E.svg?style={{THEME}}&logo=nestjs&logoColor=white"
            },
            {
                "title": "NextJS",
                "url": "https://img.shields.io/badge/Next-black?style={{THEME}}&logo=next.js&logoColor=white"
            },
            {
                "title": "NodeJS",
                "url": "https://img.shields.io/badge/node.js-6DA55F?style={{THEME}}&logo=node.js&logoColor=white"
            },
            {
                "title": "NuxtJS",
                "url": "https://img.shields.io/badge/Nuxt-black?style={{THEME}}&logo=nuxt.js&logoColor=white"
            },
            {
                "title": "OpenCV",
                "url": "https://img.shields.io/badge/opencv-%23white.svg?style={{THEME}}&logo=opencv&logoColor=white"
            },
            {
                "title": "p5js",
                "url": "https://img.shields.io/badge/p5.js-ED225D?style={{THEME}}&logo=p5.js&logoColor=FFFFFF"
            },
            {
                "title": "Pug",
                "url": "https://img.shields.io/badge/Pug-FFF?style={{THEME}}&logo=pug&logoColor=A86454"
            },
            {
                "title": "Qt",
                "url": "https://img.shields.io/badge/Qt-%23217346.svg?style={{THEME}}&logo=Qt&logoColor=white"
            },
            {
                "title" : "Quasar",
                "url" : "https://img.shields.io/badge/Quasar-16B7FB?style={{THEME}}&logo=quasar&logoColor=black"
            },
            {
                "title": "ROS",
                "url": "https://img.shields.io/badge/ros-%230A0FF9.svg?style={{THEME}}&logo=ros&logoColor=white"
            },
            {
                "title": "Rails",
                "url": "https://img.shields.io/badge/rails-%23CC0000.svg?style={{THEME}}&logo=ruby-on-rails&logoColor=white"
            },
            {
                "title": "React",
                "url": "https://img.shields.io/badge/react-%2320232a.svg?style={{THEME}}&logo=react&logoColor=%2361DAFB"
            },
            {
                "title": "ReactNative",
                "url": "https://img.shields.io/badge/react_native-%2320232a.svg?style={{THEME}}&logo=react&logoColor=%2361DAFB"
            },
            {
                "title": "ReactRouter",
                "url": "https://img.shields.io/badge/React_Router-CA4245?style={{THEME}}&logo=react-router&logoColor=white"
            },
            {
                "title": "Redux",
                "url": "https://img.shields.io/badge/redux-%23593d88.svg?style={{THEME}}&logo=redux&logoColor=white"
            },
            {
                "title": "RxDB",
                "url": "https://img.shields.io/badge/rxjs-%23B7178C.svg?style={{THEME}}&logo=reactivex&logoColor=white"
            },
            {
                "title": "RxJS",
                "url": "https://img.shields.io/badge/rxjs-%23B7178C.svg?style={{THEME}}&logo=reactivex&logoColor=white"
            },
            {
                "title": "SASS",
                "url": "https://img.shields.io/badge/SASS-hotpink.svg?style={{THEME}}&logo=SASS&logoColor=white"
            },
            {
                "title": "SemanticUIReact",
                "url": "https://img.shields.io/badge/Semantic%20UI%20React-%2335BDB2.svg?style={{THEME}}&logo=SemanticUIReact&logoColor=white"
            },
            {
                "title": "Socket.io",
                "url": "https://img.shields.io/badge/Socket.io-black?style={{THEME}}&logo=socket.io&badgeColor=010101"
            },
            {
                "title": "Spring",
                "url": "https://img.shields.io/badge/spring-%236DB33F.svg?style={{THEME}}&logo=spring&logoColor=white"
            },
            {
                "title": "Strapi",
                "url": "https://img.shields.io/badge/strapi-%232E7EEA.svg?style={{THEME}}&logo=strapi&logoColor=white"
            },
            {
                "title": "StyledComponents",
                "url": "https://img.shields.io/badge/styled--components-DB7093?style={{THEME}}&logo=styled-components&logoColor=white"
            },
            {
                "title": "Stylus",
                "url": "https://img.shields.io/badge/stylus-%23ff6347.svg?style={{THEME}}&logo=stylus&logoColor=white"
            },
            {
                "title": "Svelte",
                "url": "https://img.shields.io/badge/svelte-%23f1413d.svg?style={{THEME}}&logo=svelte&logoColor=white"
            },
            {
                "title": "Symfony",
                "url": "https://img.shields.io/badge/symfony-%23000000.svg?style={{THEME}}&logo=symfony&logoColor=white"
            },
            {
                "title": "TailwindCSS",
                "url": "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style={{THEME}}&logo=tailwind-css&logoColor=white"
            },
            {
                "title": "Threejs",
                "url": "https://img.shields.io/badge/threejs-black?style={{THEME}}&logo=three.js&logoColor=white"
            },
            {
                "title": "Thymeleaf",
                "url": "https://img.shields.io/badge/Thymeleaf-%23005C0F.svg?style={{THEME}}&logo=Thymeleaf&logoColor=white"
            },
            {
                "title": "Type-graphql",
                "url": "https://img.shields.io/badge/-TypeGraphQL-%23C04392?style={{THEME}}"
            },
            {
                "title": "Vue.js",
                "url": "https://img.shields.io/badge/vuejs-%2335495e.svg?style={{THEME}}&logo=vuedotjs&logoColor=%234FC08D"
            },
            {
                "title": "Vuetify",
                "url": "https://img.shields.io/badge/Vuetify-1867C0?style={{THEME}}&logo=vuetify&logoColor=AEDDFF"
            },
            {
                "title": "Webpack",
                "url": "https://img.shields.io/badge/webpack-%238DD6F9.svg?style={{THEME}}&logo=webpack&logoColor=black"
            },
            {
                "title": "Xamarin",
                "url": "https://img.shields.io/badge/Xamarin-3199DC?style={{THEME}}&logo=xamarin&logoColor=white"
            },
            {
                "title": "Yarn",
                "url": "https://img.shields.io/badge/yarn-%232C8EBB.svg?style={{THEME}}&logo=yarn&logoColor=white"
            }
        ]
    },
    {
        key : "servers",
        title : "SERVERS",
        data : [
            {
                "title": "Apache",
                "url": "https://img.shields.io/badge/apache-%23D42029.svg?style={{THEME}}&logo=apache&logoColor=white"
            },
            {
                "title": "ApacheAirflow",
                "url": "https://img.shields.io/badge/Apache%20Airflow-017CEE?style={{THEME}}&logo=Apache%20Airflow&logoColor=white"
            },
            {
                "title": "ApacheAnt",
                "url": "https://img.shields.io/badge/Apache%20Ant-A81C7D?style={{THEME}}&logo=Apache%20Ant&logoColor=white"
            },
            {
                "title": "ApacheFlink",
                "url": "https://img.shields.io/badge/Apache%20Flink-E6526F?style={{THEME}}&logo=Apache%20Flink&logoColor=white"
            },
            {
                "title": "ApacheMaven",
                "url": "https://img.shields.io/badge/Apache%20Maven-C71A36?style={{THEME}}&logo=Apache%20Maven&logoColor=white"
            },
            {
                "title": "Jenkins",
                "url": "https://img.shields.io/badge/jenkins-%232C5263.svg?style={{THEME}}&logo=jenkins&logoColor=white"
            },
            {
                "title": "Nginx",
                "url": "https://img.shields.io/badge/nginx-%23009639.svg?style={{THEME}}&logo=nginx&logoColor=white"
            }
        ]
    },
    {
        key : "database",
        title : "DATABASES",
        data : [
            {
                "title": "AmazonDynamoDB",
                "url": "https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style={{THEME}}&logo=Amazon%20DynamoDB&logoColor=white"
            },
            {
                "title": "ApacheCassandra",
                "url": "https://img.shields.io/badge/cassandra-%231287B1.svg?style={{THEME}}&logo=apache-cassandra&logoColor=white"
            },
            {
                "title": "CockroachLabs",
                "url": "https://img.shields.io/badge/Cockroach%20Labs-6933FF?style={{THEME}}&logo=Cockroach%20Labs&logoColor=white"
            },
            {
                "title": "Couchbase",
                "url": "https://img.shields.io/badge/Couchbase-EA2328?style={{THEME}}&logo=couchbase&logoColor=white"
            },
            {
                "title": "MariaDB",
                "url": "https://img.shields.io/badge/MariaDB-003545?style={{THEME}}&logo=mariadb&logoColor=white"
            },
            {
                "title": "MusicBrainz",
                "url": "https://img.shields.io/badge/Musicbrainz-EB743B?style={{THEME}}&logo=musicbrainz&logoColor=BA478F"
            },
            {
                "title": "MicrosoftSQLServer",
                "url": "https://img.shields.io/badge/Microsoft%20SQL%20Sever-CC2927?style={{THEME}}&logo=microsoft%20sql%20server&logoColor=white"
            },
            {
                "title": "MongoDB",
                "url": "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style={{THEME}}&logo=mongodb&logoColor=white"
            },
            {
                "title": "MySQL",
                "url": "https://img.shields.io/badge/mysql-%2300f.svg?style={{THEME}}&logo=mysql&logoColor=white"
            },
            {
                "title": "Neo4J",
                "url": "https://img.shields.io/badge/Neo4j-008CC1?style={{THEME}}&logo=neo4j&logoColor=white"
            },
            {
                "title": "Postgres",
                "url": "https://img.shields.io/badge/postgres-%23316192.svg?style={{THEME}}&logo=postgresql&logoColor=white"
            },
            {
                "title": "Realm",
                "url": "https://img.shields.io/badge/Realm-39477F?style={{THEME}}&logo=realm&logoColor=white"
            },
            {
                "title": "Redis",
                "url": "https://img.shields.io/badge/redis-%23DD0031.svg?style={{THEME}}&logo=redis&logoColor=white"
            },
            {
                "title": "SingleStore",
                "url": "https://img.shields.io/badge/Single%20Store-AA00FF?style={{THEME}}&logo=singlestore&logoColor=white"
            },
            {
                "title": "SQLite",
                "url": "https://img.shields.io/badge/sqlite-%2307405e.svg?style={{THEME}}&logo=sqlite&logoColor=white"
            },
            {
                "title": "Supabase",
                "url": "https://img.shields.io/badge/Supabase-3ECF8E?style={{THEME}}&logo=supabase&logoColor=white"
            }
        ]
    },
    {
        key : "design",
        title : "DESIGN",
        data : [
            {
                "title": "AdobeAfterEffects",
                "url": "https://img.shields.io/badge/Adobe%20After%20Effects-9999FF.svg?style={{THEME}}&logo=Adobe%20After%20Effects&logoColor=white"
            },
            {
                "title": "AdobeAudition",
                "url": "https://img.shields.io/badge/Adobe%20Audition-9999FF.svg?style={{THEME}}&logo=Adobe%20Audition&logoColor=white"
            },
            {
                "title": "AdobeDreamweaver",
                "url": "https://img.shields.io/badge/Adobe%20Dreamweaver-FF61F6.svg?style={{THEME}}&logo=Adobe%20Dreamweaver&logoColor=white"
            },
            {
                "title": "AdobeIllustrator",
                "url": "https://img.shields.io/badge/adobeillustrator-%23FF9A00.svg?style={{THEME}}&logo=adobeillustrator&logoColor=white"
            },
            {
                "title": "AdobeInDesign",
                "url": "https://img.shields.io/badge/Adobe%20InDesign-49021F?style={{THEME}}&logo=adobeindesign&logoColor=white"
            },
            {
                "title": "AdobeLightroom",
                "url": "https://img.shields.io/badge/Adobe%20Lightroom-31A8FF.svg?style={{THEME}}&logo=Adobe%20Lightroom&logoColor=white"
            },
            {
                "title": "AdobePhotoshop",
                "url": "https://img.shields.io/badge/adobephotoshop-%2331A8FF.svg?style={{THEME}}&logo=adobephotoshop&logoColor=white"
            },
            {
                "title": "AdobePremierePro",
                "url": "https://img.shields.io/badge/Adobe%20Premiere%20Pro-9999FF.svg?style={{THEME}}&logo=Adobe%20Premiere%20Pro&logoColor=white"
            },
            {
                "title": "AdobeXD",
                "url": "https://img.shields.io/badge/Adobe%20XD-470137?style={{THEME}}&logo=Adobe%20XD&logoColor=#FF61F6"
            },
            {
                "title": "Aseprite",
                "url": "https://img.shields.io/badge/Aseprite-FFFFFF?style={{THEME}}&logo=Aseprite&logoColor=#7D929E"
            },
            {
                "title": "AffinityDesigner",
                "url": "https://img.shields.io/badge/affinitydesginer-%231B72BE.svg?style={{THEME}}&logo=affinity-designer&logoColor=white"
            },
            {
                "title": "Blender",
                "url": "https://img.shields.io/badge/blender-%23F5792A.svg?style={{THEME}}&logo=blender&logoColor=white"
            },
            {
                "title": "Canva",
                "url": "https://img.shields.io/badge/Canva-%2300C4CC.svg?style={{THEME}}&logo=Canva&logoColor=white"
            },
            {
                "title": "Dribbble",
                "url": "https://img.shields.io/badge/Dribbble-EA4C89?style={{THEME}}&logo=dribbble&logoColor=white"
            },
            {
                "title": "Figma",
                "url": "https://img.shields.io/badge/figma-%23F24E1E.svg?style={{THEME}}&logo=figma&logoColor=white"
            },
            {
                "title": "Framer",
                "url": "https://img.shields.io/badge/Framer-black?style={{THEME}}&logo=framer&logoColor=blue"
            },
            {
                "title": "GimpGnuImageManipulationProgram",
                "url": "https://img.shields.io/badge/Gimp-657D8B?style={{THEME}}&logo=gimp&logoColor=FFFFFF"
            },
            {
                "title": "Inkscape",
                "url": "https://img.shields.io/badge/Inkscape-e0e0e0?style={{THEME}}&logo=inkscape&logoColor=080A13"
            },
            {
                "title": "Krita",
                "url": "https://img.shields.io/badge/Krita-203759?style={{THEME}}&logo=krita&logoColor=EEF37B"
            },
            {
                "title": "Proto.io",
                "url": "https://img.shields.io/badge/Proto.io-161637?style={{THEME}}&logo=proto.io&logoColor=00e5ff"
            },
            {
                "title": "Sketch",
                "url": "https://img.shields.io/badge/Sketch-FFB387?style={{THEME}}&logo=sketch&logoColor=black"
            }
        ]
    },
    {
        key : "mldl",
        title : "ML/DL",
        data : [
            {
                "title": "Keras",
                "url": "https://img.shields.io/badge/Keras-%23D00000.svg?style={{THEME}}&logo=Keras&logoColor=white"
            },
            {
                "title": "NumPy",
                "url": "https://img.shields.io/badge/numpy-%23013243.svg?style={{THEME}}&logo=numpy&logoColor=white"
            },
            {
                "title": "Pandas",
                "url": "https://img.shields.io/badge/pandas-%23150458.svg?style={{THEME}}&logo=pandas&logoColor=white"
            },
            {
                "title": "Plotly",
                "url": "https://img.shields.io/badge/Plotly-%233F4F75.svg?style={{THEME}}&logo=plotly&logoColor=white"
            },
            {
                "title": "PyTorch",
                "url": "https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style={{THEME}}&logo=PyTorch&logoColor=white"
            },
            {
                "title": "scikit-learn",
                "url": "https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style={{THEME}}&logo=scikit-learn&logoColor=white"
            },
            {
                "title": "SciPy",
                "url": "https://img.shields.io/badge/SciPy-%230C55A5.svg?style={{THEME}}&logo=scipy&logoColor=%white"
            },
            {
                "title": "TensorFlow",
                "url": "https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style={{THEME}}&logo=TensorFlow&logoColor=white"
            }
        ]
    },
    {
        key : "others",
        title : "OTHERS",
        data : [
            {
                "title": "Alfred",
                "url": "https://img.shields.io/badge/alfred-%235C1F87.svg?style={{THEME}}&logo=alfred"
            },
            {
                "title": "Ansible",
                "url": "https://img.shields.io/badge/ansible-%231A1918.svg?style={{THEME}}&logo=ansible&logoColor=white"
            },
            {
                "title": "AquaSec",
                "url": "https://img.shields.io/badge/aqua-%231904DA.svg?style={{THEME}}&logo=aqua&logoColor=#0018A8"
            },
            {
                "title": "Arduino",
                "url": "https://img.shields.io/badge/-Arduino-00979D?style={{THEME}}&logo=Arduino&logoColor=white"
            },
            {
                "title": "Babel",
                "url": "https://img.shields.io/badge/Babel-F9DC3e?style={{THEME}}&logo=babel&logoColor=black"
            },
            {
                "title": "CMake",
                "url": "https://img.shields.io/badge/CMake-%23008FBA.svg?style={{THEME}}&logo=cmake&logoColor=white"
            },
            {
                "title": "CodeCov",
                "url": "https://img.shields.io/badge/codecov-%23ff0077.svg?style={{THEME}}&logo=codecov&logoColor=white"
            },
            {
                "title": "Confluence",
                "url": "https://img.shields.io/badge/confluence-%23172BF4.svg?style={{THEME}}&logo=confluence&logoColor=white"
            },
            {
                "title": "Docker",
                "url": "https://img.shields.io/badge/docker-%230db7ed.svg?style={{THEME}}&logo=docker&logoColor=white"
            },
            {
                "title": "ESLint",
                "url": "https://img.shields.io/badge/ESLint-4B3263?style={{THEME}}&logo=eslint&logoColor=white"
            },
            {
                "title": "ElasticSearch",
                "url": "https://img.shields.io/badge/-ElasticSearch-005571?style={{THEME}}&logo=elasticsearch"
            },
            {
                "title": "Gradle",
                "url": "https://img.shields.io/badge/Gradle-02303A.svg?style={{THEME}}&logo=Gradle&logoColor=white"
            },
            {
                "title": "Jira",
                "url": "https://img.shields.io/badge/jira-%230A0FFF.svg?style={{THEME}}&logo=jira&logoColor=white"
            },
            {
                "title": "Kubernetes",
                "url": "https://img.shields.io/badge/kubernetes-%23326ce5.svg?style={{THEME}}&logo=kubernetes&logoColor=white"
            },
            {
                "title": "Notion",
                "url": "https://img.shields.io/badge/Notion-%23000000.svg?style={{THEME}}&logo=notion&logoColor=white"
            },
            {
                "title": "Portfolio",
                "url": "https://img.shields.io/badge/Portfolio-%23000000.svg?style={{THEME}}&logo=firefox&logoColor=#FF7139"
            },
            {
                "title": "Postman",
                "url": "https://img.shields.io/badge/Postman-FF6C37?style={{THEME}}&logo=postman&logoColor=white"
            },
            {
                "title": "Prezi",
                "url": "https://img.shields.io/badge/Prezi-%23000000.svg?style={{THEME}}&logo=Prezi&logoColor=white"
            },
            {
                "title": "Rancher",
                "url": "https://img.shields.io/badge/rancher-%230075A8.svg?style={{THEME}}&logo=rancher&logoColor=white"
            },
            {
                "title": "RaspberryPi",
                "url": "https://img.shields.io/badge/-RaspberryPi-C51A4A?style={{THEME}}&logo=Raspberry-Pi"
            },
            {
                "title": "Swagger",
                "url": "https://img.shields.io/badge/-Swagger-%23Clojure?style={{THEME}}&logo=swagger&logoColor=white"
            },
            {
                "title": "Terraform",
                "url": "https://img.shields.io/badge/terraform-%235835CC.svg?style={{THEME}}&logo=terraform&logoColor=white"
            },
            {
                "title": "Trello",
                "url": "https://img.shields.io/badge/Trello-%23026AA7.svg?style={{THEME}}&logo=Trello&logoColor=white"
            },
            {
                "title": "Vagrant",
                "url": "https://img.shields.io/badge/vagrant-%231563FF.svg?style={{THEME}}&logo=vagrant&logoColor=white"
            }
        ]
    }
]
export default skills;