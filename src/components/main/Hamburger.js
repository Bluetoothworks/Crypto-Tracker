import React from "react";
import "./ham.css"
import $ from 'jquery';
$(function(){
    $(".show").click(function(){
    //   $("#fn").toggleClass("fa-xmark fa-solid");
    $(".sidebar").css("opacity","1");
    $(".sidebar").css("width","400px");
    $(".data").css("opacity","0");
    $(".container").css("opacity","0");
    $(".stats").css("opacity","0");
    $("#main").css("background-color","rgba(0, 12, 39,0)");
    $(this).toggleClass("hide");
    });
    $(".hide").click(function(){
        $(".sidebar").css("opacity","0");
    $(".sidebar").css("width","0");
    $(".data").css("opacity","1");
    $(".container").css("opacity","1");
    $(".stats").css("opacity","1");
    $("#main").css("background-color","rgba(0, 12, 39)");
    });

  });
export default function Hamburger()
{
    return(
        <div id="ham" className="show">
            <i id="fn" className="fa-solid fa-bars"></i>
        </div>
    );
}
