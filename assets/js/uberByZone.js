var z = AvonAnalyticsObjex.Profile.zone;

$(document).ready(function(){
    switch (z){
        case "1138":
        case "1143":
        case "1432":
        case "1436":
        case "1434":
        case "1438":
        case "1443":
        case "1701":
        case "1431":
        case "1435":
        case "1700":
        case "1440":
            $('#uberBannerByZone').show();
            $('#uberBannerByZone').find('.uberByZoneLink').attr('href','https://redeem.uber.com/public/optin/CbqhiKxqkwYN');
        break;
        case "1130":
        case "1131":
        case "1132":
        case "1133":
        case "1134":
        case "1135":
        case "1136":
        case "1140":
        case "1144":
        case "1145":
        case "1600":
        case "1601":
        case "1602":
        case "1603":
        case "1604":
        case "1605":
        case "1606":
        case "1607":
        case "1608":
        case "1610":
        case "1611":
        case "1612":
        case "1613":
        case "1614":
            $('#uberBannerByZone').show();
            $('#uberBannerByZone').find('.uberByZoneLink').attr('href','https://redeem.uber.com/public/optin/8WmGpAYuorCV');
        break;
        
        default:
            $('#uberBannerByZone').hide();      
    };
});
