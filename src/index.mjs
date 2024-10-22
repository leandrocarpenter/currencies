import server from "./infra/server.mjs"
import routes from "./app/routes.mjs"

server.use("/", routes)

server.listen(3000)