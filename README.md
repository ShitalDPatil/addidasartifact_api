# addidasartifact_api
Steps to Follow:
Create a new project in IDEA ( File > New Project ...)
Make sure you select a maven module

create project
Add the gatling archetype by clicking Add archetype... on the next screen (if you don't already have it)
groupId: com.excilys.ebi.gatling.highcharts
artifactId: gatling-highcharts-maven-archetype
version: 1.4.2
repository: http://repository.excilys.com/content/groups/public

add archetype
Select the newly create archetype and click next
Click Finish button to complete project creation
finish project
It will reflect to the POM file as
<dependency>
    <groupId>io.gatling.highcharts</groupId>
    <artifactId>gatling-charts-highcharts</artifactId>
    <version>2.2.5</version>
</dependency>

If all goes well, the project will be set up and ready to use

To  Execute:
Put integration-test in command line under Maven.
