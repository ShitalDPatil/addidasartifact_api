var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "155",
        "ok": "155",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "529",
        "ok": "529",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "342",
        "ok": "342",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "187",
        "ok": "187",
        "ko": "-"
    },
    "percentiles1": {
        "total": "342",
        "ok": "342",
        "ko": "-"
    },
    "percentiles2": {
        "total": "436",
        "ok": "436",
        "ko": "-"
    },
    "percentiles3": {
        "total": "510",
        "ok": "510",
        "ko": "-"
    },
    "percentiles4": {
        "total": "525",
        "ok": "525",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.4",
        "ok": "0.4",
        "ko": "-"
    }
},
contents: {
"req_www-adidas-fi-86bc1": {
        type: "REQUEST",
        name: "www.adidas.fi",
path: "www.adidas.fi",
pathFormatted: "req_www-adidas-fi-86bc1",
stats: {
    "name": "www.adidas.fi",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "155",
        "ok": "155",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "155",
        "ok": "155",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "155",
        "ok": "155",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "155",
        "ok": "155",
        "ko": "-"
    },
    "percentiles2": {
        "total": "155",
        "ok": "155",
        "ko": "-"
    },
    "percentiles3": {
        "total": "155",
        "ok": "155",
        "ko": "-"
    },
    "percentiles4": {
        "total": "155",
        "ok": "155",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.2",
        "ok": "0.2",
        "ko": "-"
    }
}
    },"req_www-adidas-fi-r-7379e": {
        type: "REQUEST",
        name: "www.adidas.fi Redirect 1",
path: "www.adidas.fi Redirect 1",
pathFormatted: "req_www-adidas-fi-r-7379e",
stats: {
    "name": "www.adidas.fi Redirect 1",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "529",
        "ok": "529",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "529",
        "ok": "529",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "529",
        "ok": "529",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "529",
        "ok": "529",
        "ko": "-"
    },
    "percentiles2": {
        "total": "529",
        "ok": "529",
        "ko": "-"
    },
    "percentiles3": {
        "total": "529",
        "ok": "529",
        "ko": "-"
    },
    "percentiles4": {
        "total": "529",
        "ok": "529",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.2",
        "ok": "0.2",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
