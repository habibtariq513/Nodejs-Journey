const http = require("http");
const fs = require("fs");

function myHandler(req, res) {
    // <= Request Handler function
    if (req.url === "/favicon.ico") return res.end();

    const log = `${Date.now()}: ${req.url}, ${req.method} New Request Recieved.\n`;
    const myUrl = new URL(req.url, "http://localhost:8000"); // Modern Method
    console.log(myUrl);

    fs.appendFile("log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                res.end("Home Page"); // It'll display on browser.
                break;

            case "/about":
                // Access query parameters using .searchParams.get()
                const username = myUrl.searchParams.get("username");
                const userID = myUrl.searchParams.get("userID");
                const pass = myUrl.searchParams.get("password");
                res.end(
                    `Hi ${username} - UserID: ${userID} and Password: ${pass}, I'm an Aspiring Full Stack AI Enginner.`,
                );
                break;

            case "/signup":
                if (req.method === "GET") res.end("This is a signup form.");
                else if (req.method === "POST") {
                    // DB Query
                    res.end("Sucess...");
                }
                break;

            default:
                res.end("404 Page not FOUND!");
                break;
        }
    });
    // console.log("New Req Rec"); // It'll display in terminal if written here.
}

const myServer = http.createServer(myHandler);

myServer.listen(8000, () => console.log("Server Started")); // It'll display in terminal after successfull request acceptance in browser