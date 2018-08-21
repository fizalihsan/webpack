import * as $ from "jquery";
import msg from "./content"; // webpack resolves extension-less references to content.ts
import "./message.scss";
$(() => {
    $("<div id='message'>")
        .text(msg + "!")
        .appendTo("body");
});
