<script>
jQuery(".av-section-select").on('click', function(e) {
  var lwprofile = $(this).find("p").attr("data-profile");
  var lwSection = $(this).find("p").text();
dataLayer.push({
    event: 'lwLayerEvent',
    lwSectionText: lwSection,
    lwProfile: lwprofile,
  });
});
</script>