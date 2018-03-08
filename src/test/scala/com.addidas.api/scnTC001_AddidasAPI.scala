package com.addidas.api

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.core.scenario.Simulation

import scala.concurrent.duration._

class scnTC001_AddidasAPI extends  Simulation{
  private val baselineLoad = rampUsers(1).over(5)
  val httpConf = http.baseURL("http://www.adidas.fi")

  val scnTC001_AddidasAPI=scenario("Addidas")
  .pace(5 seconds).repeat(1) {
    // .pace(5 seconds).during(20 minutes){
       exec(APICall.getApi("/api/pages/landing?path")).pause(4)
  }.inject(baselineLoad)

  setUp(scnTC001_AddidasAPI)
    .protocols(httpConf)

}
