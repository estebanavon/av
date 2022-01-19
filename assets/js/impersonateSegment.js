$(document).ready(function () {
  var avImpersonate = AvonAnalyticsObjex.Impersonate.acct
  var avAcc = AvonAnalyticsObjex.Profile.repAcct
  if (avImpersonate.search(AvonAnalyticsObjex.Profile.repAcct) == -1) {
    $('.hideImpersonalization').hide()
  }
})
