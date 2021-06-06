<div id="ipLookup"></div>
<script>
 function getIP(json) {
   if (json.country && json.city) {
    var div = document.getElementById('ipLookup');
    div.innerHTML='Location of '+json.query+': '+json.city+', '+json.country+'';
   }
  }
</script>
<script src="//extreme-ip-lookup.com/json/?callback=getIP" async defer></script>