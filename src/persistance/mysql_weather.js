const mysql_client = require('../db/mysql_client');

exports.saveIpInfo = (ipInfo) => {
    let sql = `INSERT INTO ipInfo (asInfo,city,country,countryCode,isp,lat,lon,org,ip,region,regionName,timezone,zip) VALUES ("${ipInfo.as}","${ipInfo.city}","${ipInfo.country}","${ipInfo.countryCode}","${ipInfo.isp}",${ipInfo.lat},${ipInfo.lon},"${ipInfo.org}","${ipInfo.query}","${ipInfo.region}","${ipInfo.regionName}","${ipInfo.timezone}","${ipInfo.zip}") ON DUPLICATE KEY UPDATE asInfo = "${ipInfo.as}", city = "${ipInfo.city}", country = "${ipInfo.country}", countryCode = "${ipInfo.countryCode}", isp = "${ipInfo.isp}", lat = ${ipInfo.lat}, lon = ${ipInfo.lon}, org = "${ipInfo.org}", region = "${ipInfo.region}", regionName = "${ipInfo.regionName}", timezone = "${ipInfo.timezone}", zip = "${ipInfo.zip}"`;
    return new Promise((resolve, reject) => {
        mysql_client.mysql_client().query(sql, (err, rows) => {
            if (err) reject(err);
            resolve(rows)
        })
    }).then((res)=>{console.log(res)},(err)=>{console.log(err)})
};