//server
require("/media/servers.xml") //this gets server ports and ids
start("port=6112") start("port=9875") //starts login & redemption servers
start("id=3100") start("id=3101") start("id=3102") start("id=3103") //starts game servers
//this is a proof of concept for a cpps server engine and may not work. I am still very inexperienced with JS
