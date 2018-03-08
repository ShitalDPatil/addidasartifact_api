package com.addidas.api

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import java.text.SimpleDateFormat
import java.util.Date

object APICall {

  def getApi(url:String)= {


      exec(http("www.adidas.fi")
      .get(url)
     // .header("cache-control","max-age=0")
      .header("Accept-Encoding","gzip, deflate, br")
        .header("Connection","keep-alive")
      // .header("text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8")
      .header("Upgrade-Insecure-Requests","1")
      .header("Host","www.adidas.fi")
      .check(jsonPath("$..items..analytics_name"))
      .check(substring("error").notExists)
      .check(regex("error").notExists)
      .check(status.in(200 to 210), status.not(500)))
  }



}
