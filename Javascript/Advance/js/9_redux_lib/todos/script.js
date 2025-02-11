import app from "./component/app.js";
import { attach } from "./store.js";
attach(app, document.getElementById("app"));

// bat su kien cho task_inp => khi nhap xong => enter => them task
